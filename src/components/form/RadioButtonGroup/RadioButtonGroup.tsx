import React, { ChangeEvent, FunctionComponent, forwardRef, useEffect, useState } from 'react'

import { Box, BoxProps, Text } from '@/index'

import { TStyledBoxProps } from '../../core/Box/Box.styled'
import { FormError } from '../FormGroup/FormError'
import { FormLabel } from '../FormLabel'
import { RadioButton, RadioButtonProps } from '../RadioButton'

export type RadioButtonGroupProps = {
  /**
   * Name of the group
   */
  name?: string
  /**
   * Default value
   */
  defaultValue?: string
  /**
   * Selected value
   */
  selectedValue?: string
  /**
   * Option list
   */
  options?: RadioButtonProps[]
  /**
   *
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  /**
   * Flex direction of the box
   */
  direction?: TStyledBoxProps['direction']
  /**
   * Radio group description
   */
  description?: string
  /**
   * Radio group subDescription
   */
  subDescription?: string
  /**
   * Error to show for this field
   */
  error?: string | boolean

  variants?: 'primary' | 'secondary'
} & BoxProps

export const RadioButtonGroup = forwardRef<HTMLInputElement, RadioButtonGroupProps>(({
  defaultValue,
  selectedValue,
  name,
  options,
  direction = 'column',
  children,
  description,
  subDescription,
  error,
  onChange,
  gap = 'lg-medium',
  variants = 'primary',
  ...rest
}, ref) => {
  const [value, setValue] = useState<string>('')

  const updateValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
    onChange && onChange(event)
  }

  useEffect(() => {
    setValue(defaultValue || options?.find((option) => option.isSelected)?.value || '')
  }, [options, defaultValue])

  let content = null
  if (options) {
    content = (
      <Box direction="column" gap={gap}>
        {options.map((item, index) => {
          return (
            <RadioButton
              flex={direction === 'row' ? false : true}
              key={index}
              id={item.id}
              name={item.name}
              label={item.label}
              value={item.value}
              direction={direction}
              description={item.description}
              isSelected={value === item.value}
              onChange={updateValue}
              ref={ref}
              variants={variants}
            />
          )
        })}
      </Box>
    )
  } else {
    content = children
  }
  return (
    <Box direction="column" {...(!subDescription && { gap: 'medium' })} {...rest}>
      {description && <FormLabel name={name}>{description}</FormLabel>}
      {subDescription && <Text>{subDescription}</Text>}
      <Box direction={direction} gap={gap} {...(subDescription && { marginTop: 'large' })}>
        {content}
      </Box>
      {error && typeof error === 'string' && (
        <Box marginTop="small">
          <FormError>{error}</FormError>
        </Box>
      )}
    </Box>
  )
})
