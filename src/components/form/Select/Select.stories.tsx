import React, { FunctionComponent, useState } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box } from '../../core'
import { Select } from './Select'
import { SelectOption } from './SelectOption'
import { Meta } from '@storybook/react'
export default {
  title: 'Core/Form/Select',
  decorators: [withKnobs],
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

const OPTIONS = [
  'Un ascenseur en panne',
  'Une fuite sur votre palier',
  'Un ascenseur en panne, une fuite sur votre palier et un voisin fan de psy trance ?',
]

export const SimpleSelect: FunctionComponent = () => {
  const [selectedOption, setselectedOption] = useState('1')

  return (
    <Box margin="small" maxWidth={30}>
      <Select
        name="panne"
        value={selectedOption}
        onChange={(e) => setselectedOption(e.target.value)}
      >
        <SelectOption>Vous preferez avoir:</SelectOption>
        {OPTIONS.map((option, index) => (
          <SelectOption value={index + ''} key={index}>
            {option}
          </SelectOption>
        ))}
      </Select>
    </Box>
  )
}
