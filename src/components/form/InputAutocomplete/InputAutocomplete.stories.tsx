import React, { FunctionComponent, useState } from 'react'

import { Box, Heading } from '../../'
import { InputAutocomplete, TInputAutoCompleteItemWithAction } from '.'
import { ClockIcon } from '@heroicons/react/24/outline'
import { Meta } from '@storybook/react'

export default {
  title: 'Form/InputAutocomplete',
  component: InputAutocomplete,
  tags: ['autodocs'],
} satisfies Meta<typeof InputAutocomplete>

const items = ['aze', 'rty', 'uio', 'fgh', 'mlj']
const itemsWithAction: TInputAutoCompleteItemWithAction[] = [
  {
    label: 'Nouveau dossier',
    value: 'create-folder',
    role: 'action',
    // icon: 'icon-add-plus',
  },
  {
    label: 'aze',
    value: 'aze',
  },
  {
    label: 'rty',
    value: 'rty',
  },
  {
    label: 'uio',
    value: 'uio',
  },
  {
    label: 'fgh',
    value: 'fgh',
  },
  {
    label: 'mlj',
    value: 'mlj',
  },
  {
    label: 'Edit timestamp',
    value: 'edit-timestamp',
    role: 'action',
    icon: <ClockIcon />,
  },
]

export const Default: FunctionComponent = () => {
  const [value, setValue] = useState('')

  return (
    <Box direction="column" gap="large" padding="xlarge">
      <Box direction="column" gap="large">
        <Heading variant="card-header-title">Normal</Heading>
        <InputAutocomplete value={value} items={items} onChange={setValue} />
      </Box>
      <Box direction="column" gap="large">
        <Heading variant="card-header-title">Disabled</Heading>
        <InputAutocomplete value={value} items={items} onChange={setValue} disabled />
      </Box>
    </Box>
  )
}

export const DarkBackground: FunctionComponent = () => {
  const [value, setValue] = useState('')

  return (
    <Box padding="large" direction="row" gap="large" background="secondary">
      <InputAutocomplete
        textColor="text-lighter"
        value={value}
        items={items}
        onChange={setValue}
        variant="no-border"
      />
    </Box>
  )
}

export const ItemWithAction: FunctionComponent = () => {
  const [value, setValue] = useState('')

  return (
    <Box direction="column" gap="large" padding="xlarge">
      <Box direction="column" gap="large">
        <Heading variant="card-header-title">Normal</Heading>
        <InputAutocomplete
          value={value}
          items={itemsWithAction}
          onChange={setValue}
          onActionClicked={(actionValue) => console.log('actionValue >>', actionValue)}
        />
      </Box>
      <Box direction="column" gap="large">
        <Heading variant="card-header-title">Disabled</Heading>
        <InputAutocomplete
          value={value}
          items={itemsWithAction}
          onChange={setValue}
          onActionClicked={(actionValue) => console.log('actionValue >>', actionValue)}
          disabled
        />
      </Box>
    </Box>
  )
}
