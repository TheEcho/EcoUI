import React, { FunctionComponent } from 'react'

import { select, withKnobs } from '@storybook/addon-knobs'

import { svgSizes, TSVGSizeEnum } from '../../../shared/tokens/svg'
import { Box, Icon, Text } from '../../core'
import { SvgLibraryComponents, TSvgIcon } from './library'

export default {
  title: 'Core/Icon',
  decorators: [withKnobs],
  component: Icon,
}

export const OneIcon: FunctionComponent = () => (
  <Box margin="small">
    <Icon icon="icon-add-plus" color="primary" />
  </Box>
)

const allIcons = Object.keys(SvgLibraryComponents).reduce((acc, key) => {
  acc[key] = key as TSvgIcon
  return acc
}, {} as { [key: string]: TSvgIcon })

const allSizes = Object.keys(svgSizes).map((size) => size) as TSVGSizeEnum[]

export const AllIcons: FunctionComponent = () => (
  <Box margin="small" direction="column" gap="medium" paddingBottom="small">
    {Object.keys(allIcons).map((icon, index) => (
      <Box key={index} align="center" gap="medium" direction="row">
        <Icon icon={icon as TSvgIcon} />
        <Text>{icon}</Text>
      </Box>
    ))}
  </Box>
)

export const allSize: FunctionComponent = () => (
  <Box padding="medium" direction="row" gap="medium" align="center">
    {allSizes.map((size, index) => (
      <Icon icon="icon-alert" size={size} key={index} />
    ))}
  </Box>
)

export const FontAwesomeIcones: FunctionComponent = () => (
  <Box padding="medium" direction="row" gap="medium" align="center">
    <Icon icon="fa-info" size="medium" />
    <Icon icon="far fa-info-circle" size="medium" color="secondary" />
  </Box>
)

export const Knobs: FunctionComponent = () => (
  <Icon
    icon={select('Icon', allIcons, 'icon-add-plus')}
    color={select('Color', { Primary: 'primary', Secondary: 'secondary' }, 'primary')}
    size={select('Size', { small: 'small', medium: 'medium', large: 'large' }, 'large')}
  />
)
