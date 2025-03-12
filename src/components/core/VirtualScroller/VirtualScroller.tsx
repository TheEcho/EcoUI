import _ from 'lodash'
import {
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import useResizeObserver from '@react-hook/resize-observer'

import { usePrevious } from '../../../utils/_hooks/usePrevious'

export interface VirtualScrollerSettings {
  minIndex: number
  maxIndex: number
  itemHeight: number
}

export interface VirtualScrollerProps<T> {
  settings: VirtualScrollerSettings
  getData: (indexStart: number, indexEnd: number) => T[]
  getRow: (item: T, index?: number) => ReactNode

  startIndex?: number
  selectedItemIndex?: number
  className?: string
}

const getIndexFromScroll = ({
  element,
  itemHeight,
  minIndex,
}: {
  element: HTMLElement
  minIndex: number
  itemHeight: number
}): number => {
  const scrollTop = element?.scrollTop
  const _index = minIndex + Math.floor(scrollTop / itemHeight)
  return _index
}

const getTolerance = (nbVisibleItems: number) => nbVisibleItems
const getNbItemsToBuffer = (nbVisibleItems: number) =>
  nbVisibleItems + 2 * getTolerance(nbVisibleItems)

/**
 * A Virtual Scroller provides the ability to display big list of items without injecting all the items in the DOM:
 * - What we call the viewport is the visible zone of the list (the element in which you scroll)
 * - All the elements that are not visible in the viewport are replaced by two divs (one for the elements above the viewport, one for the elements bellow).
 * - Those divs have the same height as if they contained the elements they stand for (which is why the height of an item must be provided in the settings).
 *
 * On scroll, the virtual scroller:
 * - compute the index of the new top displayed item (given the scroll position),
 * - load enough items to fill the viewport starting from the top displayed one (plus some extra items before and after to make the illusion even better),
 * - display those items and reset the height of the top and bellow empty divs to match with the new top displayed item index.
 *
 * More details here : https://blog.logrocket.com/virtual-scrolling-core-principles-and-basic-implementation-in-react/
 *
 * @param settings:
 * - minIndex: Minimum index of the scrollable items (usually 0).
 * - maxIndex: Maximum index of the scrollable items (usually the lenth of the list to be displayed).
 * - itemHeight: Height in pixels of the DOM element representing an item in the list.
 * @param getData A method that should return all the items contained between indexStart and indexEnd (included).
 * @param getRow A method that should return a react node representing the item as it should be displayed in the list.
 *
 * @param startIndex Index of the initial top visible item (optional, will make the list jump if updated).
 * @param selectedItemIndex Index of the selected item (optional, selectedItem index will always be visible, a scroll action is triggered if it gets out of the displayed ranged).
 */
export function VirtualScroller<T>({
  settings,
  getData,
  getRow,
  startIndex = settings.minIndex,
  selectedItemIndex,
  className,
}: VirtualScrollerProps<T>): JSX.Element {
  const [state, setState] = useState({
    topPaddingHeight: 0, // Height of the zone above the buffered zone.
    bottomPaddingHeight: 0, // Height of the zone bellow the buffered zone.
    data: [] as T[], // Data feeding currently displayed items.
  })
  const viewportElement = useRef<HTMLTableSectionElement>(null)
  const [index, setIndex] = useState(startIndex) // Index of the top visible item.
  const [lastIndex, setLastIndex] = useState(startIndex) // Index of the top visible item last time view was updated.
  const [topIndex, setTopIndex] = useState(startIndex) // Index of the top loaded item.
  const [bottomIndex, setBottomIndex] = useState(startIndex)

  /**
   * @returns The number of items that fit in the viewport height (is put in a method so that viewportHeight change are taken into consideration).
   */
  const getNbVisibleItems = useCallback((): number => {
    const viewportHeight = viewportElement.current?.offsetHeight
    if (!viewportHeight) {
      return 0
    }

    return Math.floor(viewportHeight / settings.itemHeight)
  }, [settings])

  /**
   * Update the view by retrieving new items, and updating the empty spaces above and bellow the displayed items.
   * @param _index: index of the current top visible element.
   */
  const updateView = useCallback(
    (_index: number) => {
      setLastIndex(_index)
      const { minIndex, maxIndex, itemHeight } = settings
      const nbVisibleItems = getNbVisibleItems()
      const tolerance = getTolerance(nbVisibleItems)
      const newTopIndex = Math.max(_index - tolerance, minIndex)
      setTopIndex(newTopIndex)

      // Fetch data.
      const nbItemsToBuffer = getNbItemsToBuffer(nbVisibleItems)
      const newBottomIndex = Math.min(newTopIndex + nbItemsToBuffer, maxIndex)
      setBottomIndex(newBottomIndex)
      const data = getData(newTopIndex, newBottomIndex)

      // Compute new empty spaces height.
      const topPaddingHeight = Math.max((newTopIndex - minIndex) * itemHeight, 0)
      const totalHeight = (maxIndex - minIndex) * itemHeight
      const bottomPaddingHeight = Math.max(totalHeight - newBottomIndex * itemHeight, 0)

      setState({
        data,
        bottomPaddingHeight,
        topPaddingHeight,
      })
    },
    [getData, getNbVisibleItems, settings],
  )

  /**
   * Update index and refresh view if necessary.
   */
  const updateIndex = useCallback(
    (_index: number) => {
      setIndex(_index)
      const nbVisibleItems = getNbVisibleItems()
      const indexDiff = _index - lastIndex
      if (indexDiff < 0 && _index <= topIndex + 5) {
        return updateView(_index)
      }
      if (indexDiff > 0 && _index >= bottomIndex - nbVisibleItems - 5) {
        return updateView(_index)
      }
    },
    [bottomIndex, getNbVisibleItems, lastIndex, topIndex, updateView],
  )

  /**
   * Update index based on new scroll position.
   */
  const syncStartIndexWithScroll = useMemo(
    () =>
      _.throttle((e: React.UIEvent<HTMLElement>): void => {
        if (!e.currentTarget) {
          return // for some unknown reason, it might happen, leading to a NaN index, and some further bugs, so we return instead.
        }
        const _index = getIndexFromScroll({
          element: e.currentTarget,
          minIndex: settings.minIndex,
          itemHeight: settings.itemHeight,
        })
        updateIndex(_index)
      }, 100),
    [settings.minIndex, settings.itemHeight, updateIndex],
  )

  /**
   * Makes the specified line the top visible one.
   */
  const goToLine = useCallback(
    (_index: number) => {
      updateIndex(_index)
      const itemHeight = settings.itemHeight
      setTimeout(
        () => viewportElement.current && viewportElement.current.scroll(0, _index * itemHeight),
        0,
      ) // Wait for the DOM to render before scrolling. Ugly but I did not find a better way to do it.
    },
    [settings.itemHeight, updateIndex],
  )

  // Maybe update top visible line index on selectedItem change (to make it visible)
  const prevSelectedItemIndex = usePrevious(selectedItemIndex)
  useEffect(() => {
    // Only do something if selectedItemIndex changed.
    if (prevSelectedItemIndex === selectedItemIndex) {
      return
    }
    const nbVisibleItems = getNbVisibleItems()
    if (selectedItemIndex === undefined) {
      return
    }
    // Selected item is before the top visible line.
    if (selectedItemIndex < index) {
      return goToLine(selectedItemIndex)
    }
    // Selected item is after the bottom visible line.
    if (index + nbVisibleItems - 1 < selectedItemIndex) {
      return goToLine(selectedItemIndex - (nbVisibleItems - 1))
    }
  }, [selectedItemIndex, prevSelectedItemIndex, index, getNbVisibleItems, goToLine])

  // Sync top visible line index with startIndex (used at init and to navigate within table from the outside)
  const prevStartIndex = usePrevious(startIndex)
  useEffect(() => {
    if (prevStartIndex !== startIndex) {
      goToLine(startIndex)
    }
  }, [startIndex, prevStartIndex, goToLine])

  // Refresh view when getData or settings change (will happen if data get filtered from the outside for instance).
  const previousGetData = usePrevious(getData)
  const previousSettings = usePrevious(settings)
  useLayoutEffect(() => {
    if (previousGetData === getData && _.isEqual(settings, previousSettings)) {
      return
    }
    const _index = !!viewportElement.current
      ? getIndexFromScroll({ element: viewportElement.current, ...settings })
      : settings.minIndex
    updateView(_index)
  }, [getData, previousGetData, previousSettings, settings, updateView])

  // Refresh the view when viewport's size change
  useResizeObserver(viewportElement, () => setTimeout(() => updateView(index), 0))

  return (
    <div
      className={`viewport ${className || ''}`}
      style={{ height: '100%', width: '100%', overflowY: 'auto' }}
      ref={viewportElement}
      onScroll={(e) => {
        e.persist()
        syncStartIndexWithScroll(e)
      }}
    >
      {/* This space represents all the items that are not loaded, above the buffered zone. */}
      <div style={{ height: state.topPaddingHeight }}></div>
      {/* Iterate over the items that were buffered to add their corresponding row into the DOM. */}
      {state.data.map((item, _index) => getRow(item, _index + topIndex))}
      {/* This space represents all the items that are not loaded, bellow the buffered zone. */}
      <div style={{ height: state.bottomPaddingHeight }}></div>
    </div>
  )
}

export default VirtualScroller
