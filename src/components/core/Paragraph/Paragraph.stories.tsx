import React, { FunctionComponent } from 'react'

import { select, text, withKnobs } from '@storybook/addon-knobs'

import { TTextSize } from '../../../shared/tokens/text'
import { Box } from '../../core'
import Paragraph from './Paragraph'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Paragraph',
  decorators: [withKnobs],
  component: Paragraph,
  tags: ['autodocs'],
} satisfies Meta<typeof Paragraph>

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et urna mi. Nulla quis auctor nulla. Integer congue porta commodo. Pellentesque orci lectus, rhoncus id congue et, semper a felis'

export const Simple: FunctionComponent = () => (
  <Box width={50}>
    <Paragraph>{loremIpsum}</Paragraph>
  </Box>
)

const textSizeOptions: { [key in TTextSize]: TTextSize } = {
  xsmall: 'xsmall',
  small: 'small',
  regular: 'regular',
  large: 'large',
  xlarge: 'xlarge',
  xxlarge: 'xxlarge',
}

export const Knobs: FunctionComponent = () => (
  <Box width={50}>
    <Paragraph
      weight={select('Weight', { Regular: 'regular', Medium: 'medium', Bold: 'bold' }, 'regular')}
      font={select('Font', { Default: 'default' }, 'default')}
      size={select('Size', textSizeOptions, 'regular')}
      color={select('Color', { Regular: 'text', Light: 'text-light', Dark: 'text-dark' }, 'text')}
    >
      {text('Text', loremIpsum)}
    </Paragraph>
  </Box>
)
