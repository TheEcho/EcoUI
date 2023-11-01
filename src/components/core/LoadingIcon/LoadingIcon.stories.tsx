import React, { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box } from '..'
import { LoadingIcon } from './LoadingIcon'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/LoadingIcon',
  decorators: [withKnobs],
  component: LoadingIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingIcon>

const handleClick = () => {
  console.log('clicked')
}

export const Normal: FunctionComponent = () => {
  return (
    <Box flex={false}>
      <LoadingIcon size='medium' />
    </Box>
  )
}
