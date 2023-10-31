import { ChangeEvent, FunctionComponent, ReactElement, forwardRef, useCallback } from 'react'

import { BoxProps } from '@/index'

import { Box, Text } from '../../core'
import {
  StyledChildrenBox,
  StyledRadioButtonInput,
  StyledRadioButtonLabel,
  StyledRadioButtonLabelText,
} from './RadioButton.styled'

export type RadioButtonProps = {
  id: string
  name: string
  value?: string
  label?: string | ReactElement
  description?: string
  isSelected?: boolean
  direction?: 'column' | 'row'
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  variants?: 'primary' | 'secondary'
  disabled?: boolean
} & BoxProps

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(({
  id,
  isSelected,
  name,
  value,
  label,
  description,
  direction = 'row',
  onChange,
  children,
  variants = 'primary',
  disabled = false,
  ...rest
}, ref) => {
  return (
    <Box {...rest} direction="column" flex={false}>
      <Box direction="row">
        <StyledRadioButtonInput
          variants={variants}
          id={id}
          type="radio"
          name={name}
          value={value}
          checked={isSelected}
          onChange={onChange}
          ref={ref}
          disabled={disabled}
        />

        <StyledRadioButtonLabel htmlFor={id}>
          {typeof label === 'string' ? (
            <StyledRadioButtonLabelText
              size="regular"
              color={disabled ? 'text-light' : isSelected ? 'text-dark' : 'text'}
            >
              {label}
            </StyledRadioButtonLabelText>
          ) : (
            label
          )}
        </StyledRadioButtonLabel>
      </Box>

      <StyledChildrenBox>
        {!!description && <Text color="text-light">{description}</Text>}
        {children}
      </StyledChildrenBox>
    </Box>
  )
})

export type TypedRadioButtonProps<T extends string> = Omit<
  RadioButtonProps,
  'value' | 'onChange'
> & {
  value?: T
  onChange?: (value: T) => void
}

/**
 * A better-typed interface for RadioButton.
 */
export function TypedRadioButton<T extends string>(props: TypedRadioButtonProps<T>): ReactElement {
  const { onChange: _onChange, ...restProps } = props

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      _onChange?.(event.target.value as T)
    },
    [_onChange],
  )

  return <RadioButton {...restProps} onChange={onChange} />
}
