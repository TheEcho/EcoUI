import { FC } from 'react'

import { ArchiveBoxIcon } from '@heroicons/react/24/outline'
import { withKnobs } from '@storybook/addon-knobs'

import { Avatar } from '../Avatar'
import { Box } from '../Box'
import Button from '../Button'
import { Heading } from '../Heading'
import Icon from '../Icon'
import { ObjectList } from '../ObjectList'
import { Paragraph } from '../Paragraph'
import { Text } from '../Text'
import { RawNotificationItemContent } from './Notification.styled'
import { RawNotificationItem } from './RawNotificationItem'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Notification/NotificationItem',
  decorators: [withKnobs],
  component: RawNotificationItem,
  tags: ['autodocs'],
} satisfies Meta<typeof RawNotificationItem>

const NotificationTitle: FC = () => {
  return (
    <Box direction="row" flex={false} gap="small" flexWrap="true">
      <Text weight="medium">Arthur Pendragon</Text>
      <Text color="text-light">a laissé un nouveau commentaire dans</Text>
      <Text color="secondary">La boite au lettre</Text>
    </Box>
  )
}

const NotificationIcon: FC = () => {
  return (
    <Avatar
      firstName="Arthur"
      lastName="Pendragon"
      width={40}
      height={40}
      background="secondary-dark"
    />
  )
}

const NotificationAction: FC = () => {
  return (
    <Button
      icon={<Icon icon={<ArchiveBoxIcon />} size="small" />}
      variant="text"
      buttonSize="tiny"
      onClick={async e => {
        e.stopPropagation()
        alert('archiver')
      }}
    />
  )
}

const subtitle = (
  <Box direction="row" gap="small">
    <Text size="small">{`· 24, rue de la Comedie, 75123 Paris`}</Text>
  </Box>
)

const content = (
  <RawNotificationItemContent
    marginTop="small"
    direction="row"
    borderSize="xsmall"
    borderColor="border-light"
    padding="small"
    borderRadius="medium"
    background="background-light"
    justify="start"
    align="center"
  >
    <Paragraph color="text-light" size="small" weight="regular">
      {
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    </Paragraph>
  </RawNotificationItemContent>
)

const DemoNotificationItem: FC<{ isNew?: boolean }> = ({ isNew }) => {
  return (
    <RawNotificationItem
      isNew={isNew}
      title={<NotificationTitle />}
      subtitle={subtitle}
      icon={<NotificationIcon />}
      content={content}
    />
  )
}

const NotificationItemWithSideAction: FC<{ isNew?: boolean }> = ({ isNew }) => {
  return (
    <RawNotificationItem
      hasBorderBottom
      isNew={isNew}
      title={<NotificationTitle />}
      subtitle={subtitle}
      sideAction={<NotificationAction />}
      icon={<NotificationIcon />}
      content={content}
    />
  )
}

const NotificationItemWithFooter: FC<{ isNew?: boolean }> = ({ isNew }) => {
  return (
    <RawNotificationItem
      hasBorderBottom
      isNew={isNew}
      title={<NotificationTitle />}
      subtitle={subtitle}
      icon={<NotificationIcon />}
      content={content}
      footer={
        <Box direction="row" marginTop="sm-medium" gap="sm-medium">
          <Button variant="primary" label="Répondre" buttonSize="small" />
          <Button variant="secondary" label="Voir le message" buttonSize="small" />
        </Box>
      }
    />
  )
}

const data = [
  { id: 1, isNew: false },
  { id: 2, isNew: true },
  { id: 3, isNew: false },
  { id: 4, isNew: true },
  { id: 5, isNew: true },
  { id: 6, isNew: false },
  { id: 7, isNew: true },
]

export const SimpleNotificationItem: FC = () => {
  return (
    <Box direction="column" flex={false} background="background" gap="large" padding="large">
      <DemoNotificationItem />
      <DemoNotificationItem isNew />
      <NotificationItemWithSideAction isNew />
      <NotificationItemWithFooter isNew />
    </Box>
  )
}

export const NotificationsList: FC = () => {
  return (
    <ObjectList
      width={56}
      header="Notifications"
      suffixElement={
        <Box direction="column" align="center" justify="center" padding="medium">
          <Heading variant="object-list-item-title" color="secondary">
            Afficher tout
          </Heading>
        </Box>
      }
      itemComponent={DemoNotificationItem}
      emptyComponent={<Text>Pas de notification</Text>}
      loadingComponent={<Text>Chargement...</Text>}
      data={data}
    />
  )
}
