import { FunctionComponent } from 'react'
import { LinkIcon } from '@heroicons/react/24/outline'

import { withKnobs } from '@storybook/addon-knobs'

import { Box, Icon } from '..'
import { DropItem } from './DropItem'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/DropItem',
  decorators: [withKnobs],
  component: DropItem,
  tags: ['autodocs'],
} satisfies Meta<typeof DropItem>

const handleClick = () => {
  console.log('clicked')
}

export const Normal: FunctionComponent = () => {
  return (
    <Box flex={false}>
      <DropItem title="Bonjour" onClick={handleClick} />
    </Box>
  )
}

export const WithIcon: FunctionComponent = () => {
  return (
    <Box flex={false}>
      <DropItem
        title="Bonjour"
        onClick={handleClick}
        icon={<Icon icon={<LinkIcon />} color="text-light" />}
      />
    </Box>
  )
}
