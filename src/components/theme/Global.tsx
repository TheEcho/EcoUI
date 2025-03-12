import { FunctionComponent } from 'react'
import { Global } from '@emotion/react'

import global from '../../shared/global'
import reset from '../../shared/reset'

export const GlobalReset: FunctionComponent = () => (
  <Global styles={reset} />
)

export const GlobalBase: FunctionComponent = () => (
  <Global styles={global} />
)
