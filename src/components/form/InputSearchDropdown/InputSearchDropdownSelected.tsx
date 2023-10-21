import type { ChangeEvent, FC, ReactElement } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { useToggle } from '../../../utils/_hooks/useToggle'
import { Box } from '../../core/Box'
import { Drop } from '../../core/Drop'
import { Icon } from '../../core/Icon'
import { LoadingIcon } from '../../core/LoadingIcon'
import { Text } from '../../core/Text'
import { Input } from '../Input'
import { StyledDropdownButton, StyledItemList } from './InputSearchDropdown.styled'
import {
  StyledDropdownSelectedContainer,
  StyledSelectorDiv,
} from './InputSearchDropdownSelected.styled'
import { useDebounceString } from '@/utils/_hooks/useDebounce'
import { KEYS, useKeyPress } from '@/utils/_hooks/useKeyPress'

type ID = string

/**
 * Clone of InputSearchDropdown, except :
 *  - It will always show the selected item
 *  - The search input is now **in** the dropdown instead of outside.
 */
export interface InputSearchDropdownSelectedProps<T> {
  forwardRef?: React.Ref<HTMLInputElement>
  // Search input
  initialQuery?: string
  placeholder?: React.ReactNode
  searchPlaceholder?: string
  // Items filtering should be done here by the caller.
  onQueryChange: (q: string) => void
  loading?: boolean

  // Item spec
  // Technically virtual scroll could be supported if we asked the user for items height.. but this is not something we need today.
  items: readonly T[]
  getId: (t: T) => ID
  ItemRenderer: FC<{ item: T; selected: boolean }>
  SelectedItemRenderer?: FC<{ item: T }>

  // Selected
  value?: T
  onChange: (t: T) => void
  equals: (a: T, b: T) => boolean

  // Optional action on the bottom. Always visible even if the list is long.
  buttonLabel?: string
  onButtonClick?: () => void

  disabled?: boolean
}

export function InputSearchDropdownSelected<T>(
  props: InputSearchDropdownSelectedProps<T>,
): ReactElement {
  const {
    forwardRef,
    items,
    ItemRenderer,
    SelectedItemRenderer,
    getId,
    onChange,
    onQueryChange: _onQueryChange,
    buttonLabel,
    onButtonClick,
    disabled,
  } = props
  const [query, setQuery] = useState(props.initialQuery || '')
  const debouncedQuery = useDebounceString(query)

  const inputRef = useRef<HTMLInputElement>(null)

  const { value: isDropdownOpen, setFalse: onCloseDrop, toggle: onToggleDrop } = useToggle()

  const onQueryChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newQuery = e.target.value
      setQuery(newQuery)
    },
    [setQuery],
  )

  const onValueChange = useCallback(
    (item: T) => {
      onChange(item)
      onCloseDrop()
    },
    [onChange, onCloseDrop],
  )

  useKeyPress(KEYS.escape, onCloseDrop)
  // const selectedItem = TODO : Keyboard nav.

  /**
   * Warn the caller on query change, but do it with a debounce
   */
  useEffect(() => _onQueryChange(debouncedQuery), [_onQueryChange, debouncedQuery])

  const selectedItem =
    (props.value &&
      (SelectedItemRenderer ? (
        <SelectedItemRenderer item={props.value} />
      ) : (
        <ItemRenderer item={props.value} selected={false} />
      ))) ||
    props.placeholder

  const shouldShowDropdown = isDropdownOpen && inputRef.current && !disabled

  return (
    <div>
      <StyledSelectorDiv ref={inputRef} onClick={disabled ? undefined : onToggleDrop} tabIndex={0}>
        {selectedItem}
        <Icon
          icon={<ChevronDownIcon />}
          color="text"
          size="small"
          rotate={shouldShowDropdown ? 180 : 0}
        />
      </StyledSelectorDiv>
      {shouldShowDropdown && (
        <Drop
          dropStyle="custom"
          isDropBorderVisible
          dropTarget={inputRef.current}
          onClickOutside={onCloseDrop}
        >
          <StyledDropdownSelectedContainer withButton={!!buttonLabel}>
            <Input
              autoFocus
              forwardRef={forwardRef}
              prefix={SearchIcon}
              placeholder={props.searchPlaceholder}
              inputSize="default"
              value={query}
              onChange={onQueryChange}
              variant="search"
              disabled={disabled}
            />
            {props.loading && (
              <Box align="center" justify="center" height={5} background="background-lighter">
                <LoadingIcon size="medium" />
              </Box>
            )}
            {!props.loading && items.length > 0 && (
              <StyledItemList>
                {items.map(i => (
                  <li key={getId(i)} onClick={() => onValueChange(i)}>
                    <ItemRenderer
                      item={i}
                      selected={!!props.value && props.equals(i, props.value)}
                    />
                  </li>
                ))}
              </StyledItemList>
            )}
            {!props.loading && items.length === 0 && (
              <Box align="center" justify="center" height={5} background="background-lighter">
                <Text color="text-light">Aucun résultat</Text>
              </Box>
            )}
            {!!buttonLabel && (
              <StyledDropdownButton
                onClick={() => {
                  onButtonClick?.()
                  onCloseDrop()
                }}
              >
                <Text weight="bold" color="secondary">
                  {buttonLabel}
                </Text>
              </StyledDropdownButton>
            )}
          </StyledDropdownSelectedContainer>
        </Drop>
      )}
    </div>
  )
}

const SearchIcon = <Icon icon={<MagnifyingGlassIcon />} color="text-light" />
