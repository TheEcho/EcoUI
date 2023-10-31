import React, { FunctionComponent } from 'react'

import { css } from '@emotion/react'
import { select, text, withKnobs } from '@storybook/addon-knobs'

import { theme } from '../../../shared/tokens'
import { Box } from '../../core'
import { Heading, StyledHeadingComponents, THeadingVariant } from './Heading'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Heading',
  decorators: [withKnobs],
  component: Heading,
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>

const allHeading = Object.keys(StyledHeadingComponents) as THeadingVariant[]

export const All: FunctionComponent = () => (
  <Box direction="column" gap="medium">
    {allHeading.map((heading, index) => (
      <Heading variant={heading} key={index}>
        {heading}
      </Heading>
    ))}
  </Box>
)

export const CssProps: FunctionComponent = () => (
  <Heading
    variant="serif-title"
    css={css`
      font-weight: ${theme.text.weight.bold};
      font-size: ${theme.text.size.xlarge.size};
      font-family: ${theme.text.font.default};
    `}
  >
    Je suis un titre
  </Heading>
)

export const Knobs: FunctionComponent = () => (
  <Heading
    variant={select(
      'Style',
      {
        'Page title': 'page-title',
        'Card title': 'card-title',
        'Section title': 'section-title',
      },
      'page-title',
    )}
    color={select('Color', { Regular: 'text', Light: 'text-light', Dark: 'text-dark' }, 'text')}
  >
    {text('Text', 'Hello heading')}
  </Heading>
)
