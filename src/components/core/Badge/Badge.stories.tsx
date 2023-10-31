import React, { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box } from '../../core'
import { Badge } from './Badge'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Badge',
  decorators: [withKnobs],
  component: Badge,
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export const RedBadgeExample: FunctionComponent = () => (
  <Box margin="small" direction="row" gap="medium">
    <Badge label="1" />
    <Badge label="2" color="text-lighter" background="primary" />
  </Box>
)

export const GreyBadgeExample: FunctionComponent = () => (
  <Box margin="small" direction="row" gap="medium">
    <Badge label="1" background="background-darker" color="text" />
    <Badge label="2" background="background-darker" color="text" />
  </Box>
)
