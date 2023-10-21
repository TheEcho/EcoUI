import React, { FunctionComponent } from 'react'

import { select, text, withKnobs } from '@storybook/addon-knobs'

import { TTextSize } from '../../../shared/tokens/text'
import { Box } from '../../core/Box'
import { Text } from './Text'

export default {
  title: 'Core/Text',
  decorators: [withKnobs],
  component: Text,
}

const textSizeOptions: { [key in TTextSize]: TTextSize } = {
  xsmall: 'xsmall',
  small: 'small',
  regular: 'regular',
  large: 'large',
  xlarge: 'xlarge',
  xxlarge: 'xxlarge',
}

export const AllSizes: FunctionComponent = () => (
  <Box direction="column" gap="medium">
    {Object.values(textSizeOptions).map((size, i) => (
      <Text key={`size-${i}`} size={size}>
        This text is in size {size}
      </Text>
    ))}
  </Box>
)

export const Knobs: FunctionComponent = () => (
  <Text
    weight={select('Weight', { Regular: 'regular', Medium: 'medium', Bolder: 'bold' }, 'regular')}
    font={select('Font', { Default: 'default' }, 'default')}
    size={select('Size', textSizeOptions, 'regular')}
    color={select('Color', { Regular: 'text', Light: 'text-light', Dark: 'text-dark' }, 'text')}
    decoration={select('Decoration', { None: 'none', LineThrough: 'line-through' }, 'none')}
  >
    {text('Text', 'Hello world')}
  </Text>
)

export const TextWithEllipsis: FunctionComponent = () => (
  <Box direction="column" gap="medium" width={10}>
    <Text ellipsis>
      This text is a long text that needs to be ellipsised This text is a long text that needs to be
      ellipsised
    </Text>
  </Box>
)

export const TextWithMultilineEllipsis: FunctionComponent = () => (
  <Box direction="column" gap="medium" width={10}>
    <Text ellipsis={2}>
      This text is a long text that needs to be ellipsised This text is a long text that needs to be
      ellipsised
    </Text>
  </Box>
)
