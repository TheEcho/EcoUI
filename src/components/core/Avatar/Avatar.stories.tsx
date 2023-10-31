import React, { FC } from 'react'

import { Avatar } from './Avatar'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export const Normal: FC = () => {
  return <Avatar firstName="Jorrys" height={24} width={24} />
}

export const WithSrc: FC = () => {
  return (
    <Avatar
      src="https://static.wikia.nocookie.net/aesthetics/images/8/80/Gopnik.jpg/revision/latest?cb=20200508044753"
      height={24}
      width={24}
    />
  )
}
