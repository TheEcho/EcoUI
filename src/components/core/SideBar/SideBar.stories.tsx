import { FunctionComponent } from 'react'

import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { HomeIcon, CreditCardIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { Badge, Box, Button, Icon, Text } from '../../core'
import SideBar from './SideBar'
import { SideBarItem } from './SideBarItem'
import { SideBarSection } from './SideBarSection'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/SideBar',
  decorators: [withKnobs],
  component: SideBar,
  tags: ['autodocs'],
} satisfies Meta<typeof SideBar>

const onItemClick = action('sideBarItem onClick')
const onClickClose = action('Button onClick close')

export const SideBarExample: FunctionComponent = () => (
  <Box width={25.6} height={76.8}>
    <SideBar>
      <div style={{ padding: '3.2rem', flex: '0 0 auto', border: '1px solid #000000' }}>
        <Text>Pré-section component</Text>
      </div>

      <SideBarSection title="Mon Portail">
        <SideBarItem
          icon={<Icon icon={<HomeIcon />} color="primary" />}
          title="Accueil"
          badge={<Badge label="1" />}
          onClick={onItemClick}
          active
        />
        <SideBarItem
          icon={<Icon icon={<CreditCardIcon />} />}
          title="Paiements"
          badge={<Badge label="1" background="background-darker" color="text" />}
          onClick={onItemClick}
        />
        <SideBarItem title="Information" />
        <SideBarItem title="Settings" />
      </SideBarSection>
      <SideBarSection title="Category">
        <SideBarItem title="Invoice" />
        <SideBarItem title="Contract" />
        <SideBarItem title="Files" />
        <SideBarItem title="User" />
      </SideBarSection>
      <SideBarSection title="Groups">
        <SideBarItem
          title="Validation"
          badge={<Badge label="2" background="background-darker" color="text" />}
        />
        <SideBarItem title="2 de plus..." />
      </SideBarSection>
    </SideBar>
  </Box>
)

export const SideBarWithoutTitleExample: FunctionComponent = () => (
  <Box width={25.6} height={76.8}>
    <SideBar background="background-lighter" elevation="medium">
      <Box flex={false} direction="row" justify="between">
        <Button
          onClick={onClickClose}
          variant="text"
          icon={<Icon size="large" icon={<XMarkIcon />} color="text"></Icon>}
        />
      </Box>
      <SideBarSection itemsGap="lg-medium">
        <SideBarItem
          title="Files"
          weight="medium"
          size="large"
          onClick={onItemClick}
          active
        />
        <SideBarItem
          title="Users"
          color="text-light"
          size="large"
          onClick={onItemClick}
        />
        <SideBarItem
          title="Invoice"
          color="text-light"
          size="large"
          onClick={onItemClick}
        />
      </SideBarSection>
    </SideBar>
  </Box>
)

export const SideBarWithSeparators: FunctionComponent = () => (
  <Box width={25.6} height={76.8}>
    <SideBar hasSectionSeparator>
      <div style={{ padding: '3.2rem', flex: '0 0 auto', border: '1px solid #000000' }}>
        <Text>Pré-section component</Text>
      </div>

      <SideBarSection title="Mon Portail">
        <SideBarItem
          title="Accueil"
          badge={<Badge label="1" />}
          onClick={onItemClick}
          active
        />
        <SideBarItem
          title="Paiements"
          badge={<Badge label="1" background="background-darker" color="text" />}
          onClick={onItemClick}
        />
        <SideBarItem title="Infos Pratiques" />
        <SideBarItem title="Préférences" />
      </SideBarSection>
      <SideBarSection title="Copropriété">
        <SideBarItem title="Dossier" />
        <SideBarItem title="Comptabilité" />
        <SideBarItem title="Contrat" />
        <SideBarItem title="Documents" />
        <SideBarItem title="Copropriétaires" />
      </SideBarSection>
      <SideBarSection title="Conseil syndical">
        <SideBarItem
          title="Validation"
          badge={<Badge label="2" background="background-darker" color="text" />}
        />
        <SideBarItem title="2 de plus..." />
      </SideBarSection>
    </SideBar>
  </Box>
)

export const SideBarWithoutTitlesWithSeparators: FunctionComponent = () => (
  <Box width={25.6} height={76.8}>
    <SideBar hasSectionSeparator>
      <div style={{ padding: '3.2rem', flex: '0 0 auto', border: '1px solid #000000' }}>
        <Text>Pré-section component</Text>
      </div>

      <SideBarSection>
        <SideBarItem
          title="Accueil"
          badge={<Badge label="1" />}
          onClick={onItemClick}
          active
        />
        <SideBarItem
          title="Paiements"
          badge={<Badge label="1" background="background-darker" color="text" />}
          onClick={onItemClick}
        />
        <SideBarItem title="Infos Pratiques" />
        <SideBarItem title="Préférences" />
      </SideBarSection>
      <SideBarSection>
        <SideBarItem title="Dossier" />
        <SideBarItem title="Comptabilité" />
        <SideBarItem title="Contrat" />
        <SideBarItem title="Documents" />
        <SideBarItem title="Copropriétaires" />
      </SideBarSection>
      <SideBarSection>
        <SideBarItem
          title="Validation"
          badge={<Badge label="2" background="background-darker" color="text" />}
        />
        <SideBarItem title="2 de plus..." />
      </SideBarSection>
    </SideBar>
  </Box>
)
