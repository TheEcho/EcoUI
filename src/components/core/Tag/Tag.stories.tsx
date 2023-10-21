import React, { FunctionComponent } from 'react'

import { action } from '@storybook/addon-actions'

import { Box, Icon } from '../../core'
import { AccountTag } from './AccountTag'
import { RemovableFilterTag } from './RemovableFilterTag'
import Tag from './Tag'

export default {
  title: 'Core/Tag',
  decorators: [
    (Story: any) => (
      <Box margin="small" direction="row" gap="medium">
        {Story()}
      </Box>
    ),
  ],
  component: Tag,
}

const removableFilterClick = action('removableFilter Click')

export const Categories: FunctionComponent = () => (
  <>
    <Tag label="Travaux votés en Assemblée Générale" color="icon-green" size="xsmall" />
    <Tag label="Ouvert" color="text-light" size="xsmall" icon="" />
  </>
)

export const OutlineTag = () => (
  <Tag
    borderSize="xsmall"
    borderColor="border-light"
    weight="medium"
    reverse
    label="22"
    textColor="primary"
    icon={<Icon icon="icon-alert" color="primary" size="small" />}
    size="xsmall"
  />
)

export const CategoriesWithIcon: FunctionComponent = () => (
  <>
    <Tag
      label="Conseil Syndical"
      color="background-dark"
      reverse
      size="xsmall"
      textColor="text"
      icon={<Icon icon="icon-lock" size="small" />}
    />
    <Tag
      label="Conseil Syndical"
      color="text-light"
      reverse
      size="xsmall"
      icon={<Icon icon="icon-lock" color="background-lighter" size="small" />}
    />
    <Tag
      label="Conseil Syndical"
      title="Conseil Syndical de Haute-Garonne"
      color="text-light"
      reverse={true}
      size="xsmall"
      icon={<Icon icon="icon-lock" color="background-lighter" size="small" />}
    />
  </>
)

export const CategoriesWithThumbnail: FunctionComponent = () => (
  <>
    <Tag
      label="image.png"
      color="background-dark"
      reverse
      size="xsmall"
      textColor="text"
      thumbnailUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png"
    />
    <Tag
      label="long-image-name-that-takes-forever.png"
      color="background-dark"
      size="regular"
      textColor="text"
      thumbnailUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png"
    />
  </>
)

export const RemovableFilter: FunctionComponent = () => (
  <RemovableFilterTag
    label="Conseil Syndical"
    size="small-very-comfy"
    icon={<Icon icon="icon-close" color="background-lighter" size="small" />}
    onClick={removableFilterClick}
  />
)

export const SpecializedAccountTag: FunctionComponent = () => <AccountTag label="615" />

export const TagWithEllipsis: FunctionComponent = () => (
  <Tag
    label="Travaux votés en Assemblée Générale"
    color="icon-green"
    ellipsis
    maxWidth={10}
    overflow="hidden"
  />
)

export const TagRounded: FunctionComponent = () => (
  <Tag
    label="Ouvert"
    borderColor="primary"
    borderSize="xsmall"
    color={['primary', 10]}
    textColor="primary"
    weight="medium"
    icon={<Icon color="primary" icon="icon-close" size="small" />}
    ellipsis
    rounded
  />
)
