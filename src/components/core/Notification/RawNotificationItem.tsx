import { FC, ReactNode } from 'react'
import { BellIcon } from '@heroicons/react/24/outline'

import { TColor } from '../../../shared/tokens/color'
import { Box, BoxProps } from '../Box'
import { Icon } from '../Icon'
import { Text } from '../Text'
import {
  RawNotificationItemContent,
  StyledIconBox,
  StyledNotificationItem,
} from './Notification.styled'

export type RawNotificationItemProps = {
  icon?: ReactNode // Icon to display (React Node)
  title?: ReactNode // Title ReactNode
  subtitle?: ReactNode
  sideAction?: ReactNode // Action ReactNode
  content?: ReactNode // Content ReactNode
  isNew?: boolean
  borderRadius?: BoxProps['borderRadius']
  hasBorderBottom?: boolean
  onClick?: BoxProps['onClick']
  iconBorderColor?: TColor
  footer?: ReactNode
}

export const RawNotificationItem: FC<RawNotificationItemProps> = ({
  icon = <Icon icon={<BellIcon />} />,
  title,
  subtitle,
  content,
  sideAction,
  isNew,
  borderRadius = 'medium',
  hasBorderBottom = false,
  onClick,
  iconBorderColor,
  footer,
}) => {
  return (
    <StyledNotificationItem
      onClick={onClick}
      direction="row"
      padding="medium"
      justify="around"
      paddingVertical="medium"
      paddingBottom="medium"
      background={isNew ? 'warning-lighter' : 'background-lighter'}
      borderRadius={borderRadius}
      hasBorderBottom={hasBorderBottom}
      flex={false}
      isNew={isNew}
    >
      {icon && (
        <Box direction="row" justify="start" align="start" flex={false} marginRight="small">
          <StyledIconBox {...(!!iconBorderColor && { background: iconBorderColor })}>
            {icon}
          </StyledIconBox>
        </Box>
      )}
      <Box direction="column" justify="start" marginRight="small" marginLeft="small" flex={true}>
        <Box direction="row" justify="between" align="start">
          <Text weight="regular" color="text-dark" size="regular">
            {title}
          </Text>
          {sideAction}
        </Box>

        {!!subtitle && (
          <RawNotificationItemContent direction="row" marginTop="xsmall">
            {subtitle}
          </RawNotificationItemContent>
        )}
        {!!content && content}
        {!!footer && footer}
      </Box>
    </StyledNotificationItem>
  )
}
