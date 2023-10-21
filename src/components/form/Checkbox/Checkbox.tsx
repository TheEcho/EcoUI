import React, { ChangeEvent, FunctionComponent, ReactElement, ReactNode, useMemo } from 'react'

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
  isSelected?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  forwardRef?: React.Ref<HTMLInputElement>
  disabled?: boolean
  rounded?: boolean
  variant?: 'primary' | 'secondary'
} & BoxProps

export const Checkbox: FunctionComponent<CheckboxProps> = ({
  id,
  isSelected,
  groupName,
  value,
  label,
  optionalElement,
  onChange,
  forwardRef,
  disabled = false,
  rounded = false,
  variant = 'primary',
  ...rest
}) => {
  const textProps: TextProps = useMemo(() => {
    const isSecondary = variant === 'secondary'

    if (disabled) {
      return {
        color: 'text-light',
      }
    }

    if (isSelected) {
      return {
        color: isSecondary ? 'secondary' : 'text-dark',
        weight: isSecondary ? 'medium' : 'regular',
      }
    }

    return {
      color: 'text',
    }
  }, [disabled, isSelected, variant])

  return (
    <StyledCheckbox {...rest} direction="column">
      <Box direction="row">
        <StyledCheckboxInput
          id={id}
          type="checkbox"
          name={groupName}
          label={label}
          value={value}
          checked={isSelected}
          onChange={onChange}
          ref={forwardRef}
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
}
