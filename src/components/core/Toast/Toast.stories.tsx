import React, { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box, Toast } from '../../core'

export default {
  title: 'Core/Toast',
  decorators: [withKnobs],
  component: Toast,
}

export const ToastDefault: FunctionComponent = () => (
  <Box flex={false}>
    <Toast
      type="error"
      message="I'am a toasted message"
      close={() => {
        console.log('clicked')
      }}
    />
  </Box>
)
