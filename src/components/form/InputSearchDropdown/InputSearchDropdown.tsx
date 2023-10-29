import type { ChangeEvent, FC, ReactElement } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { useToggle } from '../../../utils/_hooks/useToggle'
import { Box } from '../../core/Box'
import { Drop } from '../../core/Drop'
import { Icon } from '../../core/Icon'
import { LoadingIcon } from '../../core/LoadingIcon'
import { Text } from '../../core/Text'
import { Input } from '../Input'
import {
  StyledDropdownButton,
  StyledDropdownContainer,
  StyledItemList,
} from './InputSearchDropdown.styled'
import { useDebounceString } from '@/utils/_hooks/useDebounce'
import { KEYS, useKeyPress } from '@/utils/_hooks/useKeyPress'

type ID = string

/**
 * A search-styled input that behaves like InputSelectAutocomplete, but is generic on the way items are rendered.
 * When the input has focus, a dropdown containing passed items is shown.
 *
 * This component does *not* support infinite loading.
 * It assumes the caller will ensure not too many items are provided.
 *
 * See Storybook for visual examples.
 */
export interface InputSearchDropdownProps<T> {
  forwardRef?: React.Ref<HTMLInputElement>
  // Search input
  initialQuery?: string
  placeholder?: string
  textValue?: string
  onClear?: () => void

  // Items filtering should be done here by the caller.
  onQueryChange: (q: string) => void
  loading?: boolean

  // Item spec
  // Technically virtual scroll could be supported if we asked the user for items height.. but this is not something we need today.
  items: readonly T[]
  getId: (t: T) => ID
  ItemRenderer: FC<{ item: T; selected: boolean }>

  // Selected
  value?: T
  onChange: (t: T) => void
  equals: (a: T, b: T) => boolean

  // Optional action on the bottom. Always visible even if the list is long.
  buttonLabel?: string
  onButtonClick?: () => void

  disabled?: boolean
}

export function InputSearchDropdown<T>(props: InputSearchDropdownProps<T>): ReactElement {
  const {
    forwardRef,
    onClear,
    items,
    ItemRenderer,
    textValue,
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

  const { value: isDropdownOpen, setFalse: onCloseDrop, setTrue: onOpenDrop } = useToggle()

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

  return (
    <div>
      <Input
        ref={forwardRef}
        prefix={SearchIcon}
        placeholder={props.placeholder}
        value={textValue || query}
        onChange={onQueryChange}
        variant="search"
        containerForwardRef={inputRef}
        onFocus={onOpenDrop}
        onClick={onOpenDrop}
        disabled={disabled}
        {...(!!onClear && { resetBtnClicked: () => onClear() })}
      />
      {isDropdownOpen && inputRef.current && !disabled && (
        <Drop
          dropStyle="custom"
          isDropBorderVisible
          dropTarget={inputRef.current}
          onClickOutside={onCloseDrop}
        >
          <StyledDropdownContainer withButton={!!buttonLabel}>
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
          </StyledDropdownContainer>
        </Drop>
      )}
    </div>
  )
}

const SearchIcon = <Icon icon={<MagnifyingGlassIcon />} color="text-light" />
