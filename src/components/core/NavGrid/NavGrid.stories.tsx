import { FunctionComponent } from 'react'

import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import { Box, Heading, Icon, Image, Paragraph, Text } from '../../core'
import NavGrid from './NavGrid'
import { NavGridItem } from './NavGridItem'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/NavGrid',
  decorators: [withKnobs],
  component: NavGrid,
  tags: ['autodocs'],
} satisfies Meta<typeof NavGrid>

const onNavGridItemClick = action('navGridItem onClick')

export const FourItems: FunctionComponent = () => (
  <Box margin="small">
    <NavGrid width={64}>
      <NavGridItem
        title="Mes coordonnées"
        description="This is a normal text that has a font size of 13,5px and a line height of 20px."
      />
      <NavGridItem
        title="Mes coordonnées"
        description="This is a normal text that has a font size of 13,5px and a line height of 20px."
        href="#"
      />
      <NavGridItem
        title="Mes coordonnées"
        description="This is a normal text that has a font size of 13,5px and a line height of 20px."
        onClick={onNavGridItemClick}
      />
      <NavGridItem
        title="Mes coordonnées"
        description="This is a normal text that has a font size of 13,5px and a line height of 20px."
        onClick={onNavGridItemClick}
      />
    </NavGrid>
  </Box>
)

export const NavGridCustomDescription = () => (
  <Box margin="small">
    <NavGrid width={64}>
      <NavGridItem
        title="Mes coordonnées"
        titleColor="text-light"
        description={
          <Box direction="row" gap="small" align="center">
            <Icon icon="icon-alert" color="primary" />
            <Text color="primary" weight="medium">
              Ajouter les informations
            </Text>
          </Box>
        }
        href="#"
      />
      <NavGridItem
        title="Mes coordonnées"
        titleColor="text-light"
        description={
          <Box direction="row" gap="small" align="center">
            <Icon icon="icon-alert" color="primary" />
            <Text color="primary" weight="medium">
              Ajouter les informations
            </Text>
          </Box>
        }
        href="#"
      />
    </NavGrid>
  </Box>
)

export const FourItemsWithOnClick: FunctionComponent = () => (
  <Box margin="small">
    <NavGrid width={64}>
      <NavGridItem
        title="Mes coordonnées"
        description="This is a normal text that has a font size of 13,5px and a line height of 20px."
        onClick={onNavGridItemClick}
      />
      <NavGridItem
        title="Mes coordonnées"
        description="This is a normal text that has a font size of 13,5px and a line height of 20px."
        onClick={onNavGridItemClick}
      />
      <NavGridItem
        title="Mes coordonnées"
        description="This is a normal text that has a font size of 13,5px and a line height of 20px."
        onClick={onNavGridItemClick}
      />
      <NavGridItem
        title="Mes coordonnées"
        description="This is a normal text that has a font size of 13,5px and a line height of 20px."
        onClick={onNavGridItemClick}
      />
    </NavGrid>
  </Box>
)

export const TreeItems: FunctionComponent = () => (
  <Box margin="small">
    <NavGrid width={64} flex="shrink">
      <NavGridItem
        title="Mes coordonnées"
        description="This is a normal text that has a font size of 13,5px and a line height of 20px."
        onClick={onNavGridItemClick}
      />
      <NavGridItem
        title="Mes coordonnées"
        description="This is a normal text that has a font size of 13,5px and a line height of 20px."
        onClick={onNavGridItemClick}
      />
      <NavGridItem
        title="Mes coordonnées"
        description="This is a normal text that has a font size of 13,5px and a line height of 20px."
        onClick={onNavGridItemClick}
      />
    </NavGrid>
  </Box>
)

// TODO: navgrid item générique ou custom
export const SixItems: FunctionComponent = () => (
  <Box margin="small">
    <NavGrid width={64} flex="shrink">
      <NavGridItem
        title="Mes coordonnées"
        description="This is a normal text that has a font size of 13,5px and a line height of 20px."
        onClick={onNavGridItemClick}
      />
      <NavGridItem
        title="Mes coordonnées"
        description="This is a normal text that has a font size of 13,5px and a line height of 20px."
        onClick={onNavGridItemClick}
      />
      <NavGridItem
        title="Mes coordonnées"
        description="This is a normal text that has a font size of 13,5px and a line height of 20px."
        onClick={onNavGridItemClick}
      />
      <NavGridItem
        title="Mes coordonnées"
        description="This is a normal text that has a font size of 13,5px and a line height of 20px."
        onClick={onNavGridItemClick}
      />
      <NavGridItem
        title="Mes coordonnées"
        description="This is a normal text that has a font size of 13,5px and a line height of 20px."
        onClick={onNavGridItemClick}
      />
      <NavGridItem
        title="Mes coordonnées"
        description="This is a normal text that has a font size of 13,5px and a line height of 20px."
        onClick={onNavGridItemClick}
      />
    </NavGrid>
  </Box>
)

export const CustomItemsWithImage: FunctionComponent = () => (
  <Box margin="small">
    <NavGrid width={64}>
      <NavGridItem onClick={onNavGridItemClick}>
        <Box marginBottom="small">
          <Image src="https://via.placeholder.com/139x72" width={139} height={72} />
        </Box>
        <Box marginBottom="small">
          <Heading variant="nav-grid-title" color="secondary-darker">
            Mes coordonnées
          </Heading>
        </Box>
        <Paragraph color="text-light" size="small">
          This is a normal text that has a font size of 13,5px and a line height of 20px.
        </Paragraph>
      </NavGridItem>
      <NavGridItem onClick={onNavGridItemClick}>
        <Box marginBottom="small">
          <Image src="https://via.placeholder.com/139x72" width={139} height={72} />
        </Box>
        <Box marginBottom="small">
          <Heading variant="nav-grid-title" color="secondary-darker">
            Mes coordonnées
          </Heading>
        </Box>
        <Paragraph color="text-light" size="small">
          This is a normal text that has a font size of 13,5px and a line height of 20px.
        </Paragraph>
      </NavGridItem>
    </NavGrid>
  </Box>
)

export const OneNavGridItem: FunctionComponent = () => (
  <Box margin="small">
    <NavGrid width={64}>
      <NavGridItem
        title="Mes coordonnées"
        description="This is a normal text that has a font size of 13,5px and a line height of 20px."
        href="#"
        onClick={onNavGridItemClick}
      />
    </NavGrid>
  </Box>
)
export const Knobs: FunctionComponent = () => <NavGrid />
