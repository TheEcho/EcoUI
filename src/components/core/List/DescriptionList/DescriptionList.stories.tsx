import React, { FunctionComponent } from 'react'

import { Box, Text } from '../../../core'
import { DescriptionList } from './DescriptionList'
import { DescriptionListDescription } from './DescriptionListDescription'
import { DescriptionListTitle } from './DescriptionListTitle'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Lists/Description List',
  component: DescriptionList,
  tags: ['autodocs'],
} satisfies Meta<typeof DescriptionList>

export const SimpleDescriptionList: FunctionComponent = () => (
  <Box padding="small">
    <DescriptionList>
      <DescriptionListTitle title="Item 1" />
      <DescriptionListDescription>
        <Text>Description of the first item</Text>
      </DescriptionListDescription>
      <DescriptionListTitle title="Item 2" />
      <DescriptionListDescription>
        <Text>Info about the second item in the list</Text>
      </DescriptionListDescription>
      <DescriptionListTitle title="Item 3" />
      <DescriptionListDescription>
        <Text>This is the last item in this small list</Text>
      </DescriptionListDescription>
    </DescriptionList>
  </Box>
)
