import React, { useState } from 'react'

import { Box, Text } from '../../core'
import { Switch } from './Switch'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Form/Switch',
  component: Switch,
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>

export const Default = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Box direction="column" gap="medium">
      <Text>Checked : {isChecked + ''}</Text>
      <Switch value={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
    </Box>
  )
}

export const Disabled = () => (
  <Box direction="column" gap="medium">
    <Text>Disabled</Text>
    <Switch disabled />
  </Box>
)
