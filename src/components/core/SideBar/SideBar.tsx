import React, { FunctionComponent, ReactNode } from 'react'

import { Box } from '../../core'
import { TStyledBoxProps } from '../Box/Box.styled'
import { StyledSideBar } from './SideBar.styled'
import { WithChildren } from '@/types/WithChildren'

export type SideBarProps = {
  /**
   * Flex direction of the box
   */
  direction?: TStyledBoxProps['direction']
  /**
   * Flex children alignment
   */
  align?: TStyledBoxProps['align']
  /**
   * Flex children justify
   */
  justify?: TStyledBoxProps['justify']
  /**
   * Gap between children
   */
  gap?: TStyledBoxProps['gap']
  /**
   * Padding inside Box
   */
  padding?: TStyledBoxProps['padding']
  paddingTop?: TStyledBoxProps['paddingTop']
  paddingRight?: TStyledBoxProps['paddingRight']
  paddingBottom?: TStyledBoxProps['paddingBottom']
  paddingLeft?: TStyledBoxProps['paddingLeft']
  /**
   * Margin inside Box
   */
  margin?: TStyledBoxProps['margin']
  marginTop?: TStyledBoxProps['marginTop']
  marginRight?: TStyledBoxProps['marginRight']
  marginBottom?: TStyledBoxProps['marginBottom']
  marginLeft?: TStyledBoxProps['marginLeft']

  /**
   * Border radius of box
   */
  borderRadius?: TStyledBoxProps['borderRadius']
  /**
   * Border size
   */
  borderSize?: TStyledBoxProps['borderSize']
  borderColor?: TStyledBoxProps['borderColor']
  /**
   * Background color of the box
   */
  background?: TStyledBoxProps['background']
  /**
   * Elevation (box-shadow)
   */
  elevation?: TStyledBoxProps['elevation']
  /**
   * Flex style of the box
   */
  flex?: TStyledBoxProps['flex']
  /**
   * Flex Wrap style of the box
   */
  flexWrap?: TStyledBoxProps['flexWrap']
  /**
   * Fixed width (in rem)
   */
  width?: TStyledBoxProps['width']
  /**
   * Fixed height (in rem)
   */
  height?: TStyledBoxProps['height']
  // displays a line Separator between each section
  hasSectionSeparator?: boolean
}

export const SideBar: FunctionComponent<SideBarProps & WithChildren> = ({
  background = 'background',
  children,
  hasSectionSeparator = false,
  ...rest
}) => {
  const sidebarSectionComponents: ReactNode[] = []
  const otherComponents: ReactNode[] = []

  React.Children.forEach(children, (item: ReactNode) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (item?.props.componentName === 'SideBarSection') {
      sidebarSectionComponents.push(item)
    } else {
      otherComponents.push(item)
    }
  })

  return (
    <Box background={background} direction="column" flex={false} {...rest}>
      {otherComponents}
      <StyledSideBar flex={false} direction="column" hasSectionSeparator={hasSectionSeparator}>
        {sidebarSectionComponents}
      </StyledSideBar>
    </Box>
  )
}

export default SideBar
