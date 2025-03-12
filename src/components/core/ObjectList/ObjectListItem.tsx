import { FunctionComponent, ReactNode } from 'react'

import { Box, Heading, Paragraph } from '../../core'
import { BoxProps } from '../Box'
import { StyledObjectListWithTheme } from './ObjectList.styled'
import { StyledObjectListItem } from './ObjectListItem.styled'

export type ObjectListItemProps = {
  id: string
  /**
   * Icon to display (React Node)
   */
  icon?: ReactNode
  /**
   * Title of the Object List Item
   */
  title?: string
  /**
   * Text of the Object List Item
   */
  text?: string
  /**
   * Image to display
   */
  image?: ReactNode
  /**
   * Callback when onClick
   */
  onClick?: StyledObjectListWithTheme['onClick']
  /**
   * Allow to hide the hover effect
   */
  showHover?: boolean
} & BoxProps

export const ObjectListItem: FunctionComponent<ObjectListItemProps> = ({
  icon,
  title,
  text,
  image,
  onClick,
  children,
  showHover = true,
  ...rest
}) => {
  let content = null

  if (title || text) {
    content = (
      <Box
        direction="row"
        padding="large"
        justify="between"
        paddingTop="medium"
        paddingBottom="medium"
      >
        {icon && (
          <Box direction="column" justify="around">
            {icon}
          </Box>
        )}
        <Box
          direction="column"
          justify="center"
          marginRight="small"
          marginLeft="small"
          align="start"
          flex={true}
        >
          <Heading variant="object-list-item-title" color="text-dark">
            {title}
          </Heading>
          <Paragraph color="text" size="regular">
            {text}
          </Paragraph>
        </Box>
        {image && (
          <Box direction="column" justify="around">
            {image}
          </Box>
        )}
      </Box>
    )
  } else {
    content = children
  }
  return (
    <StyledObjectListItem {...rest} onClick={onClick} showHover={showHover}>
      {content}
    </StyledObjectListItem>
  )
}

export default ObjectListItem
