import { FunctionComponent } from 'react'

import { TColor } from '../../../shared/tokens/color'
import { Text } from '../Text'
import { StyledBadgeIcon, StyledBadgeIconContainer } from './BadgeIcon.styled'
import { IconProps } from '../Icon'

export type BadgeIconProps = {
  icon: IconProps['icon'] // Icon to display (React Node)
  count?: number // Count to display
  background?: TColor // Color of the Tag
  color?: TColor // Color of the text
}

export const BadgeIcon: FunctionComponent<BadgeIconProps> = ({
  icon,
  count,
  color,
  background,
}) => {
  return (
    <StyledBadgeIconContainer>
      {icon}
      {!!count && (
        <StyledBadgeIcon
          flex={false}
          borderRadius="medium"
          justify="around"
          align="center"
          background={background}
        >
          <Text size={'xsmall'} color={color}>
            {count > 99 ? '99+' : count}
          </Text>
        </StyledBadgeIcon>
      )}
    </StyledBadgeIconContainer>
  )
}
