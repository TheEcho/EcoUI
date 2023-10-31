import React, { FunctionComponent, useState } from 'react'

import { ActionListItem, Box, Heading, Icon } from '../../'
import { InputSelectAutocomplete, TInputSelectAutocompleteItem } from './InputSelectAutocomplete'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Form/InputSelectAutocomplete',
  component: InputSelectAutocomplete,
  tags: ['autodocs'],
} satisfies Meta<typeof InputSelectAutocomplete>

const items: TInputSelectAutocompleteItem[] = [
  { label: 'aze', value: '1', description: 'description' },
  { label: 'rty', value: '2' },
  { label: 'uio', value: '3', role: 'action', icon: <XMarkIcon /> },
  { label: 'qsd', value: '4' },
  { label: 'fgh', value: '5' },
  { label: 'wxc', value: '6' },
  { label: 'vbn', value: '7' },
  { label: 'mlj', value: '8' },
  { label: 'pmn', value: '9' },
]

export const Default: FunctionComponent = () => {
  const [value, setValue] = useState('')

  return (
    <Box direction="column" gap="large" padding="xlarge">
      <Box direction="column" gap="large">
        <Heading variant="card-header-title">Normal</Heading>
        <InputSelectAutocomplete
          placeholder="Hello world"
          value={value}
          items={items}
          onChange={setValue}
          emptyItem
          localValue="d"
          onActionClicked={(actionValue) => console.log(actionValue)}
        />
      </Box>
      <Box direction="column" gap="large">
        <Heading variant="card-header-title">Disabled</Heading>
        <InputSelectAutocomplete
          placeholder="Hello world"
          value={value}
          items={items}
          onChange={setValue}
          emptyItem
          onActionClicked={(actionValue) => console.log(actionValue)}
          disabled
        />
      </Box>
    </Box>
  )
}

export const NoBorder: FunctionComponent = () => {
  const [value, setValue] = useState('')

  return (
    <Box direction="column" gap="large" padding="xlarge">
      <Box direction="column" gap="large">
        <Heading variant="card-header-title">Normal</Heading>
        <InputSelectAutocomplete
          placeholder="Hello world"
          value={value}
          items={items}
          onChange={setValue}
          emptyItem
          variant="no-border"
          onActionClicked={(actionValue) => console.log(actionValue)}
        />
      </Box>
      <Box direction="column" gap="large">
        <Heading variant="card-header-title">Disabled</Heading>
        <InputSelectAutocomplete
          placeholder="Hello world"
          value={value}
          items={items}
          onChange={setValue}
          emptyItem
          variant="no-border"
          onActionClicked={(actionValue) => console.log(actionValue)}
          disabled
        />
      </Box>
    </Box>
  )
}

export const WithIcon: FunctionComponent = () => {
  const [value, setValue] = useState('')

  return (
    <Box margin="large" direction="row" gap="large">
      <InputSelectAutocomplete
        placeholder="Hello world"
        value={value}
        items={items}
        onChange={setValue}
        emptyItem
        suffix={<Icon icon="icon-alert" />}
        onActionClicked={(actionValue) => console.log(actionValue)}
      />
    </Box>
  )
}

export const DarkBackground: FunctionComponent = () => {
  const [value, setValue] = useState('')

  return (
    <Box padding="large" direction="row" gap="large" background="secondary">
      <InputSelectAutocomplete
        placeholder="Hello world"
        value={value}
        items={items}
        onChange={setValue}
        emptyItem
        textColor="text-lighter"
        background="secondary"
        variant="no-border"
        suffix={<Icon icon="icon-alert" />}
        onActionClicked={(actionValue) => console.log(actionValue)}
      />
    </Box>
  )
}

export const StaticAction: FunctionComponent = () => {
  const [value, setValue] = useState('')

  return (
    <Box margin="large" direction="row" gap="large">
      <InputSelectAutocomplete
        staticAction
        placeholder="Hello world"
        value={value}
        items={items}
        onChange={setValue}
        emptyItem
        onActionClicked={(actionValue) => console.log(actionValue)}
      />
    </Box>
  )
}

export const WithCustomItem: FunctionComponent = () => {
  const [value, setValue] = useState('')

  return (
    <Box margin="large" direction="row" gap="large">
      <InputSelectAutocomplete
        placeholder="Hello world"
        value={value}
        items={items}
        onChange={setValue}
        emptyItem
        autoFocus
        onActionClicked={(actionValue) => console.log(actionValue)}
        itemBuilder={(item) => <ActionListItem title={item.label} icon={item.icon} label="label" />}
      />
    </Box>
  )
}
