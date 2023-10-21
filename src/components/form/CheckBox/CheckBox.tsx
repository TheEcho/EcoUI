import React, { ChangeEvent, FunctionComponent, ReactElement, ReactNode, useMemo } from 'react'

import { Box, BoxProps } from '../../core/Box'
import { TextProps } from '../../core/Text'
import {
  OptionalElementContainer,
  StyledCheckBox,
  StyledCheckBoxInput,
  StyledCheckBoxLabel,
  StyledCheckBoxLabelText,
} from './CheckBox.styled'

export type CheckBoxProps = {
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

export const CheckBox: FunctionComponent<CheckBoxProps> = ({
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
    <StyledCheckBox {...rest} direction="column">
      <Box direction="row">
        <StyledCheckBoxInput
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

        <StyledCheckBoxLabel disabled={disabled} htmlFor={id}>
          {label && (
            <>
              {typeof label === 'string' ? (
                <StyledCheckBoxLabelText size="regular" {...textProps} rounded={rounded}>
                  {label}
                </StyledCheckBoxLabelText>
              ) : (
                label
              )}
            </>
          )}
        </StyledCheckBoxLabel>
      </Box>
      {optionalElement && (
        <OptionalElementContainer direction="row" margin="none">
          {optionalElement ? optionalElement : null}
        </OptionalElementContainer>
      )}
    </StyledCheckBox>
  )
}
