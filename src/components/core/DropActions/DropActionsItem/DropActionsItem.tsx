import NextLink from 'next/link'
import { FunctionComponent, useState } from 'react'
import { isMobile } from 'react-device-detect'

import { Box, Heading, Icon, Text } from '../..'
import { DropItem } from '../../DropItem'
import { TDropAction } from '../DropActions'
import { SeparatorStyled } from './DropActionsItem.styled'

type DropActionsItemProps = {
  action: TDropAction
  onClick?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const DropActionsItem: FunctionComponent<DropActionsItemProps> = ({
  action,
  onClick = (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    //
  },
}) => {
  const [isHover, setIsHover] = useState(false)

  if (action.type === 'separator') {
    return (
      <SeparatorStyled
        background="background-lighter"
        {...(action.title && { padding: 'small', paddingHorizontal: 'medium' })}
      >
        <Heading variant="card-header-title" color="text-light">
          {action.title}
        </Heading>
      </SeparatorStyled>
    )
  }

  const dropItem = (
    <DropItem
      paddingHorizontal="medium"
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      background={isHover ? 'background' : 'background-lighter'}
    >
      <Box direction="row" gap="medium" {...(isMobile && { height: 3.2 })} align="center">
        {!!action.icon && (
          <Icon
            icon={action.icon}
            size={action.iconSize ?? 'small'}
            {...(action.type === 'delete' && { color: 'critical-dark' })}
          />
        )}
        <Text
          color={action.type === 'delete' ? 'primary' : 'text'}
          size={isMobile ? 'large' : 'regular'}
        >
          {action.title}
        </Text>
      </Box>
    </DropItem>
  )

  return action.href ? (
    // LinkTo would be nice here but it's not available (it's in the 'frontend' module)
    <NextLink href={action.href}>
      <a href={action.href}>{dropItem}</a>
    </NextLink>
  ) : (
    dropItem
  )
}
