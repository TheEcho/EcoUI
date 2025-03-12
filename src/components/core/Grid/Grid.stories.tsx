import { FunctionComponent, ReactElement } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import Box from '../Box'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'
import { Grid } from './Grid'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Grid',
  decorators: [withKnobs],
  component: Grid,
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>

const buildItems = (length: number): ReactElement => {
  const items: ReactElement[] = []

  for (let i = 0; i < length; i++) {
    items.push(
      <Box background="background-dark" padding="medium" key={i}>
        <Paragraph>Item</Paragraph>
      </Box>,
    )
  }

  return <>{items.map((item) => item)}</>
}

export const Simple: FunctionComponent = () => (
  <Box direction="column" background="background-light">
    <Box padding="medium">
      <Heading variant="card-header-title">2 items per row</Heading>
    </Box>

    <Grid itemPerRow={2} gap="large" background="background" padding="large">
      {buildItems(3)}
    </Grid>

    <Box padding="medium">
      <Heading variant="card-header-title">5 item Per Row</Heading>
    </Box>
    <Grid itemPerRow={5} gap="large" background="background" padding="large">
      {buildItems(7)}
    </Grid>

    <Box padding="medium">
      <Heading variant="card-header-title">12 items Per Row</Heading>
    </Box>

    <Grid itemPerRow={12} gap="large" background="background" padding="large">
      {buildItems(15)}
    </Grid>
  </Box>
)
