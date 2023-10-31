import React, { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box } from '../Box'
import { Card } from '../Card'
import { Separator } from './Separator'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Separator',
  decorators: [withKnobs],
  component: Separator,
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>

export const All: FunctionComponent = () => (
  <Box direction="column">
    <Separator text="Peut-être..." variant="empty" />
    <Separator text="Peut-être..." variant="regular" />
    <Separator variant="line" />
  </Box>
)

export const UsedWithCard: FunctionComponent = () => (
  <Box direction="column" margin="large">
    <Card header="Title 1">Hello world</Card>
    <Separator text="Peut-être..." />
    <Card header="Title 2">Hello world</Card>
  </Box>
)
