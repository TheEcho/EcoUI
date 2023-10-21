import React, { FunctionComponent, useState } from 'react'

import { Box, Text } from '..'
import { Tab, Tabs } from '.'

export default {
  title: 'Core/Tabs',
  decorators: [
    (Story: any) => (
      <Box margin="small" direction="row" gap="medium">
        {Story()}
      </Box>
    ),
  ],
  component: Tabs,
  subcomponents: { Tab },
}

export const TabsWithSelection: FunctionComponent = () => {
  const [selectedTab, selectTab] = useState<null | 1 | 2 | 3>(null)
  return (
    <Tabs
      tabs={[
        {
          title: 'Alphabet',
          onClick: () => selectTab(1),
          icon: 'fa-font-case',
          selected: selectedTab === 1,
        },
        {
          title: 'Mouse',
          onClick: () => selectTab(2),
          icon: 'far fa-mouse',
          selected: selectedTab === 2,
        },
        {
          title: 'Gamepad',
          onClick: () => selectTab(3),
          icon: 'fa-gamepad',
          selected: selectedTab === 3,
        },
      ]}
    />
  )
}

export const TabsWithSuffixTag: FunctionComponent = () => {
  const [selectedTab, selectTab] = useState<null | 1 | 2 | 3>(null)
  const tabs = [
    {
      title: 'Alphabet',
      onClick: () => selectTab(1),
      selected: selectedTab === 1,
      suffixTagLabel: '3',
    },
    {
      title: 'Mouse',
      onClick: () => selectTab(2),
      selected: selectedTab === 2,
      suffixTagLabel: '1',
    },
    {
      title: 'Gamepad',
      onClick: () => selectTab(3),
      selected: selectedTab === 3,
    },
  ]

  return (
    <div>
      <Tabs tabs={tabs} />
      <Box flex={false} direction="column">
        <Box flex={false} direction="row" margin="medium">
          <Text color="text-light" size="regular" weight="medium">
            {!!selectedTab
              ? `Onglet "${tabs[selectedTab - 1].title}"`
              : 'Aucun onglet selectionner'}
          </Text>
        </Box>
      </Box>
    </div>
  )
}

export const SmallTabsWithSelection: FunctionComponent = () => {
  const [selectedTab, selectTab] = useState<null | 1 | 2 | 3>(null)
  return (
    <Tabs
      size="small"
      tabs={[
        {
          title: 'Alphabet',
          onClick: () => selectTab(1),
          icon: 'fa-font-case',
          selected: selectedTab === 1,
        },
        {
          title: 'Mouse',
          onClick: () => selectTab(2),
          icon: 'fa-mouse',
          selected: selectedTab === 2,
        },
        {
          title: 'Gamepad',
          onClick: () => selectTab(3),
          icon: 'fa-gamepad',
          selected: selectedTab === 3,
        },
      ]}
    />
  )
}

export const TabsAsChildrenWithoutIcons: FunctionComponent = () => {
  const [selectedTab, selectTab] = useState<null | 1 | 2 | 3>(null)
  return (
    <Tabs>
      <Tab title="First" selected={selectedTab === 1} onClick={() => selectTab(1)} />
      <Tab title="Second" selected={selectedTab === 2} onClick={() => selectTab(2)} />
      <Tab title="Third" selected={selectedTab === 3} onClick={() => selectTab(3)} />
    </Tabs>
  )
}

export const TabsWithoutIconsNotClickable = () => (
  <Tabs tabs={[{ title: 'First' }, { title: 'Second' }, { title: 'Third' }]} />
)

export const CompleteExample: FunctionComponent = () => {
  const [selectedTab, selectTab] = useState<
    null | 'Pikachu' | 'Squirtle' | 'Charmander' | 'Bulbasaur' | 'Dratini'
  >(null)
  return (
    <Box direction="column" gap="large" flex={false}>
      <Tabs
        selectedColor="info-light"
        tabs={[
          {
            title: 'Pikachu',
            color: 'icon-yellow',
            icon: 'fa-bolt',
            onClick: () => selectTab('Pikachu'),
            selected: selectedTab === 'Pikachu',
          },
          {
            title: 'Squirtle',
            color: 'icon-blue',
            icon: 'fa-turtle',
            onClick: () => selectTab('Squirtle'),
            selected: selectedTab === 'Squirtle',
          },
          {
            title: 'Charmander',
            color: 'primary',
            icon: 'fa-fire',
            onClick: () => selectTab('Charmander'),
            selected: selectedTab === 'Charmander',
          },
          {
            title: 'Bulbasaur',
            color: 'icon-green',
            icon: 'fa-leaf',
            onClick: () => selectTab('Bulbasaur'),
            selected: selectedTab === 'Bulbasaur',
          },
          {
            title: 'Dratini',
            color: 'icon-dark-purple',
            icon: 'fa-dragon',
            onClick: () => selectTab('Dratini'),
            selected: selectedTab === 'Dratini',
          },
          {
            title: 'Mewtwo (not available)',
            icon: 'fa-head-side-brain',
            disabled: true,
          },
        ]}
      />
      <Text weight="bold">
        {selectedTab ? `You've selected ${selectedTab}` : 'Select a Pokemon above'}
      </Text>
    </Box>
  )
}
