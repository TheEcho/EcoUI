import React, { FunctionComponent } from 'react'

import { select, withKnobs } from '@storybook/addon-knobs'

import Box from '../Box'
import { ProgressCircle } from './ProgressCircle'

export default {
  title: 'Core/ProgressCircle',
  decorators: [withKnobs],
  component: ProgressCircle,
}

export const ProgressCircleExample: FunctionComponent = () => (
  <Box direction="row">
    <ProgressCircle value={27} size="small" />
    <ProgressCircle value={67} thickness={3} color="icon-salmon" backgroundColor="border-dark" />
    <ProgressCircle value={82} thickness={4} color="icon-blue" size="large" />
  </Box>
)

export const Knobs: FunctionComponent = () => (
  <Box width={50}>
    <ProgressCircle
      value={select('Value', {}, 27)}
      thickness={select('Thickness', {}, 2)}
      size={select('Size', { small: 'small', medium: 'medium', large: 'large' }, 'medium')}
      backgroundColor={select(
        'Background color',
        { Light: 'border-light', Dark: 'border-dark' },
        'border-light',
      )}
      color={select(
        'Color',
        { Green: 'icon-green', Blue: 'icon-blue', Yellow: 'icon-yellow' },
        'icon-green',
      )}
    />
  </Box>
)
