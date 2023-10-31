import React, { FunctionComponent } from 'react'

import { Box, Text } from '../../../core'
import { ListItem } from '../ListItem/ListItem'
import { OrderedList } from './OrderedList'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Lists/Ordered List',
  component: OrderedList,
  tags: ['autodocs'],
} satisfies Meta<typeof OrderedList>

export const SimpleOrderedList: FunctionComponent = () => (
  <Box padding="small">
    <OrderedList>
      <ListItem>
        <Text>Demandez votre badge</Text>
      </ListItem>
      <ListItem>
        <Text>Recevez votre badge en recommandé</Text>
      </ListItem>
      <ListItem>
        <Text>Testez le bon fonctionnement de votre badge</Text>
      </ListItem>
    </OrderedList>
  </Box>
)
