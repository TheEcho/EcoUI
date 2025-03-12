import { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box } from '../../core'
import Dropdown from './Dropdown'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Dropdown',
  decorators: [withKnobs],
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>

export const Simple: FunctionComponent = () => (
  <div>
    <Dropdown label="Dropdown" variant="primary" />
    <Box marginTop="small">Element below dropdown</Box>
  </div>
)

export const WithItems: FunctionComponent = () => (
  <div>
    <Dropdown
      label="Dropdown"
      items={[{ title: 'Hello', value: 'mdr' }, { title: 'Hello 2' }]}
      itemClicked={(item) => console.log(item)}
    />
    <Box marginTop="small">Element below dropdown</Box>
  </div>
)

export const WithItemsAlignedRight: FunctionComponent = () => (
  <div style={{ padding: '20rem' }}>
    <Dropdown
      label="Dropdown"
      items={[{ title: 'Hello', value: 'mdr' }, { title: 'Long long text to show alignement' }]}
      itemClicked={(item) => console.log(item)}
      dropAlign={{ right: 'right', top: 'bottom' }}
    />
    <Box marginTop="small">Element below dropdown</Box>
  </div>
)

export const LeftDropdown: FunctionComponent = () => (
  <Box flex justify="between">
    <Box marginTop="small">Other box</Box>
    <Dropdown
      label="Dropdown"
      items={[{ title: 'Hello', value: 'mdr' }, { title: 'Hello 2 long long long text' }]}
      itemClicked={(item) => console.log(item)}
    />
  </Box>
)
