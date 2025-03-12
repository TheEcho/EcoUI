import { ChangeEvent, FunctionComponent, ReactElement, ReactNode, forwardRef, useMemo } from 'react'

import { Box, BoxProps } from '../../core/Box'
import { TextProps } from '../../core/Text'
import {
  OptionalElementContainer,
  StyledCheckbox,
  StyledCheckboxInput,
  StyledCheckboxLabel,
  StyledCheckboxLabelText,
} from './Checkbox.styled'

export type CheckboxProps = {
  id: string
  groupName?: string
  value?: string
  label?: ReactElement | string
  optionalElement?: ReactNode
  checked?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  forwardRef?: React.Ref<HTMLInputElement>
  disabled?: boolean
  rounded?: boolean
  variant?: 'primary' | 'secondary'
} & BoxProps

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  id,
  checked,
  groupName,
  value,
  label,
  optionalElement,
  onChange,
  disabled = false,
  rounded = false,
  variant = 'primary',
  ...rest
}, ref) => {
  const textProps: TextProps = useMemo(() => {
    const isSecondary = variant === 'secondary'

    if (disabled) {
      return {
        color: 'text-light',
      }
    }

    if (checked) {
      return {
        color: isSecondary ? 'secondary' : 'text-dark',
        weight: isSecondary ? 'medium' : 'regular',
      }
    }

    return {
      color: 'text',
    }
  }, [disabled, checked, variant])

  return (
    <StyledCheckbox {...rest} direction="column">
      <Box direction="row">
        <StyledCheckboxInput
          id={id}
          type="checkbox"
          name={groupName}
          label={label}
          value={value}
          checked={checked}
          onChange={onChange}
          ref={ref}
          disabled={disabled}
          rounded={rounded}
          variant={variant}
        />

        <StyledCheckboxLabel disabled={disabled} htmlFor={id}>
          {label && (
            <>
              {typeof label === 'string' ? (
                <StyledCheckboxLabelText size="regular" {...textProps} rounded={rounded}>
                  {label}
                </StyledCheckboxLabelText>
              ) : (
                label
              )}
            </>
          )}
        </StyledCheckboxLabel>
      </Box>
      {optionalElement && (
        <OptionalElementContainer direction="row" margin="none">
          {optionalElement ? optionalElement : null}
        </OptionalElementContainer>
      )}
    </StyledCheckbox>
  )
})
