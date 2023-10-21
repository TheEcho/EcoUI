import React, { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box } from '../../core'
import { TextArea } from './TextArea'

export default {
  title: 'Core/Form/TextArea',
  decorators: [withKnobs],
  component: TextArea,
}

export const SimpleTextArea: FunctionComponent = () => (
  <Box margin="small" direction="column" gap="large">
    <TextArea name="text" />
    <TextArea name="text" variant="no-border" placeholder="Votre texte ici..." resize={false} />
  </Box>
)

export const WithPrefix: FunctionComponent = () => (
  <TextArea name="name" placeholder="Précisez votre demande…" />
)
