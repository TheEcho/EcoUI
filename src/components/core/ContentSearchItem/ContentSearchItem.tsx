import { FC, ReactNode } from 'react'

import { Box } from '../../core/Box'
import { Text } from '../../core/Text'
import { ContentSearchItemContainer } from './ContentSearchItem.styled'

export interface ContentSearchItemProps {
  icon?: ReactNode

  title: string
  subtitle?: string
  description?: string

  rightContent?: ReactNode

  isSelected?: boolean
}

export const ContentSearchItem: FC<ContentSearchItemProps> = props => {
  const { icon, title, subtitle, description, rightContent, isSelected } = props

  return (
    <ContentSearchItemContainer
      paddingHorizontal="medium"
      paddingVertical="small"
      direction="row"
      gap="lg-medium"
      align="center"
      selected={!!isSelected}
    >
      {icon}
      <Box direction="column" gap="none" flex={1}>
        <Text size="regular" color="text" notSelectable>
          {title}
        </Text>
        {!!subtitle && (
          <Text size="small" color="text" notSelectable>
            {subtitle}
          </Text>
        )}
        {!!description && (
          <Text size="small" color="text-light" notSelectable>
            {description}
          </Text>
        )}
      </Box>
      <Box flex={false}>{rightContent}</Box>
    </ContentSearchItemContainer>
  )
}
