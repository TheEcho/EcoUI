import React, { FunctionComponent, useState } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import Text from '../Text'
import Box from './Box'

export default {
  title: 'Core/Box',
  decorators: [withKnobs],
  component: Box,
}

const longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export const Horizontal: FunctionComponent = () => (
  <Box direction="column" gap="large">
    <Box marginHorizontal="medium" marginVertical="large" position="relative">
      <Box background="background">Box</Box>
    </Box>
    <Box direction="row" gap="xsmall">
      <Box background="background">Box</Box>
      <Box background="background">Box</Box>
      <Box background="background">Box</Box>
    </Box>
    <Box direction="row" gap="medium">
      <Box background="background">Box</Box>
      <Box background="background">Box</Box>
      <Box background="background">Box</Box>
    </Box>
  </Box>
)

export const BoxOverflowAuto: FunctionComponent = () => (
  <Box
    direction="column"
    gap="large"
    height={10}
    width={40}
    background="background"
    overflow="auto"
  >
    <Text>{longText}</Text>
  </Box>
)

export const BoxOverflowHidden: FunctionComponent = () => (
  <Box
    direction="column"
    gap="large"
    height={10}
    width={40}
    background="background"
    overflow="hidden"
  >
    <Text>{longText}</Text>
  </Box>
)

export const AnimatedBox: FunctionComponent = () => {
  const [isHover, setIsHover] = useState(false)

  return (
    <Box
      margin="large"
      padding="large"
      transition={{ duration: 2, animation: 'ease' }}
      background={isHover ? 'background-light' : 'background-lighter'}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Text>{longText}</Text>
    </Box>
  )
}

export const Knobs: FunctionComponent = () => <Box />
