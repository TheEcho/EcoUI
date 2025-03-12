import { forwardRef, PropsWithChildren } from 'react'

import { StyledBox, TStyledBoxProps, TTransitionAnimation } from './Box.styled'

export type BoxProps = PropsWithChildren<{
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
  overflow?: TStyledBoxProps['overflow']
  /**
   * Padding inside Box
   */
  padding?: TStyledBoxProps['padding']
  paddingTop?: TStyledBoxProps['paddingTop']
  paddingRight?: TStyledBoxProps['paddingRight']
  paddingBottom?: TStyledBoxProps['paddingBottom']
  paddingLeft?: TStyledBoxProps['paddingLeft']

  paddingVertical?: TStyledBoxProps['paddingVertical']
  paddingHorizontal?: TStyledBoxProps['paddingHorizontal']
  /**
   * Margin inside Box
   */
  margin?: TStyledBoxProps['margin']
  marginTop?: TStyledBoxProps['marginTop']
  marginRight?: TStyledBoxProps['marginRight']
  marginBottom?: TStyledBoxProps['marginBottom']
  marginLeft?: TStyledBoxProps['marginLeft']
  /*
   *
   */
  marginVertical?: TStyledBoxProps['marginVertical']
  marginHorizontal?: TStyledBoxProps['marginHorizontal']
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
  /**
   * Click event (not yet optimized) //TODO: use memoization
   */
  onClick?: TStyledBoxProps['onClick']
  /*
   *
   */
  onMouseEnter?: () => void
  /*
   *
   */
  onMouseLeave?: () => void
  /**
   * Allows to change the HTML tag element of the component
   */
  as?: React.ElementType<any>
  /*
   *
   */
  maxWidth?: number
  maxHeight?: number
  /*
   *
   */
  position?: TStyledBoxProps['position']
  transition?:
    | boolean
    | { delay?: number; duration?: number; property?: string; animation?: TTransitionAnimation }

  className?: string
  id?: string
}>

/**
 * Box is a flex container component
 */
export const Box = forwardRef<HTMLDivElement, BoxProps>(({ flex = true, ...rest }, ref) => {
  return <StyledBox ref={ref} {...rest} flex={flex} />
})

Box.displayName = 'Box'

export default Box
