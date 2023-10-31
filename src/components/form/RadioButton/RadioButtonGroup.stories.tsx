import React, { FunctionComponent } from 'react'

import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import { Box, Paragraph, Text } from '../../core'
import { RadioButton } from './RadioButton'
import { Meta } from '@storybook/react'

export default {
  title: 'Form/Radio',
  decorators: [withKnobs],
  component: RadioButton,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioButton>

const onChangeAction = action('onChange radioButton')

export const SimpleNotChecked: FunctionComponent = () => {
  return (
    <Box margin="small">
      <RadioButton
        id="no"
        label="Cette radio n'est pas sélectionnée"
        name="nop"
        isSelected={false}
        onChange={onChangeAction}
      />
    </Box>
  )
}

export const MultiLine: FunctionComponent = () => {
  return (
    <Box maxWidth={20} margin="small" direction="column">
      <RadioButton
        id="no"
        label="Cette radio ne peut pas être selectionnée"
        name="nop"
        isSelected={false}
        onChange={onChangeAction}
        disabled
      />
    </Box>
  )
}

export const Disabled: FunctionComponent = () => {
  return (
    <Box margin="small">
      <RadioButton
        id="no"
        label="Cette radio ne peut pas être selectionnée"
        name="nop"
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
      <RadioButton
        align="center"
        id="yes"
        label={
          <Box direction="column" flex={false}>
            <Paragraph size="regular" weight="medium">
              Prélévement SEPA
            </Paragraph>
            <Text color="text-light" size="xsmall">
              Recommandé
            </Text>
          </Box>
        }
        name="yes"
        isSelected={true}
        onChange={onChangeAction}
      />
    </Box>
  )
}

export const WithDescription: FunctionComponent = () => {
  return (
    <Box margin="small">
      <RadioButton
        id="yes"
        label="Cette radio est sélectionnée"
        name="yes"
        isSelected={true}
        description="Voici la description"
        onChange={onChangeAction}
      />
    </Box>
  )
}
