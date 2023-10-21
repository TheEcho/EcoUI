import React, { FunctionComponent, useState } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box } from '../../core/Box'
import { Heading } from '../../core/Heading'
import { Icon } from '../../core/Icon'
import { Input } from './Input'

export default {
  title: 'Core/Form/Input',
  decorators: [withKnobs],
  component: Input,
}

export const Default: FunctionComponent = () => (
  <Box direction="column" gap="large" padding="xlarge">
    <Box direction="column" gap="medium" maxWidth={12}>
      <Heading variant="card-header-title">Normal</Heading>
      <Input placeholder="Ex. plante, sculpture..." />
    </Box>
    <Box direction="column" gap="medium" maxWidth={12}>
      <Heading variant="card-header-title">Number</Heading>
      <Input type="number" suffix="€" />
    </Box>
    <Box direction="column" gap="medium">
      <Heading variant="card-header-title">Search Input</Heading>
      <Input placeholder="Ex. plante, sculpture..." type="search" />
    </Box>
    <Box direction="column" gap="medium">
      <Heading variant="card-header-title">With Prefix</Heading>
      <Input
        placeholder="Ex. plante, sculpture..."
        prefix={<Icon icon="icon-search" color="text-light" />}
      />
    </Box>
    <Box direction="column" gap="medium">
      <Heading variant="card-header-title">Rounded</Heading>
      <Input
        rounded
        placeholder="Ex. plante, sculpture..."
        prefix={<Icon icon="icon-search" color="text-light" />}
      />
    </Box>
    <Box direction="column" gap="medium">
      <Heading variant="card-header-title">Disabled</Heading>
      <Input
        placeholder="Ex. plante, sculpture..."
        disabled
        prefix={<Icon icon="icon-search" color="text-light" />}
      />
    </Box>
  </Box>
)

export const NoBorder: FunctionComponent = () => {
  return (
    <Box direction="column">
      <Box padding="medium" background="background" direction="column" gap="medium">
        <Heading variant="card-header-title">Normal</Heading>
        <Input
          placeholder="Ex. plante, sculpture..."
          prefix={<Icon icon="icon-search" color="text-light" />}
          variant="no-border"
        />
      </Box>
      <Box padding="medium" background="secondary" direction="column" gap="medium">
        <Heading variant="card-header-title" color="text-lighter">
          Dark background
        </Heading>
        <Input
          placeholder="Ex. plante, sculpture..."
          variant="no-border"
          textColor="text-lighter"
          prefix={<Icon icon="icon-search" color="text-lighter" />}
        />
      </Box>
      <Box padding="medium" direction="column" gap="medium">
        <Heading variant="card-header-title">Bigger text size</Heading>
        <Input
          placeholder="Ex. plante, sculpture..."
          variant="no-border"
          textSize="xlarge"
          textColor="text-dark"
          textWeight="bold"
        />
      </Box>
      <Box padding="medium" background="background" direction="column" gap="medium">
        <Heading variant="card-header-title">Disabled</Heading>
        <Input
          placeholder="Ex. plante, sculpture..."
          disabled
          prefix={<Icon icon="icon-search" color="text-light" />}
          variant="no-border"
        />
      </Box>
      <Box padding="medium" background="secondary" direction="column" gap="medium">
        <Heading variant="card-header-title" color="text-lighter">
          Dark background disabled
        </Heading>
        <Input
          placeholder="Ex. plante, sculpture..."
          variant="no-border"
          textColor="text-lighter"
          disabled
          prefix={<Icon icon="icon-search" color="text-lighter" />}
        />
      </Box>
    </Box>
  )
}

export const SearchVariant: FunctionComponent = () => (
  <Box padding="xlarge">
    <Box direction="column" gap="medium">
      <Heading variant="card-header-title">Normal</Heading>
      <Input
        variant="search"
        placeholder="Ex. plante, sculpture..."
        prefix={<Icon icon="icon-search" color="text-light" />}
      />
    </Box>
  </Box>
)

export const UnderlineVariant: FunctionComponent = () => (
  <>
    <Box padding="medium" direction="column" gap="medium">
      <Heading variant="card-header-title">Normal</Heading>
      <Input variant="underline" placeholder="Représenté par" textColor="text" />
    </Box>
    <Box padding="medium" direction="column" gap="medium">
      <Heading variant="card-header-title">Text color secondary</Heading>
      <Input variant="underline" placeholder="Représenté par" textColor="secondary" />
    </Box>
    <Box background="secondary" padding="medium" direction="column" gap="medium">
      <Heading variant="card-header-title" color="text-lighter">
        Dark background
      </Heading>
      <Input variant="underline" placeholder="Représenté par" textColor="text-lighter" />
    </Box>
    <Box padding="medium" direction="column" gap="medium">
      <Heading variant="card-header-title">Disabled</Heading>
      <Input variant="underline" placeholder="Représenté par" textColor="secondary" disabled />
    </Box>
    <Box padding="medium" direction="column" gap="medium">
      <Heading variant="card-header-title">With icon centred</Heading>
      <Box direction="row" gap="xsmall" align="center">
        <Icon icon="docicon-zip" />
        <Input variant="underline" placeholder="Représenté par" textColor="secondary" />
      </Box>
    </Box>
  </>
)

export const InputWithResetBtn: FunctionComponent = () => {
  const [value, setValue] = useState('')

  return (
    <Box margin="large">
      <Input
        maxWidth={30}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        resetBtnClicked={() => setValue('')}
      />
    </Box>
  )
}
