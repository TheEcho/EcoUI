import { isMobile } from 'react-device-detect'

import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { TColor } from '../../../shared/tokens/color'
import { TTextWeight } from '../../../shared/tokens/text'
import { Text } from '../Text'
import { StyledActionListContent, StyledActionListItem } from './ActionListItem.styled'
import Icon, { IconProps } from '../Icon'
import Box from '../Box'
import { Tag } from '../Tag'
import { PropsWithChildren } from 'react'

type ActionListItemTitleProps = {
  color: TColor
  weight: TTextWeight
  title?: string | JSX.Element
}

const getTitleElement = ({ color, weight, title }: ActionListItemTitleProps): JSX.Element => {
  if (typeof title === 'string' && title !== '') {
    return (
      <Text size={isMobile ? 'large' : 'regular'} color={color} weight={weight} ellipsis>
        {title}
      </Text>
    )
  }

  if (!title) {
    return <Box height={2} flex={false} />
  }

  return title
}

type ActionListItemDescriptionProps = {
  description?: string | JSX.Element
}

const getDescriptionElement = ({ description }: ActionListItemDescriptionProps): JSX.Element => {
  if (!description) {
    return <></>
  }

  if (typeof description === 'string') {
    return (
      <Text size="small" color="text-light" ellipsis>
        {description}
      </Text>
    )
  }

  return description
}

export type ActionListItemProps = PropsWithChildren<{
  title?: string | JSX.Element
  description?: string | JSX.Element
  selected?: boolean
  icon?: IconProps['icon']
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  label?: string | string[]
  color?: TColor
  weight?: TTextWeight
  hasChildren?: boolean
}>

export const ActionListItem = ({
  children,
  title,
  description,
  selected,
  icon,
  label,
  onClick,
  color = 'text',
  weight = 'regular',
  hasChildren = false,
  ...rest
}: ActionListItemProps) => {
  let content = null
  if (title !== undefined || description) {
    let labelArray: string[] = []
    if (label) {
      labelArray = typeof label === 'string' ? [label] : label
    }

    const mobileHeight = labelArray.length ? 4.4 : 3.2

    content = (
      <StyledActionListContent {...(isMobile && { height: mobileHeight })}>
        <Box direction="row" gap="small" align="center" justify="between">
          {icon ? <Icon icon={icon} size="medium" color={color} /> : null}
          <Box direction="column" justify="around">
            {getTitleElement({ title, color, weight })}
            {getDescriptionElement({ description })}
          </Box>
          {hasChildren && <Icon icon={<ChevronRightIcon />} size="sm-medium" />}
        </Box>
        {!!labelArray.length && (
          <Box direction="row" gap="medium" align="center" flex={false}>
            {labelArray.map((tag, i) => (
              <Box flex={false} key={i}>
                <Tag
                  label={tag}
                  color="background-dark"
                  size="xsmall"
                  textColor="text"
                  weight="medium"
                />
              </Box>
            ))}
          </Box>
        )}
      </StyledActionListContent>
    )
  } else {
    content = children
  }
  return (
    <StyledActionListItem
      {...rest}
      direction="row"
      selected={selected}
      gap="medium"
      onClick={onClick}
    >
      {content}
    </StyledActionListItem>
  )
}

export default ActionListItem
