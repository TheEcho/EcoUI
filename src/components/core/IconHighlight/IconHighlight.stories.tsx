import React, { FunctionComponent } from 'react'

import { select, withKnobs } from '@storybook/addon-knobs'

import { Box, Icon } from '../../core'
import { IconHighlight } from './IconHighlight'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/IconHighlight',
  decorators: [withKnobs],
  component: IconHighlight,
  tags: ['autodocs'],
} satisfies Meta<typeof IconHighlight>

type RoundEnum = 'none' | 'normal' | 'full'
type ColorEnum = 'icon-blue' | 'icon-green' | 'icon-yellow'

export const OneIcon: FunctionComponent = () => (
  <Box margin="small">
    <IconHighlight icon={<Icon icon="icon-add-plus" />} />
  </Box>
)

export const AllSizes: FunctionComponent = () => (
  <Box padding="medium" direction="column" gap="medium">
    <Box padding="medium" direction="row" gap="medium">
      <IconHighlight size="xsmall" icon={<Icon size="medium" icon="icon-alert" />} />
      <IconHighlight size="small" icon={<Icon size="large" icon="icon-alert" />} />
      <IconHighlight size="medium" icon={<Icon size="xlarge" icon="icon-alert" />} />
      <IconHighlight size="sm-large" icon={<Icon size="xxlarge" icon="icon-alert" />} />
      <IconHighlight size="large" icon={<Icon size="huge" icon="icon-alert" />} />
    </Box>
    <Box padding="medium" direction="row" gap="medium">
      <span>Custom Size: </span>
      <IconHighlight width={4} height={6} icon={<Icon size="huge" icon="icon-alert" />} />
    </Box>
  </Box>
)

export const AllRounded: FunctionComponent = () => (
  <Box padding="medium" direction="row" gap="medium">
    {['none', 'normal', 'full'].map((rounded, index) => (
      <IconHighlight key={index} rounded={rounded as RoundEnum} icon={<Icon icon="icon-alert" />} />
    ))}
  </Box>
)

export const BackgroundColor: FunctionComponent = () => (
  <Box padding="medium" direction="row" gap="medium">
    {['icon-blue', 'icon-green', 'icon-yellow'].map((color, index) => (
      <IconHighlight
        key={index}
        background={color as ColorEnum}
        icon={<Icon icon="icon-alert" />}
      />
    ))}
  </Box>
)

export const Knobs: FunctionComponent = () => (
  <IconHighlight
    icon={<Icon icon={select('Icon', { icon: 'icon-add-plus' }, 'sidebar-icon-home')} />}
    size={select(
      'Size',
      { xSmall: 'xsmall', small: 'small', medium: 'medium', large: 'large', smLarge: 'sm-large' },
      'large',
    )}
    rounded={select('Rounded', { none: 'none', normal: 'normal', full: 'full' }, 'normal')}
  />
)
