import { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box } from '../../core/Box'
import { Heading } from '../../core/Heading'
import { PasswordInput } from '.'
import { Meta } from '@storybook/react'

export default {
  title: 'Form/Input',
  decorators: [withKnobs],
  component: PasswordInput,
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>

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
