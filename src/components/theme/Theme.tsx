import { ThemeProvider } from '@emotion/react'
import React, { FunctionComponent, PropsWithChildren } from 'react'

import { ITheme, theme as defaultTheme } from '@/index'

export type ThemeProps = PropsWithChildren<{
  theme?: ITheme
}>

export const Theme: FunctionComponent<ThemeProps> = ({ children, theme = defaultTheme }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
