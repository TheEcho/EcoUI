import { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box, Toast } from '../../core'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Toast',
  decorators: [withKnobs],
  component: Toast,
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>

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
