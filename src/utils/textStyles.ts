import { css, SerializedStyles } from '@emotion/react'

import { ITheme } from '../shared/tokens'
import { TColor } from '../shared/tokens/color'
import { TTextDecoration, TTextFont, TTextSize, TTextWeight } from '../shared/tokens/text'
import { CSSObject } from '@emotion/react'


type SizeType = {
  size?: TTextSize
}
type WeightType = {
  weight?: TTextWeight
}
type FontType = {
  font?: TTextFont
}
type ColorType = {
  color?: TColor
}
type DecorationType = {
  decoration?: TTextDecoration
}
type SelectionType = {
  notSelectable?: boolean
}
type AlignType = {
  textAlign?: CSSObject['textAlign']
}

export type TextStyleType = SizeType &
  WeightType &
  FontType &
  ColorType &
  DecorationType &
  SelectionType & AlignType

export const decorationStyle = (
  props: { theme: ITheme } & DecorationType,
): SerializedStyles | null => {
  const decoration = props.decoration

  if (!decoration) {
    return null
  }

  return css`
    text-decoration: ${props.decoration};
  `
}

export const sizeStyle = (
  props: { theme: ITheme } & SizeType,
  defaultValue?: TTextSize,
): SerializedStyles | null => {
  const size = props.size || defaultValue
  if (!size) {
    return null
  }
  const data = props.theme.text.size[size]
  if (!data) {
    return null
  }

  return css`
    font-size: ${data.size};
    line-height: ${data.height};
  `
}

export const weightStyle = (
  props: { theme: ITheme } & WeightType,
  defaultValue?: TTextWeight,
): SerializedStyles | null => {
  const weight = props.weight || defaultValue
  if (!weight) {
    return null
  }
  return css`
    font-weight: ${props.theme.text.weight[weight]};
  `
}

export const fontStyle = (
  props: { theme: ITheme } & FontType,
  defaultValue?: TTextFont,
): SerializedStyles | null => {
  const font = props.font || defaultValue
  if (!font) {
    return null
  }
  return css`
    font-family: ${props.theme.text.font[font]};
  `
}

export const colorStyle = (
  props: { theme: ITheme } & ColorType,
  defaultValue?: TColor,
): SerializedStyles | null => {
  const color = props.color || defaultValue
  if (!color) {
    return null
  }
  return css`
    color: ${props.theme.color[color]};
  `
}

export const alignStyle = (
  props: { theme: ITheme } & AlignType,
  defaultValue?: AlignType,
): SerializedStyles | null => {
  const textAlign = props.textAlign || defaultValue
  if (!textAlign) {
    return null
  }
  return css`
    text-align: ${textAlign};
  `
}

export const selectionStyle = (
  props: { theme: ITheme } & SelectionType,
): SerializedStyles | null => {
  const isnotSelectable = props.notSelectable || false
  if (isnotSelectable) {
    return css`
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    `
  }
  return null
}

export const defaultTextStyle = (props: { theme: ITheme } & TextStyleType): SerializedStyles => css`
  ${sizeStyle(props, 'regular')}
  ${weightStyle(props, 'regular')}
  ${fontStyle(props, 'default')}
  ${colorStyle(props, 'text')}
  ${decorationStyle(props)}
  ${selectionStyle(props)}
  ${alignStyle(props)}
`

export const textStyle = (props: { theme: ITheme } & TextStyleType): SerializedStyles => css`
  ${sizeStyle(props)}
  ${weightStyle(props)}
  ${fontStyle(props)}
  ${colorStyle(props)}
  ${selectionStyle(props)}
`
