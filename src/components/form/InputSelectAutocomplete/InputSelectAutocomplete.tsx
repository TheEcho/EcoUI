import React, {
  FunctionComponent,
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { ARROW_DOWN, ARROW_UP, ENTER, ESCAPE, TAB } from '../../../utils/keyBinding'
import { didValueMatch, removeAccents } from '../../../utils/string'
import { Box, Drop, IconProps, Text } from '../../core'
import VirtualScroller, {
  VirtualScrollerSettings,
} from '../../core/VirtualScroller/VirtualScroller'
import { Input, InputProps } from '../Input/Input'
import { useCombinedRefs } from '../Input/utils'
import { InputAutocompleteAction } from '../InputAutocomplete/InputAutocompleteAction/InputAutocompleteAction'
import { ContainerCss, StyledActionList } from './InputSelectAutocomplete.styled'
import { InputSelectAutocompleteItem } from './InputSelectAutocompleteItem'

export type TInputSelectAutocompleteItem = {
  value: string
  label: string
  description?: string
  role?: 'action'
  icon?: IconProps['icon']
}

type TProps = {
  value?: string
  localValue?: string
  dropRef?: React.Ref<HTMLDivElement>
  items: TInputSelectAutocompleteItem[]
  onChange?: (value: string) => void
  emptyItem?: boolean
  staticAction?: boolean
  disableFiltering?: boolean
  onActionClicked?: (value: string) => void
  onLocalChange?: (value: string) => void
  onDropStateChange?: (dropState: boolean) => void
  dropWidth?: number
  fitTarget?: boolean
  shouldStayFocusOnClick?: boolean
  shouldCloseOnActionClick?: boolean
  shouldClearLabelOnClick?: boolean
  shouldClearValueOnActionClick?: boolean
  itemBuilder?: (item: TInputSelectAutocompleteItem) => ReactNode
  allowPlainText?: boolean
} & Omit<InputProps, 'onChange' | 'value' | 'css'>

/**
 * Bundles all the logic necessary to the virtual scroller.
 */
const useInputSelectAutocompleteVirtualScroller = (
  items: TInputSelectAutocompleteItem[] = [],
  selectedItemIndex: number,
  onItemPicked: (item: TInputSelectAutocompleteItem) => void,
  itemBuilder?: (item: TInputSelectAutocompleteItem) => ReactNode,
): {
  settings: VirtualScrollerSettings
  getData: (indexStart: number, indexEnd: number) => TInputSelectAutocompleteItem[]
  getRow: (item: TInputSelectAutocompleteItem, index?: number) => ReactNode
} => {
  const settings = useMemo(() => {
    return {
      minIndex: 0,
      maxIndex: items.length,
      itemHeight: 36,
    }
  }, [items.length])

  const getData = useCallback(
    (indexStart: number, indexEnd: number): TInputSelectAutocompleteItem[] =>
      items.slice(indexStart, indexEnd + 1),
    [items],
  )

  const getRow = useCallback(
    (item: TInputSelectAutocompleteItem, index?: number): ReactNode => {
      if (itemBuilder) {
        const customComponent = itemBuilder(item)
        return (
          <Box key={index} onClick={() => onItemPicked(item)}>
            {customComponent}
          </Box>
        )
      }

      if (item.role === 'action') {
        return (
          <InputAutocompleteAction
            item={item}
            selected={index === selectedItemIndex}
            key={index}
            onActionClick={() => onItemPicked(item)}
          />
        )
      }

      return (
        <InputSelectAutocompleteItem
          {...item}
          selected={index === selectedItemIndex}
          key={index}
          onClick={() => onItemPicked(item)}
        />
      )
    },

    [itemBuilder, onItemPicked, selectedItemIndex],
  )

  return { settings, getData, getRow }
}

export const InputSelectAutocomplete = forwardRef<HTMLInputElement, TProps>(({
  value = '',
  items,
  onChange = () => {
    // noop
  },
  localValue: inputValue,
  emptyItem,
  variant = 'search',
  staticAction = false,
  onKeyDown,
  onFocus,
  onActionClicked,
  onLocalChange,
  disableFiltering = false,
  onDropStateChange,
  dropWidth,
  fitTarget = true,
  shouldStayFocusOnClick = false,
  shouldCloseOnActionClick = true,
  shouldClearLabelOnClick = false,
  shouldClearValueOnActionClick = true,
  dropRef,
  itemBuilder,
  /**
   * If no Algolia item is found we allow the user to enter a plain text.
   * @default false
   */
  allowPlainText = false,
  suffix,
  ...inputProps
}, ref) => {
  const [localValue, setLocalValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  const [selectedItemIndex, setSelectedItemIndex] = useState(0)

  const dropTargetRef = useRef<HTMLDivElement | null>(null)

  const inputRef = useRef<HTMLInputElement | null>(
    ref && typeof ref !== 'function' ? ref.current : null,
  )

  const actionItems = items.filter(item => item.role === 'action')
  const combineInputdRef = useCombinedRefs(ref, inputRef)

  React.useLayoutEffect(() => {
    if (typeof ref === 'function' && inputRef.current) {
      ref(inputRef.current)
    }
  }, [inputRef, ref])

  const allItems = useMemo(
    () => (emptyItem ? [{ value: '', label: '' }, ...items] : items),
    [emptyItem, items],
  )

  const filteredItems = useMemo(
    () =>
      localValue
        ? allItems.filter(item => {
            if (staticAction && item.role === 'action') {
              return false
            }

            return (
              disableFiltering ||
              removeAccents(item.label, { toLowerCase: true }).includes(
                removeAccents(localValue, { toLowerCase: true }),
              )
            )
          })
        : allItems.filter(item => (staticAction ? item.role !== 'action' : true)),
    [localValue, allItems, staticAction, disableFiltering],
  )

  const openDrop = (e?: React.FocusEvent<HTMLInputElement>): void => {
    setIsOpen(true)
    setIsFocus(true)

    if (onFocus && e) {
      onFocus(e)
    }
  }

  const closeDrop = (): void => setIsOpen(false)

  const onLocalValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLocalValue(event.target.value)

    if (onLocalChange) {
      onLocalChange(event.target.value)
    }

    if (!isFocus) {
      setIsFocus(true)
    }

    if (!isOpen) {
      setIsOpen(true)
    }
  }

  const onItemPicked = (item: TInputSelectAutocompleteItem): void => {
    if (item.role && onActionClicked) {
      onActionClicked(item.value)
      shouldClearValueOnActionClick && onChange('')

      if (!shouldCloseOnActionClick) {
        return
      }
    } else {
      onChange(item.value)
      !shouldClearLabelOnClick && setLocalValue(item.label)
    }

    if (combineInputdRef.current) {
      combineInputdRef.current.focus()
    }

    closeDrop()
  }

  const selectPreviousElement = (): void => {
    const isFirstItemSelected = selectedItemIndex === 0
    setSelectedItemIndex(isFirstItemSelected ? filteredItems.length - 1 : selectedItemIndex - 1)
  }

  const selectNextElement = (): void => {
    const isLastItemSelected = filteredItems.length - 1 === selectedItemIndex
    setSelectedItemIndex(isLastItemSelected ? 0 : selectedItemIndex + 1)
  }

  const handleArrowNavigation = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    const keyCode = e.keyCode
    if ([ARROW_UP, ARROW_DOWN].includes(keyCode)) {
      e.preventDefault()
    }

    switch (keyCode) {
      case ARROW_UP:
        selectPreviousElement()
        break
      case ARROW_DOWN:
        selectNextElement()
        break
      case ENTER: {
        if (!isOpen) {
          openDrop()
          break
        }
        const selectedItem = filteredItems[selectedItemIndex]
        if (!selectedItem) {
          closeDrop()
          break
        }
        onItemPicked(filteredItems[selectedItemIndex])
        break
      }
      case TAB:
      case ESCAPE:
        closeDrop()
        break
    }

    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  const handleIconClicked = (): void => {
    if (!isOpen) {
      combineInputdRef.current?.focus()
    }
    setIsOpen(!isOpen)
  }

  const handleClick = (): void => {
    if (!isOpen) {
      openDrop()
    }
  }

  // Make sure there is always a selected item index.
  useEffect(() => {
    if (!filteredItems.length) {
      setSelectedItemIndex(0)
    }
  }, [filteredItems])

  // Keep selected item index up to date.
  useEffect(() => {
    const itemExistIndex = filteredItems.findIndex(item => didValueMatch(localValue, item.label))

    if (itemExistIndex >= 0) {
      setSelectedItemIndex(itemExistIndex)
    } else {
      setSelectedItemIndex(0)
    }
  }, [localValue, filteredItems])

  // Keep local value synchronized with prop.
  useEffect(() => {
    if (inputValue !== undefined) {
      setLocalValue(inputValue)
    }
  }, [inputValue])

  // Keep local value synchronized with value.
  useEffect(() => {
    const itemMatchingValue = value ? items.find(item => item.value === value) : undefined
    if (itemMatchingValue !== undefined) {
      setLocalValue(itemMatchingValue.label)
    }
  }, [value, items])

  useEffect(() => {
    if (onDropStateChange) {
      onDropStateChange(isOpen)
    }
  }, [isOpen, onDropStateChange])

  /**
   * Open Drop when list change
   */
  useEffect(() => {
    if (isFocus && shouldStayFocusOnClick) {
      setIsOpen(true)
    }
  }, [items, isFocus, setIsOpen, shouldStayFocusOnClick])

  const { settings, getData, getRow } = useInputSelectAutocompleteVirtualScroller(
    staticAction ? filteredItems.filter(item => item.role !== 'action') : filteredItems,
    selectedItemIndex,
    onItemPicked,
    itemBuilder,
  )

  const shouldShowDrop = useMemo(
    () => isOpen && (!!filteredItems.length || (!filteredItems.length && !allowPlainText)),
    [filteredItems.length, isOpen, allowPlainText],
  )
  return (
    <>
      <Box ref={dropTargetRef}>
        <Input
          onFocus={openDrop}
          value={localValue}
          onChange={onLocalValueChange}
          onKeyDown={handleArrowNavigation}
          css={ContainerCss(isOpen)}
          variant={variant}
          ref={combineInputdRef}
          iconClicked={handleIconClicked}
          onClick={handleClick}
          suffix={!filteredItems.length && allowPlainText ? null : suffix}
          {...inputProps}
        />
      </Box>
      {dropTargetRef.current && shouldShowDrop && (
        <Drop
          hideCardStyle
          dropTarget={dropTargetRef.current}
          targetMargin={-1}
          onClickOutside={closeDrop}
          width={dropWidth}
          fitTarget={fitTarget}
          forwardRef={dropRef}
        >
          <StyledActionList variants="with-input" isStatic={staticAction}>
            <Box direction="column">
              {!!filteredItems.length ? (
                <VirtualScroller
                  settings={settings}
                  getData={getData}
                  getRow={getRow}
                  selectedItemIndex={selectedItemIndex}
                />
              ) : (
                <Box padding="small" paddingLeft="medium" paddingRight="medium">
                  <Text color="text-light">Aucun résultat</Text>
                </Box>
              )}
            </Box>
            {staticAction && !!actionItems.length && (
              <Box direction="column">
                {actionItems.map((item, index) => (
                  <InputAutocompleteAction
                    item={item}
                    selected={false}
                    key={index}
                    onActionClick={() => onItemPicked(item)}
                  />
                ))}
              </Box>
            )}
          </StyledActionList>
        </Drop>
      )}
    </>
  )
})

export type TInputSelectAutocomplete = TProps
