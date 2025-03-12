import { FunctionComponent } from 'react'
import { LockClosedIcon, BellAlertIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { action } from '@storybook/addon-actions'

import { Box, Icon } from '../../core'
import { RemovableFilterTag } from './RemovableFilterTag'
import Tag from './Tag'
import { Meta } from '@storybook/react'

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
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>

const removableFilterClick = action('removableFilter Click')

export const Categories: FunctionComponent = () => (
  <>
    <Tag label="En cours" color="icon-green" size="xsmall" />
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
    icon={<Icon icon={<BellAlertIcon />} color="primary" size="small" />}
    size="xsmall"
  />
)

export const CategoriesWithIcon: FunctionComponent = () => (
  <>
    <Tag
      label="France"
      color="background-dark"
      reverse
      size="xsmall"
      textColor="text"
      icon={<Icon icon={<LockClosedIcon />} size="small" />}
    />
    <Tag
      label="France"
      color="text-light"
      reverse
      size="xsmall"
      icon={<Icon icon={<LockClosedIcon />} color="background-lighter" size="small" />}
    />
    <Tag
      label="France"
      title="Haute-Garonne"
      color="text-light"
      reverse={true}
      size="xsmall"
      icon={<Icon icon={<LockClosedIcon />} color="background-lighter" size="small" />}
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
    label="France"
    size="small-very-comfy"
    icon={<Icon icon={<XMarkIcon />} color="background-lighter" size="small" />}
    onClick={removableFilterClick}
  />
)

export const TagWithEllipsis: FunctionComponent = () => (
  <Tag
    label="En cours"
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
    icon={<Icon color="primary" icon={<XMarkIcon />} size="small" />}
    ellipsis
    rounded
  />
)
