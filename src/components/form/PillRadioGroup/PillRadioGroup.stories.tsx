import React, { FunctionComponent, useState } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { AllIcones } from '@/index'

import { Box, Icon } from '../../core'
import { PillRadioGroup } from './PillRadioGroup'

export default {
  title: 'Core/Form/PillRadioGroup',
  decorators: [withKnobs],
  component: PillRadioGroup,
}

// Used to avoid eslint rule about component "missing display name"
const getIconComponent = (icon: AllIcones, selected: boolean) => (
  <Icon icon={icon} size="small" color={selected ? 'secondary' : 'text'} />
)

const choices = [
  {
    value: '1',
    label: 'cow',
  },
  {
    value: '2',
    label: 'pig',
  },
  {
    value: '3',
    label: 'mouse',
  },
]

const choicesWithPrefixIcon = [
  {
    value: '1',
    label: 'cow',
    prefixContent: (selected: boolean) => getIconComponent('far fa-cow', selected),
  },
  {
    value: '2',
    label: 'pig',
    prefixContent: (selected: boolean) => getIconComponent('far fa-pig', selected),
  },
  {
    value: '3',
    label: 'mouse',
    prefixContent: (selected: boolean) => getIconComponent('far fa-mouse', selected),
  },
]

export const Simple: FunctionComponent = () => {
  const [value, setValue] = useState<string>('1')

  return (
    <Box margin="small" width={50}>
      <PillRadioGroup choices={choices} value={value} onChange={(val) => val && setValue(val)} />
    </Box>
  )
}

export const AllowingNoChoices: FunctionComponent = () => {
  const [value, setValue] = useState<string>()

  return (
    <Box margin="small" width={50}>
      <PillRadioGroup choices={choices} value={value} onChange={setValue} allowNone />
    </Box>
  )
}

export const WithPrefixIcons: FunctionComponent = () => {
  const [value, setValue] = useState<string>()

  return (
    <Box margin="small" width={50}>
      <PillRadioGroup choices={choicesWithPrefixIcon} value={value} onChange={setValue} />
    </Box>
  )
}
