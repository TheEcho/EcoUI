import React, { FunctionComponent, ReactNode } from 'react'

import { Box, Text } from '../../../core'
import { BoxProps } from '../../Box'
import { IconProps } from '../../Icon'
import { TextProps } from '../../Text'
import { StyledSideBarItem } from './SideBarItem.styled'
import { WithChildren } from '@/types/WithChildren'

export type SideBarItemProps = {
  /**
   Title to display
   */
  title?: string
  /**
   * Icon to display (React Node)
   */
  icon?: ReactNode
  /**
   * Badge to display (React Node)
   */
  badge?: ReactNode
  /**
   * Click event (not yet optimized)
   */
  onClick?: BoxProps['onClick']
  /**
   * Tell if the item is active
   */
  active?: boolean
  /**
   * Color passed to the underlying Text component
   */
  iconColor?: IconProps['color']
  /**
   * Color passed to the underlying Text component
   */
  color?: TextProps['color']
  /**
   * Weight passed to the underlying Text component
   */
  weight?: TextProps['weight']
  /**
   * Size passed to the underlying Text component
   */
  size?: TextProps['size']
}

export const SideBarItem: FunctionComponent<SideBarItemProps & WithChildren> = ({
  children,
  title = '',
  icon,
  badge,
  onClick,
  active,
  color = 'text',
  weight = 'regular',
  size = 'regular',
}) => {
  let content = null
  if (title) {
    content = (
      <>
        {icon && <Box flex={false}>{icon}</Box>}
        <Box flex={true}>
          <Box margin="none" direction="column" justify="around">
            <Text size={size} color={active ? 'text-dark' : color} weight={weight} ellipsis>
              {title}
            </Text>
          </Box>
        </Box>
        <Box margin="none" flex={false}>
          {badge ? badge : null}
        </Box>
      </>
    )
  } else {
    content = children
  }

  return (
    <StyledSideBarItem
      direction="row"
      gap="lg-medium"
      borderRadius="medium"
      onClick={onClick}
      flex={false}
      justify="center"
      align="center"
      padding="small"
      active={active}
    >
      {content}
    </StyledSideBarItem>
  )
}
