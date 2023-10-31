import React, { FunctionComponent } from 'react'

import { BellIcon } from '@heroicons/react/24/outline'
import { withKnobs } from '@storybook/addon-knobs'

import { Box, Icon } from '..'
import { BadgeIcon } from './BadgeIcon'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/BadgeIcon',
  decorators: [withKnobs],
  component: BadgeIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof BadgeIcon>

export const RedBadgeExample: FunctionComponent = () => (
  <Box margin="small" direction="row" gap="large">
    <BadgeIcon count={0} color="text-lighter" background="primary" icon={<Icon icon={<BellIcon />} />} />
    <BadgeIcon count={1} color="text-lighter" background="primary" icon={<Icon icon={<BellIcon />} />} />
    <BadgeIcon count={2} color="text-lighter" background="primary" icon={<Icon icon={<BellIcon />} />} />
    <BadgeIcon
      count={99}
      color="text-lighter"
      background="primary"
      icon={<Icon icon={<BellIcon />} />}
    />
    <BadgeIcon
      count={100}
      color="text-lighter"
      background="primary"
      icon={<Icon icon={<BellIcon />} />}
    />
  </Box>
)

export const GreyBadgeExample: FunctionComponent = () => (
  <Box margin="small" direction="row" gap="large">
    <BadgeIcon
      count={0}
      background="background-darker"
      color="text"
      icon={<Icon icon={<BellIcon />} />}
    />
    <BadgeIcon
      count={1}
      background="background-darker"
      color="text"
      icon={<Icon icon={<BellIcon />} />}
    />
    <BadgeIcon
      count={2}
      background="background-darker"
      color="text"
      icon={<Icon icon={<BellIcon />} />}
    />
    <BadgeIcon
      count={99}
      background="background-darker"
      color="text"
      icon={<Icon icon={<BellIcon />} />}
    />
    <BadgeIcon
      count={100}
      background="background-darker"
      color="text"
      icon={<Icon icon={<BellIcon />} />}
    />
  </Box>
)

export const TransparentIconExample: FunctionComponent = () => (
  <Box margin="small" direction="row" gap="large">
    <BadgeIcon count={0} icon={<Icon icon={<BellIcon />} />} />
    <BadgeIcon count={1} icon={<Icon icon={<BellIcon />} />} />
    <BadgeIcon count={2} icon={<Icon icon={<BellIcon />} />} />
    <BadgeIcon count={99} icon={<Icon icon={<BellIcon />} />} />
    <BadgeIcon count={100} icon={<Icon icon={<BellIcon />} />} />
  </Box>
)
