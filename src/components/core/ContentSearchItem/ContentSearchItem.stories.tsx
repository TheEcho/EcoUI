import React, { FC } from 'react'

import styled from '@emotion/styled'
import { HomeModernIcon } from '@heroicons/react/24/outline'

import { Box } from '../Box'
import { CircleIcon } from '../CircleIcon'
import { Text } from '../Text'
import { ContentSearchItem } from './ContentSearchItem'
import { Meta } from '@storybook/react'
import Icon from '../Icon'

export default {
  title: 'Core/ContentSearchItem',
  component: ContentSearchItem,
  tags: ['autodocs'],
} satisfies Meta<typeof ContentSearchItem>

const Div = styled.div({
  outline: '1px solid black',
})

export const BareItem: FC = () => {
  return (
    <Div>
      <ContentSearchItem title="Alice McCoy" />
    </Div>
  )
}

export const BareItemWithDescription: FC = () => {
  return (
    <Div>
      <ContentSearchItem
        title="Alice McCoy"
        description="+ 33 06 43 44 78 98 · contact@gmail.com"
      />
    </Div>
  )
}

export const ItemWithSubtitleAndDescription: FC = () => {
  return (
    <Div>
      <ContentSearchItem
        title="Alice McCoy"
        subtitle="T4 avec toit terrasse · 1, place de la comédie 70123 Paris"
        description="#123345"
      />
    </Div>
  )
}

export const ItemWithSubtitleAndDescriptionAndIcon: FC = () => {
  return (
    <Div>
      <ContentSearchItem
        icon={
          <CircleIcon
            icon={<Icon icon={<HomeModernIcon />} />}
            size="large"
            color="icon-blue"
            iconColor="background"
          />
        }
        title="Alice McCoy"
        subtitle="T4 avec toit terrasse · 1, place de la comédie 70123 Paris"
        description="#123345"
      />
    </Div>
  )
}

export const ItemWithSubtitleAndDescriptionAndIconAndBadge: FC = () => {
  return (
    <Div>
      <ContentSearchItem
        icon={
          <CircleIcon
            icon={<Icon icon={<HomeModernIcon />} />}
            size="large"
            color="icon-blue"
            iconColor="background"
          />
        }
        title="Alice McCoy"
        subtitle="T4 avec toit terrasse · 1, place de la comédie 70123 Paris"
        description="#123345"
        rightContent={
          <Box
            borderRadius="large"
            borderColor="border"
            borderSize="small"
            paddingHorizontal="small"
            paddingVertical="xsmall"
          >
            <Text weight="bold">En cours</Text>
          </Box>
        }
      />
    </Div>
  )
}
