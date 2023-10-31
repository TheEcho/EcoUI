import React, { FC } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Thumbnail } from './Thumbnail'
import { Meta } from '@storybook/react'

const EXAMPLE_IMAGE_URL =
  'https://images.unsplash.com/photo-1525268499284-86ec700c826d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'

export default {
  title: 'Core/Thumbnail',
  decorators: [withKnobs],
  component: Thumbnail,
  tags: ['autodocs'],
} satisfies Meta<typeof Thumbnail>

export const Simple: FC = () => {
  return <Thumbnail src={EXAMPLE_IMAGE_URL} />
}

export const Bigger: FC = () => {
  return <Thumbnail src={EXAMPLE_IMAGE_URL} width={64} height={64} />
}

export const SpecificImageSize: FC = () => {
  return <Thumbnail src={EXAMPLE_IMAGE_URL} imgWidth={16} imgHeight={16} />
}

export const LighterBorder: FC = () => {
  return <Thumbnail src={EXAMPLE_IMAGE_URL} lightBorder />
}

export const Rounded: FC = () => {
  return <Thumbnail src={EXAMPLE_IMAGE_URL} rounded />
}
