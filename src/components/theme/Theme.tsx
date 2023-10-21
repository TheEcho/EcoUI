import { ThemeProvider } from '@emotion/react'
import React, { FunctionComponent } from 'react'

import { ITheme, theme as defaultTheme } from '@/index'
import { WithChildren } from '@/types/WithChildren'

type Props = {
  theme?: ITheme
}

export const Theme: FunctionComponent<Props & WithChildren> = ({ children, theme = defaultTheme }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
