import { FunctionComponent, useState } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box, Icon, IconProps } from '../../core'
import { PillRadioGroup } from './PillRadioGroup'
import { BuildingLibraryIcon, BuildingOfficeIcon, HomeIcon } from '@heroicons/react/24/outline'
import { Meta } from '@storybook/react'

export default {
  title: 'Form/PillRadioGroup',
  decorators: [withKnobs],
  component: PillRadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof PillRadioGroup>

// Used to avoid eslint rule about component "missing display name"
const getIconComponent = (icon: IconProps['icon'], selected: boolean) => (
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
    label: 'Library',
    prefixContent: (selected: boolean) => getIconComponent(<BuildingLibraryIcon />, selected),
  },
  {
    value: '2',
    label: 'Office',
    prefixContent: (selected: boolean) => getIconComponent(<BuildingOfficeIcon />, selected),
  },
  {
    value: '3',
    label: 'House',
    prefixContent: (selected: boolean) => getIconComponent(<HomeIcon />, selected),
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
