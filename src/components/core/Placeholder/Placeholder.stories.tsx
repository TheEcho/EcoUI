import React, { FunctionComponent } from 'react'

import { Box } from '../Box/Box'
import { Placeholder } from './Placeholder'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Placeholder',
  component: Placeholder,
  tags: ['autodocs'],
} satisfies Meta<typeof Placeholder>

export const Default: FunctionComponent = () => {
  return (
    <Box width={60} margin="medium" gap="medium" direction="column">
      <Placeholder height={2} loading={true} />
      <Placeholder height={4} loading={true} />
    </Box>
  )
}
