import '@emotion/react'

import { ITheme, ITheme as INewTheme } from '@/index'

type FullTheme = ITheme & { new: INewTheme }

declare module '@emotion/react' {
  // eslint-disable-next-line
  export interface Theme extends FullTheme {}
}