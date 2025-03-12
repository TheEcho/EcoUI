import { FunctionComponent } from 'react'

import { Box } from '..'
import { Paragraph } from '../Paragraph'
import Link from './Link'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Link',
  component: Link,
  tags: ['autodocs'],
} satisfies Meta<typeof Link>

export const WithLabel: FunctionComponent = () => (
  <Link label="Go to Google" href="https://google.com" target="_blank" />
)

export const WithChildren: FunctionComponent = () => (
  <Link href="#" weight="medium" color="icon-green" decoration="underline">
    En savoir plus
  </Link>
)

export const WithEllipsis: FunctionComponent = () => (
  <Box direction="row" width={15} background="text-light" padding="medium">
    <Link href="#" weight="medium" color="text-dark" decoration="underline" ellipsis>
      En savoir plus sur un sujet passionant
    </Link>
  </Box>
)

export const WithCustomClickEnvent: FunctionComponent = () => (
  <>
    <Paragraph>
      {'Test '}
      <Link href="https://google.com" target="_blank" onClick={() => alert('👍')}>
        Send Alert
      </Link>
      {' in the middle of text'}
    </Paragraph>
  </>
)
