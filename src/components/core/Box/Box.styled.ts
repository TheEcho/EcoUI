import { css, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

import { TBorderRadiusEnum, TBorderSizeEnum } from '../../../shared/tokens/border'
import { TColor } from '../../../shared/tokens/color'
import { TElevationSizeEnum } from '../../../shared/tokens/elevation'
import { TSpacingSizeEnum } from '../../../shared/tokens/spacing'
import { addAlpha } from '../../../utils/addAlpha'
import { ITheme } from '@/index'

const ALIGN_MAP = {
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch',
}

const JUSTIFY_MAP = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  evenly: 'space-evenly',
  start: 'flex-start',
}

const FLEX_MAP = {
  true: '1 1',
  false: '0 0 auto',
  grow: '1 0 auto',
  shrink: '0 1 auto',
}

const WRAP_MAP = {
  true: 'wrap',
  reverse: 'wrap-reverse',
}

export type TTransitionAnimation = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out'

export type TStyledBoxProps = {
  direction?: 'row' | 'column'
  align?: keyof typeof ALIGN_MAP
  justify?: keyof typeof JUSTIFY_MAP
  gap?: TSpacingSizeEnum

  padding?: TSpacingSizeEnum
  paddingTop?: TSpacingSizeEnum
  paddingRight?: TSpacingSizeEnum
  paddingBottom?: TSpacingSizeEnum
  paddingLeft?: TSpacingSizeEnum

  paddingVertical?: TSpacingSizeEnum
  paddingHorizontal?: TSpacingSizeEnum

  margin?: TSpacingSizeEnum
  marginTop?: TSpacingSizeEnum
  marginRight?: TSpacingSizeEnum
  marginBottom?: TSpacingSizeEnum
  marginLeft?: TSpacingSizeEnum

  marginVertical?: TSpacingSizeEnum
  marginHorizontal?: TSpacingSizeEnum

  borderRadius?: TBorderRadiusEnum
  borderSize?: TBorderSizeEnum
  borderColor?: TColor
  background?: TColor | [TColor, number]
  elevation?: TElevationSizeEnum

  flex?: boolean | 'grow' | 'shrink' | number
  flexWrap?: 'true' | 'reverse'

  width?: number
  height?: number

  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void

  position?: 'relative'
  overflow?: 'auto' | 'hidden'
  transition?:
    | boolean
    | {
        delay?: number
        duration?: number
        property?: string
        animation?: TTransitionAnimation
      }
}

type StyleBoxPropsWithTheme = { theme: ITheme } & TStyledBoxProps

const positionStyle = (props: StyleBoxPropsWithTheme): SerializedStyles => {
  if (!props.position) {
    return css``
  }

  return css`
    position: ${props.position};
  `
}

const overflowStyle = (props: StyleBoxPropsWithTheme): SerializedStyles => {
  if (!props.overflow) {
    return css``
  }

  return css`
    overflow: ${props.overflow};
  `
}

const backgroundStyle = (props: StyleBoxPropsWithTheme): SerializedStyles => {
  if (!props.background) {
    return css``
  }

  if (typeof props.background === 'object') {
    const [color, opacity] = props.background

    return css`
      background: ${addAlpha(props.theme.color[color], opacity / 100)};
    `
  }

  return css`
    background: ${props.theme.color[props.background]};
  `
}

const alignStyle = (props: StyleBoxPropsWithTheme): SerializedStyles => {
  if (!props.align) {
    return css``
  }
  const align = props.align || 'start'
  return css`
    align-items: ${ALIGN_MAP[align]};
  `
}

const justifyStyle = (props: StyleBoxPropsWithTheme): SerializedStyles => {
  if (!props.justify) {
    return css``
  }
  const justify = props.justify || 'start'
  return css`
    justify-content: ${JUSTIFY_MAP[justify]};
  `
}

export const directionStyle = (props: StyleBoxPropsWithTheme): SerializedStyles => {
  if (!props.direction) {
    return css``
  }
  const direction = props.direction || 'column'
  return css`
    flex-direction: ${direction};
  `
}

export const gapStyle = (props: StyleBoxPropsWithTheme): SerializedStyles => {
  if (!props.gap || props.gap === 'none') {
    return css``
  }

  const direction = props.direction || 'column'
  const gapValue = props.theme.spacing.gap[props.gap]
  const horizontalGap = direction === 'row' ? gapValue : '0'
  const verticalGap = direction === 'column' || props.flexWrap === 'true' ? gapValue : '0'
  return css`
    & > * {
      margin: 0 ${horizontalGap} ${verticalGap} 0;
      :last-child {
        margin: 0;
      }
    }
  `
}

export const marginStyle = (props: StyleBoxPropsWithTheme): SerializedStyles => {
  const marginTop = props.marginTop || props.marginVertical || props.margin
  const marginRight = props.marginRight || props.marginHorizontal || props.margin
  const marginBottom = props.marginBottom || props.marginVertical || props.margin
  const marginLeft = props.marginLeft || props.marginHorizontal || props.margin

  if (!marginTop && !marginRight && !marginBottom && !marginLeft) {
    return css``
  }

  const margins = [marginTop, marginRight, marginBottom, marginLeft]
  const marginCss = margins.map((margin) => props.theme.spacing.margin[margin || 'none']).join(' ')
  return css`
    margin: ${marginCss};
  `
}

export const paddingStyle = (props: StyleBoxPropsWithTheme): SerializedStyles => {
  const paddingTop = props.paddingTop || props.paddingVertical || props.padding
  const paddingRight = props.paddingRight || props.paddingHorizontal || props.padding
  const paddingBottom = props.paddingBottom || props.paddingVertical || props.padding
  const paddingLeft = props.paddingLeft || props.paddingHorizontal || props.padding

  if (!paddingTop && !paddingRight && !paddingBottom && !paddingLeft) {
    return css``
  }

  const paddings = [paddingTop, paddingRight, paddingBottom, paddingLeft]
  const paddingCss = paddings
    .map((padding) => props.theme.spacing.padding[padding || 'none'])
    .join(' ')

  return css`
    padding: ${paddingCss};
  `
}

export const borderStyle = (props: StyleBoxPropsWithTheme) => {
  const styles = []
  if (props.borderRadius) {
    styles.push(
      css`
        border-radius: ${props.theme.border.radius[props.borderRadius]};
      `,
    )
  }
  if (props.borderColor && props.borderSize) {
    styles.push(
      css`
        border: ${props.theme.border.size[props.borderSize]} solid
          ${props.theme.color[props.borderColor]};
      `,
    )
  }
  return styles
}

const elevationStyle = (props: StyleBoxPropsWithTheme): SerializedStyles | undefined => {
  if (!props.elevation) {
    return
  }
  return css`
    box-shadow: ${props.theme.elevation[props.elevation]};
  `
}

const sizeStyle = (props: StyleBoxPropsWithTheme) => {
  const styles = []
  if (props.width) {
    styles.push(
      css`
        width: ${props.width}rem;
      `,
    )
  }
  if (props.height) {
    styles.push(
      css`
        height: ${props.height}rem;
      `,
    )
  }
  return styles
}

const maxSizeStyle = (props: any): SerializedStyles | undefined => {
  if (props.maxWidth) {
    return css`
      max-width: ${props.maxWidth}rem;
    `
  }
  if (props.maxHeight) {
    return css`
      max-height: ${props.maxHeight}rem;
    `
  }
}

const flexStyle = (props: StyleBoxPropsWithTheme): SerializedStyles | undefined => {
  if (typeof props.flex === 'boolean') {
    return css`
      flex: ${FLEX_MAP[props.flex ? 'true' : 'false']};
    `
  }
  if (typeof props.flex === 'string') {
    return css`
      flex: ${FLEX_MAP[props.flex]};
    `
  }
  if (typeof props.flex === 'number') {
    return css`
      flex: ${props.flex};
    `
  }
}

const addCursor = (props: StyleBoxPropsWithTheme): SerializedStyles | undefined => {
  if (props.onClick) {
    return css`
      cursor: pointer;
    `
  }
}

const wrapStyle = (props: StyleBoxPropsWithTheme): SerializedStyles | undefined => {
  if (!props.flexWrap) {
    return
  }
  return css`
    flex-wrap: ${WRAP_MAP[props.flexWrap]};
  `
}

const animationStyle = ({ transition }: StyleBoxPropsWithTheme): SerializedStyles | undefined => {
  if (!transition) {
    return
  }

  if (typeof transition === 'boolean') {
    return css`
      transition: 0.4s;
    `
  }

  return css`
    ${transition.delay && `transition-delay: ${transition.delay}s;`}
    transition: ${transition.property} ${transition.duration}s ${transition.animation};
  `
}

export const StyledBox = styled.div<TStyledBoxProps>`
  display: flex;
  min-width: 0;
  ${(props) => directionStyle(props)}
  ${(props) => flexStyle(props)}
  ${(props) => alignStyle(props)}
  ${(props) => justifyStyle(props)}
  ${(props) => gapStyle(props)}
  ${(props) => marginStyle(props)}
  ${(props) => paddingStyle(props)}
  ${(props) => borderStyle(props)}
  ${(props) => backgroundStyle(props)}
  ${(props) => elevationStyle(props)}
  ${(props) => sizeStyle(props)}
  ${(props) => wrapStyle(props)}
  ${(props) => maxSizeStyle(props)}
  ${(props) => addCursor(props)}
  ${(props) => positionStyle(props)}
  ${(props) => overflowStyle(props)}
  ${(props) => animationStyle(props)}
`
