import React, { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box } from '../../core/Box'
import { Heading } from '../../core/Heading'
import { PasswordInput } from '.'

export default {
  title: 'Core/Form/Input',
  decorators: [withKnobs],
  component: PasswordInput,
}

export const PasswordVariant: FunctionComponent = () => (
  <Box direction="column" padding="xlarge" gap="large">
    <Box direction="column" gap="medium">
      <Heading variant="card-header-title">Normal</Heading>
      <PasswordInput />
    </Box>
    <Box direction="column" gap="medium">
      <Heading variant="card-header-title">Without display button</Heading>
      <PasswordInput withDisplayButton={false} />
    </Box>
  </Box>
)
