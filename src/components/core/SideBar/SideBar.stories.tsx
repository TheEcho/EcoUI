import React, { FunctionComponent } from 'react'

import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import { Badge, Box, Button, Icon, Text } from '../../core'
import SideBar from './SideBar'
import { SideBarItem } from './SideBarItem'
import { SideBarSection } from './SideBarSection'

export default {
  title: 'Core/SideBar',
  decorators: [withKnobs],
  component: SideBar,
}

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
          icon={<Icon icon="sidebar-icon-home" color="primary" />}
          title="Accueil"
          badge={<Badge label="1" />}
          onClick={onItemClick}
          active
        />
        <SideBarItem
          icon={<Icon icon="sidebar-icon-payments" />}
          title="Paiements"
          badge={<Badge label="1" background="background-darker" color="text" />}
          onClick={onItemClick}
        />
        <SideBarItem title="Infos Pratiques" icon={<Icon icon="sidebar-icon-infos" />} />
        <SideBarItem title="Préférences" icon={<Icon icon="sidebar-icon-preferences" />} />
      </SideBarSection>
      <SideBarSection title="Copropriété">
        <SideBarItem title="Dossier" icon={<Icon icon="sidebar-icon-files" />} />
        <SideBarItem title="Comptabilité" icon={<Icon icon="sidebar-icon-compta" />} />
        <SideBarItem title="Contrat" icon={<Icon icon="sidebar-icon-contracts" />} />
        <SideBarItem title="Documents" icon={<Icon icon="sidebar-icon-documents" />} />
        <SideBarItem title="Copropriétaires" icon={<Icon icon="sidebar-icon-owners" />} />
      </SideBarSection>
      <SideBarSection title="Conseil Syndical">
        <SideBarItem
          title="Validation"
          icon={<Icon icon="sidebar-icon-files" />}
          badge={<Badge label="2" background="background-darker" color="text" />}
        />
        <SideBarItem title="2 de plus..." icon={<Icon icon="icon-dots" />} />
      </SideBarSection>
    </SideBar>
  </Box>
)

export const SideBarWithoutTitleExample: FunctionComponent = () => (
  <Box width={25.6} height={76.8}>
    <SideBar background="background-lighter" elevation="medium">
      <Box flex={false} direction="row" justify="between">
        <Icon color="primary" size="xlarge" icon="icon-bellman-red" />
        <Button
          onClick={onClickClose}
          variant="text"
          icon={<Icon size="large" icon="icon-close" color="text"></Icon>}
        />
      </Box>
      <SideBarSection itemsGap="lg-medium">
        <SideBarItem
          icon={<Icon icon="far fa-folders" size="medium" color="primary" />}
          title="Dossiers"
          weight="medium"
          size="large"
          onClick={onItemClick}
          active
        />
        <SideBarItem
          icon={<Icon icon="icon-property" size="medium" color="text-light" />}
          title="Copropriétés"
          color="text-light"
          size="large"
          onClick={onItemClick}
        />
        <SideBarItem
          title="Prestataires"
          color="text-light"
          icon={<Icon icon="icon-third-party" size="medium" color="text-light" />}
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
          icon={<Icon icon="sidebar-icon-home" color="primary" />}
          title="Accueil"
          badge={<Badge label="1" />}
          onClick={onItemClick}
          active
        />
        <SideBarItem
          icon={<Icon icon="sidebar-icon-payments" />}
          title="Paiements"
          badge={<Badge label="1" background="background-darker" color="text" />}
          onClick={onItemClick}
        />
        <SideBarItem title="Infos Pratiques" icon={<Icon icon="sidebar-icon-infos" />} />
        <SideBarItem title="Préférences" icon={<Icon icon="sidebar-icon-preferences" />} />
      </SideBarSection>
      <SideBarSection title="Copropriété">
        <SideBarItem title="Dossier" icon={<Icon icon="sidebar-icon-files" />} />
        <SideBarItem title="Comptabilité" icon={<Icon icon="sidebar-icon-compta" />} />
        <SideBarItem title="Contrat" icon={<Icon icon="sidebar-icon-contracts" />} />
        <SideBarItem title="Documents" icon={<Icon icon="sidebar-icon-documents" />} />
        <SideBarItem title="Copropriétaires" icon={<Icon icon="sidebar-icon-owners" />} />
      </SideBarSection>
      <SideBarSection title="Conseil syndical">
        <SideBarItem
          title="Validation"
          icon={<Icon icon="sidebar-icon-files" />}
          badge={<Badge label="2" background="background-darker" color="text" />}
        />
        <SideBarItem title="2 de plus..." icon={<Icon icon="icon-dots" />} />
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
          icon={<Icon icon="sidebar-icon-home" color="primary" />}
          title="Accueil"
          badge={<Badge label="1" />}
          onClick={onItemClick}
          active
        />
        <SideBarItem
          icon={<Icon icon="sidebar-icon-payments" />}
          title="Paiements"
          badge={<Badge label="1" background="background-darker" color="text" />}
          onClick={onItemClick}
        />
        <SideBarItem title="Infos Pratiques" icon={<Icon icon="sidebar-icon-infos" />} />
        <SideBarItem title="Préférences" icon={<Icon icon="sidebar-icon-preferences" />} />
      </SideBarSection>
      <SideBarSection>
        <SideBarItem title="Dossier" icon={<Icon icon="sidebar-icon-files" />} />
        <SideBarItem title="Comptabilité" icon={<Icon icon="sidebar-icon-compta" />} />
        <SideBarItem title="Contrat" icon={<Icon icon="sidebar-icon-contracts" />} />
        <SideBarItem title="Documents" icon={<Icon icon="sidebar-icon-documents" />} />
        <SideBarItem title="Copropriétaires" icon={<Icon icon="sidebar-icon-owners" />} />
      </SideBarSection>
      <SideBarSection>
        <SideBarItem
          title="Validation"
          icon={<Icon icon="sidebar-icon-files" />}
          badge={<Badge label="2" background="background-darker" color="text" />}
        />
        <SideBarItem title="2 de plus..." icon={<Icon icon="icon-dots" />} />
      </SideBarSection>
    </SideBar>
  </Box>
)
