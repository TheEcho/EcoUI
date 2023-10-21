import React, { FunctionComponent, useState } from 'react'

import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import { Box, Icon, Text } from '../../core'
import { Input } from '..'
import { Checkbox } from './Checkbox'

export default {
  title: 'Core/Form/Checkbox',
  decorators: [withKnobs],
  component: Checkbox,
}

const onChangeAction = action('onChange Checkbox')

export const SimpleNotChecked: FunctionComponent = () => {
  return (
    <Box margin="small">
      <Checkbox
        id="no"
        label="Cette radio n'est pas sélectionnée"
        groupName="nop"
        isSelected={false}
        onChange={onChangeAction}
      />
    </Box>
  )
}

export const Default = () => {
  return (
    <Box width={5} justify="center">
      <Checkbox
        flex={false}
        id="no"
        label=""
        groupName="nop"
        isSelected={false}
        onChange={onChangeAction}
      />
    </Box>
  )
}

export const CustomLabelWithOptionalElement = () => (
  <Box margin="small">
    <Checkbox
      id="no"
      label={
        <Box direction="row" gap="small" align="center" flex={false}>
          <Icon icon="icon-alert" size="medium" />
          <Text>Définir une alerte</Text>
        </Box>
      }
      optionalElement={
        <Box flex={false} marginLeft="large">
          <Text size="regular" color="text-light">
            Vous pouvez définir une alerte en cochant le formulaire
          </Text>
        </Box>
      }
    />
  </Box>
)

export const MultiLine: FunctionComponent = () => {
  return (
    <Box maxWidth={20} margin="small">
      <Checkbox
        id="no"
        label="Cette radio n'est pas sélectionnée"
        groupName="nop"
        isSelected={false}
        onChange={onChangeAction}
      />
    </Box>
  )
}

export const DisabledCheckbox: FunctionComponent = () => {
  return (
    <Box margin="small">
      <Checkbox
        id="disabled"
        label="Cette radio ne peut pas être coché"
        isSelected={false}
        onChange={onChangeAction}
        disabled
      />
    </Box>
  )
}

export const SimpleChecked: FunctionComponent = () => {
  return (
    <Box margin="small">
      <Checkbox
        id="yes"
        label="Cette radio est sélectionnée"
        groupName="yes"
        isSelected={true}
        onChange={onChangeAction}
      />
    </Box>
  )
}

export const CheckboxRounded: FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Box margin="small">
      <Checkbox
        rounded
        id="yes"
        label="Cette radio est sélectionnée"
        groupName="yes"
        isSelected={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
    </Box>
  )
}

export const CheckboxVariants: FunctionComponent = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Box margin="small" direction="row" gap="xlarge" align="center">
      <Checkbox
        flex={false}
        variant="primary"
        id="yes"
        label="Cette radio est sélectionnée"
        groupName="yes"
        isSelected={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <Checkbox
        flex={false}
        variant="secondary"
        rounded
        id="yes"
        label="Cette radio est sélectionnée"
        groupName="yes"
        isSelected={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
    </Box>
  )
}

export const WithOptionalElement: FunctionComponent = () => {
  return (
    <Box margin="small">
      <Checkbox
        id="yes"
        label="Cette radio est sélectionnée"
        groupName="yes"
        isSelected={true}
        optionalElement={<Input suffix="€ HT" />}
        onChange={onChangeAction}
      />
    </Box>
  )
}
