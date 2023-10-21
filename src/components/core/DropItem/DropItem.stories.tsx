import React, { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box, Icon } from '..'
import { DropItem } from './DropItem'

export default {
  title: 'Core/DropItem',
  decorators: [withKnobs],
  component: DropItem,
}

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
        icon={<Icon icon="ext-link" color="text-light" />}
      />
    </Box>
  )
}
