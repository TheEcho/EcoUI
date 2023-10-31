import React, { FunctionComponent } from 'react'

import { Box, Text } from '../../../core'
import { ListItem } from '../ListItem/ListItem'
import { UnorderedList } from './UnorderedList'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Lists/Unordered List',
  component: UnorderedList,
  tags: ['autodocs'],
} satisfies Meta<typeof UnorderedList>

export const BulletList: FunctionComponent = () => (
  <Box padding="small">
    <UnorderedList>
      <ListItem>
        <Text>Un ascenseur</Text>
      </ListItem>
      <ListItem>
        <Text>Une cage d’escalier</Text>
      </ListItem>
      <ListItem>
        <Text>Chauffage au gaz</Text>
      </ListItem>
    </UnorderedList>
  </Box>
)

export const RedBulletList: FunctionComponent = () => (
  <Box padding="small">
    <UnorderedList bulletColor="primary">
      <ListItem>
        <Text>Un ascenseur</Text>
      </ListItem>
      <ListItem>
        <Text>Une cage d’escalier</Text>
      </ListItem>
      <ListItem>
        <Text>Chauffage au gaz</Text>
      </ListItem>
    </UnorderedList>
  </Box>
)
