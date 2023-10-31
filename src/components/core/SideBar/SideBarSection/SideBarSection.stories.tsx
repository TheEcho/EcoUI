import React, { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Badge } from '../../Badge'
import Box from '../../Box'
import { Icon } from '../../Icon'
import { SideBar } from '../SideBar'
import { SideBarItem } from '../SideBarItem'
import { SideBarSection } from './SideBarSection'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/SideBarSection',
  decorators: [withKnobs],
  component: SideBarSection,
  tags: ['autodocs'],
} satisfies Meta<typeof SideBarSection>

export const SideBarSectionExample: FunctionComponent = () => (
  <Box width={25.6} height={75.6}>
    <SideBar>
      <SideBarSection title="Accueil">
        <SideBarItem
          icon={<Icon icon="sidebar-icon-home" />}
          title="Accueil"
          badge={<Badge label="1" />}
        />
      </SideBarSection>
    </SideBar>
  </Box>
)
