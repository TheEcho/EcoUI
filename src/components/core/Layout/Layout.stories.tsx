import React, { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import Layout from './Layout'

export default {
  title: 'Core/Layout',
  decorators: [withKnobs],
  component: Layout,
}

export const SimpleLayout: FunctionComponent = () => <Layout />
