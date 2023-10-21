import React, {
  FunctionComponent,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { usePrevious } from '../../../utils/_hooks/usePrevious'
import { ARROW_DOWN, ARROW_UP, ENTER, ESCAPE, TAB } from '../../../utils/keyBinding'
import { didValueMatch, removeAccents } from '../../../utils/string'
import { Box, Drop, IconProps, Input } from '../../'
import {
  VirtualScroller,
  VirtualScrollerSettings,
} from '../../core/VirtualScroller/VirtualScroller'
import { InputProps } from '../Input/Input'
import { StyledActionList } from './InputAutocomplete.styled'
import { InputAutocompleteAction } from './InputAutocompleteAction/InputAutocompleteAction'
import { InputAutocompleteItem } from './InputAutocompleteItem'

export type TInputAutoCompleteItemWithAction = {
  label: string
  value: string
  role?: 'action'
  icon?: IconProps['icon']
}

type TProps = {
  value?: string
  onChange?: (value: string) => void
  items: (string | TInputAutoCompleteItemWithAction)[]
  onActionClicked?: (value: string) => void
  // For dynamic filtered list with their own filtering, pass false
  shouldFilterItems?: boolean
} & Omit<InputProps, 'onChange' | 'value' | 'css'>

/**
 * Bundles all the logic necessary to the virtual scroller.
 */
export const useInputAutocompleteVirtualScroller = (
  items: TInputAutoCompleteItemWithAction[] = [],
  selectedItemIndex: number,
  onItemClicked: (item: string) => void,
  onActionClicked?: (value: string) => void,
): {
  settings: VirtualScrollerSettings
  getData: (indexStart: number, indexEnd: number) => TInputAutoCompleteItemWithAction[]
  getRow: (item: TInputAutoCompleteItemWithAction, index?: number) => ReactNode
} => {
  const settings = useMemo(() => {
    return {
      minIndex: 0,
      maxIndex: items.length,
      itemHeight: 36,
    }
  }, [items.length])

  const getData = useCallback(
    (indexStart: number, indexEnd: number): TInputAutoCompleteItemWithAction[] =>
      items.slice(indexStart, indexEnd + 1),
    [items],
  )

  const getRow = useCallback(
    (item: TInputAutoCompleteItemWithAction, index?: number): ReactNode =>
      item.role ? (
        <InputAutocompleteAction
          item={item}
          selected={index === selectedItemIndex}
          key={index}
          onActionClick={onActionClicked}
        />
      ) : (
        <InputAutocompleteItem
          label={item.label}
          selected={index === selectedItemIndex}
          key={index}
          onClick={() => onItemClicked(item.value)}
        />
      ),
    [onActionClicked, onItemClicked, selectedItemIndex],
  )

  return { settings, getData, getRow }
}

export const InputAutocomplete: FunctionComponent<TProps> = ({
  value = '',
  onChange = () => {
    // noop
  },
  items,
  variant = 'search',
  onKeyDown,
  onFocus,
  onActionClicked,
  forwardRef,
  shouldFilterItems = true,
  ...inputProps
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isFocus, setIsFocus] = useState(false)
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1) // -1 so that by default nothing is selected (enabling user to enter free text and hit enter without selecting something even if it matched).

  const dropTargetRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const ref = (forwardRef || inputRef) as React.MutableRefObject<HTMLInputElement | null>

  const openDrop = useCallback(() => setIsOpen(true), [])
  const closeDrop = useCallback(() => setIsOpen(false), [])

  const onInputFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>): void => {
      openDrop()
      setIsFocus(true)

      if (onFocus) {
        onFocus(e)
      }
    },
    [onFocus, openDrop],
  )

  const handleIconClicked = useCallback((): void => {
    if (!isOpen) {
      if (ref.current) {
        ref.current.focus()
      }
    }
    setIsOpen(!isOpen)
  }, [isOpen, ref])

  const formattedItems: TInputAutoCompleteItemWithAction[] = useMemo(
    () =>
      items.map((item) => {
        if (typeof item === 'string') {
          return {
            label: item,
            value: item,
          }
        } else {
          return item
        }
      }),
    [items],
  )

  const filteredItems = useMemo(
    () =>
      value
        ? formattedItems.filter((item) => {
            if (item.role || !shouldFilterItems) {
              return true
            } else {
              return removeAccents(item.value, { toLowerCase: true }).includes(
                removeAccents(value, { toLowerCase: true }),
              )
            }
          })
        : formattedItems,
    [value, formattedItems, shouldFilterItems],
  )
  const prevFilteredItems = usePrevious(filteredItems)

  const selectPreviousElement = useCallback((): void => {
    if (selectedItemIndex === -1) {
      setSelectedItemIndex(filteredItems.length - 1)
    } else {
      setSelectedItemIndex(selectedItemIndex - 1)
    }
  }, [filteredItems.length, selectedItemIndex])

  const selectNextElement = useCallback((): void => {
    if (filteredItems.length - 1 === selectedItemIndex) {
      setSelectedItemIndex(0)
    } else {
      setSelectedItemIndex(selectedItemIndex + 1)
    }
  }, [filteredItems.length, selectedItemIndex])

  const onItemClicked = useCallback(
    (item: string): void => {
      onChange(item)

      if (ref.current) {
        ref.current.focus()
      }

      closeDrop()
    },
    [closeDrop, onChange, ref],
  )

  const handleArrowNavigation = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>): void => {
      const keyCode = e.keyCode
      switch (keyCode) {
        case ARROW_UP:
          e.preventDefault()
          selectPreviousElement()
          break
        case ARROW_DOWN:
          e.preventDefault()
          selectNextElement()
          break
        case ENTER:
          if (filteredItems.length) {
            if (filteredItems[selectedItemIndex].role && onActionClicked) {
              onActionClicked(filteredItems[selectedItemIndex].value)
              setIsFocus(false)
              onChange('')
            } else {
              onChange(filteredItems[selectedItemIndex].value)
            }

            closeDrop()
          }

          e.preventDefault()
          break
        case TAB:
        case ESCAPE:
          closeDrop()
          break
        default:
          break
      }
      if (onKeyDown) {
        onKeyDown(e)
      }
    },
    [
      closeDrop,
      filteredItems,
      onActionClicked,
      onChange,
      onKeyDown,
      selectNextElement,
      selectPreviousElement,
      selectedItemIndex,
    ],
  )

  useEffect(() => {
    if (isOpen) {
      return
    }
    const itemExistIndex = filteredItems.findIndex((item) => didValueMatch(value, item.value))
    setSelectedItemIndex(itemExistIndex >= 0 ? itemExistIndex : -1)
  }, [isOpen, filteredItems, value])

  useEffect(() => {
    // Do nothing if filteredItems did not change.
    // JSON.stringify to compare lists by content.
    if (JSON.stringify(filteredItems) === JSON.stringify(prevFilteredItems)) {
      return
    }
    if (!filteredItems.length) {
      closeDrop()
      setSelectedItemIndex(0)
    } else {
      const itemExist = filteredItems.find((item) => didValueMatch(value, item.value))

      if (isFocus && !itemExist) {
        openDrop()
      }
    }

    if (selectedItemIndex >= filteredItems.length) {
      setSelectedItemIndex(0)
    }
  }, [filteredItems, prevFilteredItems, isFocus, selectedItemIndex, value, closeDrop, openDrop])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (!isFocus && value.length > 0) {
        setIsFocus(true)
      }

      if (!isOpen && value.length > 0) {
        openDrop()
      }

      onChange(e.target.value)
    },
    [isFocus, isOpen, onChange, openDrop, value],
  )

  const { settings, getData, getRow } = useInputAutocompleteVirtualScroller(
    filteredItems,
    selectedItemIndex,
    onItemClicked,
    onActionClicked,
  )

  /**
   * Open Drop when list change
   */
  useEffect(() => {
    if (isFocus) {
      openDrop()
    }
  }, [items, isFocus, setIsOpen, openDrop])

  return (
    <>
      <Box ref={dropTargetRef}>
        <Input
          onFocus={onInputFocus}
          value={value}
          onChange={handleChange}
          onKeyDown={handleArrowNavigation}
          variant={variant}
          iconClicked={handleIconClicked}
          forwardRef={ref}
          {...inputProps}
        />
      </Box>
      {!!(dropTargetRef.current && isOpen && filteredItems.length) && (
        <Drop
          fitTarget
          hideCardStyle
          dropTarget={dropTargetRef.current}
          targetMargin={0}
          onClickOutside={closeDrop}
        >
          <StyledActionList>
            <VirtualScroller
              settings={settings}
              getData={getData}
              getRow={getRow}
              selectedItemIndex={selectedItemIndex}
            />
          </StyledActionList>
        </Drop>
      )}
    </>
  )
}
