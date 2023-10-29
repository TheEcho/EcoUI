import NextLink from 'next/link'
import { FunctionComponent, ReactNode } from 'react'
import { isMobile } from 'react-device-detect'

import { useHover } from '../../../utils/_hooks/useHover'
import { Box, Text } from '..'
import { BoxProps } from '../Box'

export type DropItemProps = {
  /**
   * Text displayed in the DropItem
   */
  title?: string
  /**
   * instantiated component rendered if prop title is not provided
   */
  children?: ReactNode
  /**
   * callback called when DropItem is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  /**
   * href to go to an other page
   */
  href?: string | undefined
  /**
   * icon displayed at start of DropItem
   * @default "critical"
   */
  icon?: ReactNode
  /**
   * tabIndex passed to the wrapping Box
   */
  tabindex?: string
} & BoxProps

export const DropItem: FunctionComponent<DropItemProps> = ({
  title,
  onClick,
  href,
  icon,
  children,
  as,
  ...rest
}) => {
  const { isHover, setHover } = useHover()

  const content = (
    <Box
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      paddingRight="medium"
      paddingLeft="medium"
      paddingVertical="small"
      onClick={href ? undefined : onClick}
      background={isHover ? 'background-light' : 'background-lighter'}
      direction="row"
      {...rest}
    >
      <Box align="center" {...(isMobile && { height: 3.2 })} gap="medium" direction="row">
        {icon}
        {!!title && <Text size={isMobile ? 'large' : 'regular'}>{title}</Text>}
        {!!children && <Box>{children}</Box>}
      </Box>
    </Box>
  )

  return (
    <>
      {href ? (
        // LinkTo would be nice here but it's not available (it's in the 'frontend' module)
        <NextLink href={href}>
          <a href={href}>{content}</a>
        </NextLink>
      ) : (
        content
      )}
    </>
  )
}
