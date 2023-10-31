import React, { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'
import * as heroiconsOutline from '@heroicons/react/24/outline'

import { svgSizes, TSVGSizeEnum } from '../../../shared/tokens/svg'
import { Box, Grid, Icon, Text } from '../../core'
import { Meta } from '@storybook/react'

type HeroIcon = (props?: React.ComponentProps<'svg'>) => JSX.Element;

export default {
  title: 'Core/Icon',
  decorators: [withKnobs],
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>

export const OneIcon: FunctionComponent = () => (
  <Box margin="small">
    <Icon icon={<heroiconsOutline.PlusIcon />} color="primary" />
  </Box>
)

const allIcons = Object.keys(heroiconsOutline).reduce((acc, key) => {
  acc[key] = heroiconsOutline[key].render({})
  return acc
}, {} as { [key: string]: HeroIcon })

const allSizes = Object.keys(svgSizes).map((size) => size) as TSVGSizeEnum[]

export const AllIcons: FunctionComponent = () => (
  <Box margin="small" direction="column" gap="medium" paddingBottom="small">
    <Grid itemPerRow={4} gap='medium'>
      {Object.keys(allIcons).map((icon, index) => (
        <Box key={index} align="center" gap="medium" direction="column">
          <Icon icon={allIcons[icon]} />
          <Text color="text-light">{icon}</Text>
        </Box>
      ))}
    </Grid>
  </Box>
)

export const allSize: FunctionComponent = () => (
  <Box padding="medium" direction="row" gap="medium" align="center">
    {allSizes.map((size, index) => (
      <Icon icon={<heroiconsOutline.ExclamationCircleIcon></heroiconsOutline.ExclamationCircleIcon>} size={size} key={index} />
    ))}
  </Box>
)
