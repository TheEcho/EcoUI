import React, { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Paragraph, Text } from '..'
import Tooltip from './Tooltip'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Tooltip',
  decorators: [withKnobs],
  component: Tooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export const TooltipTop: FunctionComponent = () => (
  <Tooltip direction="row" justify="center" label="Here is a default tooltip">
    <Text>Default tooltip</Text>
  </Tooltip>
)

export const TooltipBottom: FunctionComponent = () => (
  <Tooltip direction="row" justify="center" label="Here is a bottom tooltip" place="bottom">
    <Text>Bottom tooltip</Text>
  </Tooltip>
)

export const TooltipFloat: FunctionComponent = () => (
  <Tooltip
    direction="row"
    justify="center"
    label="Here is a tooltip following cursor"
  >
    <Text>Following tooltip</Text>
  </Tooltip>
)

export const TooltipSuccess: FunctionComponent = () => (
  <Tooltip direction="row" justify="center" label="Here is a success tooltip" type="success">
    <Text>Success tooltip</Text>
  </Tooltip>
)

export const TooltipHidden: FunctionComponent = () => (
  <Tooltip direction="row" justify="center" label="Here is a hidden tooltip" hideTooltip={true}>
    <Text>Tooltip not showing</Text>
  </Tooltip>
)

export const TooltipWithCustomLabel: FunctionComponent = () => (
  <Tooltip
    direction="row"
    justify="center"
    label={
      <Paragraph color="text-light">
        <Text weight="medium" color="text-lighter">
          I am{' '}
        </Text>
        custom
      </Paragraph>
    }
  >
    <Text>Tooltip not showing</Text>
  </Tooltip>
)
