import React, { FunctionComponent } from 'react'

import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import { Badge } from '../../Badge'
import Box from '../../Box'
import { SideBar } from '../SideBar'
import { SideBarItem } from './SideBarItem'

export default {
  title: 'Core/SideBarItem',
  decorators: [withKnobs],
  component: SideBarItem,
}

const onItemClick = action('sideBarItem onClick')

export const SideBarItemExample: FunctionComponent = () => (
  <Box width={25.6} height={75.6}>
    <SideBar>
      <SideBarItem title="Accueil" badge={<Badge label="1" />} onClick={onItemClick} />
      <SideBarItem title="Accueil" badge={<Badge label="1" />} onClick={onItemClick} active />
    </SideBar>
  </Box>
)
