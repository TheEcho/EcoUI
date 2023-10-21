import React, { useState } from 'react'

import { Box, Text } from '../../core'
import { Switch } from './Switch'

export default {
  title: 'Core/Form/Switch',
  component: Switch,
}

export const Default = () => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <Box direction="column" gap="medium">
      <Text>Checked : {isSelected + ''}</Text>
      <Switch value={isSelected} onChange={(e) => setIsSelected(e.target.checked)} />
    </Box>
  )
}

export const Disabled = () => (
  <Box direction="column" gap="medium">
    <Text>Disabled</Text>
    <Switch disabled />
  </Box>
)
