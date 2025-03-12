import { ElementType, forwardRef, Fragment, ReactNode } from 'react'

import { TColor } from '../../../shared/tokens/color'
import { Box } from '../../core'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'
import { StyledNavGridItem, StyledNavGridItemProps } from './NavGridItem.styled'

export type NavGridItemProps = React.PropsWithChildren<{
  /**
   * Title of the item
   */
  title?: string
  /**
   * Title color
   */
  titleColor?: TColor
  /**
   * Description of the NavGridItem
   */
  description?: string | ReactNode
  /**
   * Callback when onClick
   */
  onClick?: StyledNavGridItemProps['onClick']
  /**
   * url to go when nav item clicked
   */
  href?: string
}>

export const NavGridItem = forwardRef<unknown, NavGridItemProps>(
  (
    { title, description, href, children, titleColor = 'secondary-darker', onClick, ...rest },
    ref,
  ) => {
    let content = null
    if (title || description) {
      content = (
        <Fragment>
          <Box marginBottom="small" flex={false}>
            <Heading variant="nav-grid-title" color={titleColor}>
              {title}
            </Heading>
          </Box>
          <Paragraph color="text" size="regular">
            {description}
          </Paragraph>
        </Fragment>
      )
    } else {
      content = children
    }

    const props: { href: string; as: ElementType<any> } | undefined = href ? {
        href,
        as: 'a',
      } : undefined

    return (
      <StyledNavGridItem
        disabled={!href && !onClick}
        direction="column"
        padding={'xlarge'}
        onClick={onClick}
        {...props}
        {...rest}
      >
        {content}
      </StyledNavGridItem>
    )
  },
)

NavGridItem.displayName = 'NavGridItem'
