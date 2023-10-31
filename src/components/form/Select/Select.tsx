import { FunctionComponent, PropsWithChildren, forwardRef, useCallback } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

import { StyledContainer, StyledIcon, StyledSelect } from './Select.styled'

export type SelectProps = {
  name: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLSelectElement>) => void
  disabled?: boolean
}

export const Select = forwardRef<HTMLSelectElement, PropsWithChildren<SelectProps>>(({ name, ...rest }, ref) => {
  return (
    <StyledContainer
      align="center"
      borderRadius="medium"
      gap="small"
      direction="row"
      position="relative"
    >
      <StyledSelect ref={ref} name={name} {...rest} />
      {rest.disabled !== true && (
        <StyledIcon icon={<ChevronDownIcon />} color="text-light" size="small" />
      )}
    </StyledContainer>
  )
})

export type SelectNullableProps = Omit<SelectProps, 'onChange' | 'value'> & {
  onChange?: (value: string | undefined | null) => void
  value?: string | null | undefined
}

/**
 * Use this select when the field can be cleared
 *
 **/
export const SelectNullable: FunctionComponent<SelectNullableProps> = ({
  onChange,
  value,
  ...rest
}) => {
  const _onChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      return e.target.value === '' ? onChange?.(null) : onChange?.(e.target.value)
    },
    [onChange],
  )
  return <Select {...rest} onChange={_onChange} value={value ?? undefined} />
}
