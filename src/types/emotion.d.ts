import '@emotion/react'

import { ITheme } from '@/index'

type FullTheme = ITheme & { new: ITheme }

declare module '@emotion/react' {
  // eslint-disable-next-line
  export interface Theme extends FullTheme {}
}