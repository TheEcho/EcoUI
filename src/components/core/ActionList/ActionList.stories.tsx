import React, { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box, Text } from '../../core'
import { ActionList } from './ActionList'
import { ActionListItem, ActionListItemProps } from './ActionListItem'
import { ActionListSection, ActionListSectionProps } from './ActionListSection'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/ActionList',
  decorators: [withKnobs],
  component: ActionList,
  tags: ['autodocs'],
} satisfies Meta<typeof ActionList>

export const NormalActionList: FunctionComponent = () => (
  <Box margin="small" width={11.8}>
    <ActionList
      onClick={() => {
        console.log('clicked')
      }}
    >
      <ActionListItem title="Action 1" selected={true} />
      <ActionListItem title="Action 2" />
      <ActionListItem title="Action 3" />
      <ActionListItem title={<Text ellipsis>Action Element</Text>} />
    </ActionList>
  </Box>
)

export const ActionListWithFixedWidth: FunctionComponent = () => {
  return (
    <ActionList maxWidth="15rem">
      <ActionListItem icon={'caticon-eau'} title="I'am a long title with a lot of useless word" />
      <ActionListItem icon={'caticon-eau'} title="I'am a long title with a lot of useless word" />
      <ActionListItem icon={'caticon-eau'} title="I'am a long title with a lot of useless word" />
    </ActionList>
  )
}

export const ActionListWithParameters: FunctionComponent = () => {
  const items: ActionListItemProps[] = [
    {
      title: 'Action 1',
      selected: false,
    },
    {
      title: 'Action 2',
      selected: true,
    },
    {
      title: 'Action 3',
      selected: false,
    },
  ]
  return (
    <Box margin="small" direction="row" width={11.8}>
      <ActionList onClick={() => console.log('clicked')} items={items} flex={true} />
    </Box>
  )
}

export const ActionListWithSectionParameters: FunctionComponent = () => {
  const sections: ActionListSectionProps[] = [
    {
      title: 'Section',
      sectionIndex: 0,
      actionListItems: [
        {
          title: 'Action 1',
          selected: false,
        },
        {
          title: 'Action 2',
          selected: true,
        },
        {
          title: 'Action 3',
          selected: false,
        },
      ],
    },
  ]
  return (
    <Box margin="small" width={11.8}>
      <ActionList onClick={() => console.log('clicked')} sections={sections} />
    </Box>
  )
}

export const ActionListWithDescription: FunctionComponent = () => (
  <Box margin="small">
    <ActionList onClick={() => console.log('clicked')}>
      <ActionListItem title="Action 1" description="Description de l'action" />
      <ActionListItem title="Action 2" description="Description de l'action" selected={true} />
      <ActionListItem title="Action 3" description="Description de l'action" />
    </ActionList>
  </Box>
)

export const ActionListWithIcon: FunctionComponent = () => (
  <Box margin="small">
    <ActionList onClick={() => console.log('clicked')}>
      <ActionListItem title="Action 1" icon="icon-alert" />
      <ActionListItem title="Action 2" icon="icon-bullet" />
    </ActionList>
  </Box>
)

export const ActionListWithLabel: FunctionComponent = () => (
  <Box margin="small">
    <ActionList onClick={() => console.log('clicked')}>
      <ActionListItem title="Action 1" icon="icon-alert" label="Label 1" />
      <ActionListItem title="Action 2" icon="icon-bullet" label={['Label1', 'Label 2']} />
    </ActionList>
  </Box>
)

export const ActionListWithSection: FunctionComponent = () => (
  <Box margin="small">
    <ActionList onClick={() => console.log('clicked')}>
      <ActionListSection title="section">
        <ActionListItem title="Action 1" />
        <ActionListItem title="Action 2" />
        <ActionListItem title="Action 3" />
      </ActionListSection>
    </ActionList>
  </Box>
)

export const ActionListWithTwoSection: FunctionComponent = () => (
  <Box margin="small">
    <ActionList onClick={() => console.log('clicked')}>
      <ActionListSection
        title="section"
        sectionIndex={0}
        icon="far fa-angle-left"
        onClick={() => console.log('clicked')}
      >
        <ActionListItem title="Action 1" />
        <ActionListItem title="Action avec un long text" />
        <ActionListItem title="Action 3" />
      </ActionListSection>
      <ActionListSection title="section" sectionIndex={1}>
        <ActionListItem title="Action 1" />
        <ActionListItem title="Action 2" />
        <ActionListItem title="Action 3" />
      </ActionListSection>
    </ActionList>
  </Box>
)
