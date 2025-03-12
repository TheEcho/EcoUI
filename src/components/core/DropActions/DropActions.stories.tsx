import { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'

import { Box, Button, Text } from '..'
import { DropActions, TDropAction } from './DropActions'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/DropActions',
  decorators: [withKnobs],
  component: DropActions,
  tags: ['autodocs'],
} satisfies Meta<typeof DropActions>

const ACTIONS: TDropAction[] = [
  { title: 'Modifier', onClick: () => console.log('modifier') },
  { title: 'Supprimer', type: 'delete', onClick: () => console.log('supprimer') },
]

const ACTIONS_WITH_ICONS: TDropAction[] = [
  { title: 'Modifier', onClick: () => console.log('modifier'), icon: <PencilIcon /> },
  {
    title: 'Supprimer',
    type: 'delete',
    onClick: () => console.log('supprimer'),
    icon: <TrashIcon />,
  },
]

const ACTIONS_WITH_SEPARATOR: TDropAction[] = [
  { title: 'Actions', type: 'separator' },
  { title: 'Modifier', onClick: () => console.log('modifier'), icon: <PencilIcon /> },
  {
    title: 'Supprimer',
    onClick: () => console.log('supprimer'),
    type: 'delete',
    icon: <TrashIcon />,
  },
]

export const Simple: FunctionComponent = () => {
  return (
    <Box flex={false}>
      <DropActions actions={ACTIONS} />
    </Box>
  )
}

export const WithCustomButton: FunctionComponent = () => {
  return (
    <Box flex={false}>
      <DropActions actions={ACTIONS} buttonContent={<Button label="Button" />} />
    </Box>
  )
}

export const WithCustomDropComponent: FunctionComponent = () => {
  return (
    <Box flex={false}>
      <DropActions
        actions={ACTIONS}
        dropComponent={
          <Box padding="medium">
            <Text>Je suis un custom drop component</Text>
          </Box>
        }
      />
    </Box>
  )
}

export const WithIcons: FunctionComponent = () => {
  return (
    <Box flex={false}>
      <DropActions actions={ACTIONS_WITH_ICONS} />
    </Box>
  )
}

export const WithTypeSeparator: FunctionComponent = () => {
  return (
    <Box flex={false}>
      <DropActions actions={ACTIONS_WITH_SEPARATOR} />
    </Box>
  )
}
