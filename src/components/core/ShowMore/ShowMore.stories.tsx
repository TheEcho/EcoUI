import React, { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Text } from '../Text'
import { ShowMore } from './ShowMore'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/ShowMore',
  decorators: [withKnobs],
  component: ShowMore,
  tags: ['autodocs'],
} satisfies Meta<typeof ShowMore>

export const All: FunctionComponent = () => {
  const items = [
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet',
  ]

  return (
    <ShowMore
      itemBeforeHide={2}
      direction="column"
      onShowMoreHover={(isHover) => console.log('showMore hover', isHover)}
    >
      {items.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </ShowMore>
  )
}
