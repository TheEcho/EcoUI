import React, { ChangeEvent, FunctionComponent, useState } from 'react'

import { Box } from '../../core'
import { TStyledBoxProps } from '../../core/Box/Box.styled'
import { CheckBox, CheckBoxProps } from '../../form/CheckBox'
import { FormError } from '../FormGroup/FormError'
import {
  StyledCheckBoxGroup,
  StyledCheckBoxGroupDescription,
  StyledCheckBoxGroupOptionContainer,
} from './CheckboxGroup.styled'
import { WithChildren } from '@/types/WithChildren'

export type CheckBoxGroupProps = {
  /**
   * Name of the group
   */
  name: string
  /**
   * Default value
   */
  defaultValue?: Map<string, boolean>
  /**
   * Selected value
   */
  selectedValue?: string
  /**
   * Option list
   */
  options: CheckBoxProps[]

  /**
   * Flex direction of the box
   */
  direction?: TStyledBoxProps['direction']
  /**
   * CheckBox group description
   */
  description?: string
  /**
   * Error to show for this field
   */
  error?: string | boolean
}

export const CheckBoxGroup: FunctionComponent<CheckBoxGroupProps & WithChildren> = ({
  defaultValue,
  selectedValue,
  name,
  options,
  direction = 'row',
  children,
  description,
  error,
  ...rest
}) => {
  const defaultValues = new Map<string, boolean>(
    options.map((o) => [o.id, o.isSelected] as [string, boolean]),
  )
  const initialValue = defaultValues || new Map<string, boolean>()

  const [values, setValues] = useState<Map<string, boolean>>(initialValue)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id
    const isSelected = event.target.checked
    values.set(id, isSelected)
    setValues(new Map(values))
  }

  let content = null
  if (options) {
    content = (
      <StyledCheckBoxGroupOptionContainer
        direction={direction}
        gap={direction === 'row' ? 'large' : 'medium'}
        flex={false}
      >
        {options.map((item, index) => {
          const selected = values.get(item.id)
          return (
            <CheckBox
              key={index}
              id={item.id}
              groupName={name}
              label={item.label}
              value={item.value}
              optionalElement={item.optionalElement}
              isSelected={selected}
              onChange={onChange}
            />
          )
        })}
      </StyledCheckBoxGroupOptionContainer>
    )
  } else {
    content = children
  }
  return (
    <StyledCheckBoxGroup direction="column" {...rest} flex={false}>
      {description ? (
        <Box margin="none" marginBottom="small">
          <StyledCheckBoxGroupDescription variant="object-list-item-title" color="text-dark">
            {description}
          </StyledCheckBoxGroupDescription>
        </Box>
      ) : null}
      {content}
      {error && typeof error === 'string' && (
        <Box marginTop="small">
          <FormError>{error}</FormError>
        </Box>
      )}
    </StyledCheckBoxGroup>
  )
}
