import React, { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import Layout from './Layout'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Layout',
  decorators: [withKnobs],
  component: Layout,
  tags: ['autodocs'],
} satisfies Meta<typeof Layout>

export const SimpleLayout: FunctionComponent = () => <Layout />
