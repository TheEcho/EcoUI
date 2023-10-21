import React, { FunctionComponent } from 'react'

import Box, { BoxProps } from '../../Box'
import { TStyledBoxProps } from '../../Box/Box.styled'
import { Heading } from '../../Heading'

export type TProps = {
  /**
     Title to display
     */
  title?: string

  /**
   * Gap between items children
   */
  itemsGap?: TStyledBoxProps['gap']
} & BoxProps

export const SideBarSection: FunctionComponent<SideBarSectionProps> = ({
  title,
  children,
  itemsGap,
  ...rest
}) => {
  return (
    <Box flex={false} direction="column" gap="medium" {...rest}>
      {title && (
        <Box paddingLeft="sm-medium">
          <Heading variant="section-title">{title}</Heading>
        </Box>
      )}
      <Box direction="column" paddingHorizontal="lg-medium" {...(itemsGap && { gap: itemsGap })}>
        {children}
      </Box>
    </Box>
  )
}

SideBarSection.defaultProps = {
  componentName: 'SideBarSection',
} as TProps & { componentName: string }

export type SideBarSectionProps = TProps
