import React, { FunctionComponent } from 'react'

import styled from '@emotion/styled'
import { withKnobs } from '@storybook/addon-knobs'

import Box from '../Box'
import Icon from '../Icon'
import IconHighlight from '../IconHighlight'
import Overlap from './Overlap'

export default {
  title: 'Core/Overlap',
  decorators: [withKnobs],
  component: Overlap,
}

const Circle = styled.div<{ color: string }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${(props) => props.color};
`

export const HorizontalOverlap: FunctionComponent = () => (
  <Overlap>
    <IconHighlight
      rounded="full"
      width={5}
      height={5}
      background="icon-blue"
      icon={<Icon icon="caticon-eau" color="background-lighter" size="medium" />}
    />
    <IconHighlight
      rounded="full"
      width={5}
      height={5}
      background="icon-yellow"
      icon={<Icon icon="caticon-eau" color="background-lighter" size="medium" />}
    />
    <IconHighlight
      rounded="full"
      width={5}
      height={5}
      background="icon-salmon"
      icon={<Icon icon="caticon-eau" color="background-lighter" size="medium" />}
    />
    <IconHighlight
      rounded="full"
      width={5}
      height={5}
      background="icon-green"
      icon={<Icon icon="caticon-eau" color="background-lighter" size="medium" />}
    />
    <Circle color="blue" />
    <Circle color="yellow" />
    <Circle color="green" />
  </Overlap>
)

export const VerticalOverlap: FunctionComponent = () => (
  <Box direction="column" width={10}>
    <Overlap direction="vertical" overlapMargin={2}>
      <IconHighlight
        rounded="full"
        width={5}
        height={5}
        background="icon-blue"
        icon={<Icon icon="caticon-eau" color="background-lighter" size="medium" />}
      />
      <IconHighlight
        rounded="full"
        width={5}
        height={5}
        background="icon-yellow"
        icon={<Icon icon="caticon-eau" color="background-lighter" size="medium" />}
      />
      <IconHighlight
        rounded="full"
        width={5}
        height={5}
        background="icon-salmon"
        icon={<Icon icon="caticon-eau" color="background-lighter" size="medium" />}
      />
      <IconHighlight
        rounded="full"
        width={5}
        height={5}
        background="icon-green"
        icon={<Icon icon="caticon-eau" color="background-lighter" size="medium" />}
      />
      <Circle color="blue" />
      <Circle color="yellow" />
      <Circle color="green" />
    </Overlap>
  </Box>
)
