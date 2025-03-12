import { FunctionComponent, useState } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box } from '..'
import { Likes } from './Likes'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Likes',
  decorators: [withKnobs],
  component: Likes,
  tags: ['autodocs'],
} satisfies Meta<typeof Likes>

export const Simple: FunctionComponent = () => (
  <Box flex={false}>
    <Likes likesCount={8} />
  </Box>
)

export const HasLiked: FunctionComponent = () => (
  <Box flex={false}>
    <Likes hasLiked likesCount={2} />
  </Box>
)

export const Hidden: FunctionComponent = () => (
  <Box flex={false}>
    <Likes likesCount={5} isHidden />
  </Box>
)

export const Disabled: FunctionComponent = () => (
  <Box flex={false}>
    <Likes likesCount={5} disabled />
  </Box>
)

export const WorkingExample: FunctionComponent = () => {
  const [likesCount, setLikesCount] = useState(15)
  const [hasLiked, setHasLiked] = useState(false)

  const handleLike = () => {
    setLikesCount(likesCount + 1)
    setHasLiked(true)
  }

  const handleUnlike = () => {
    setLikesCount(likesCount - 1)
    setHasLiked(false)
  }

  return (
    <Box flex={false}>
      <Likes
        likesCount={likesCount}
        hasLiked={hasLiked}
        onLike={handleLike}
        onUnlike={handleUnlike}
      />
    </Box>
  )
}
