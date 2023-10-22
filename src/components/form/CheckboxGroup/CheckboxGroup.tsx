import React, { ChangeEvent, FunctionComponent, useState } from 'react'

import { Box } from '../../core'
import { TStyledBoxProps } from '../../core/Box/Box.styled'
import { Checkbox, CheckboxProps } from '../Checkbox'
import { FormError } from '../FormGroup/FormError'
import {
  StyledCheckboxGroup,
  StyledCheckboxGroupDescription,
  StyledCheckboxGroupOptionContainer,
} from './CheckboxGroup.styled'
import { WithChildren } from '@/types/WithChildren'

export type CheckboxGroupProps = {
  /**
   * Name of the group
   */
  name: string
  /**
   * Default value
   */
  defaultValue?: Map<string, boolean>
  /**
   * Option list
   */
  options: CheckboxProps[]

  /**
   * Flex direction of the box
   */
  direction?: TStyledBoxProps['direction']
  /**
   * Checkbox group description
   */
  description?: string
  /**
   * Error to show for this field
   */
  error?: string | boolean
}

export const CheckboxGroup: FunctionComponent<CheckboxGroupProps & WithChildren> = ({
  defaultValue,
  name,
  options,
  direction = 'row',
  children,
  description,
  error,
  ...rest
}) => {
  const defaultValues = new Map<string, boolean>(
    options.map((o) => [o.id, o.checked] as [string, boolean]),
  )
  const initialValue = defaultValues || new Map<string, boolean>()

  const [values, setValues] = useState<Map<string, boolean>>(initialValue)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id
    const checked = event.target.checked
    values.set(id, checked)
    setValues(new Map(values))
  }

  let content = null
  if (options) {
    content = (
      <StyledCheckboxGroupOptionContainer
        direction={direction}
        gap={direction === 'row' ? 'large' : 'medium'}
        flex={false}
      >
        {options.map((item, index) => {
          const selected = values.get(item.id)
          return (
            <Checkbox
              key={index}
              id={item.id}
              groupName={name}
              label={item.label}
              value={item.value}
              optionalElement={item.optionalElement}
              checked={selected}
              onChange={onChange}
            />
          )
        })}
      </StyledCheckboxGroupOptionContainer>
    )
  } else {
    content = children
  }
  return (
    <StyledCheckboxGroup direction="column" {...rest} flex={false}>
      {description ? (
        <Box margin="none" marginBottom="small">
          <StyledCheckboxGroupDescription variant="object-list-item-title" color="text-dark">
            {description}
          </StyledCheckboxGroupDescription>
        </Box>
      ) : null}
      {content}
      {error && typeof error === 'string' && (
        <Box marginTop="small">
          <FormError>{error}</FormError>
        </Box>
      )}
    </StyledCheckboxGroup>
  )
}
