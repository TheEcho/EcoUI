import alignSelf from './alignSelf'
import border from './border'
import color from './color'
import elevation from './elevation'
import layout from './layout'
import spacing from './spacing'
import svg from './svg'
import text from './text'

export const theme = {
  color,
  spacing,
  text,
  border,
  elevation,
  alignSelf,
  svg,
  layout,
}

export type ITheme = typeof theme

export * from './alignSelf'
export * from './border'
export * from './color'
export * from './elevation'
export * from './layout'
export * from './spacing'
export * from './svg'
export * from './text'
