import React, { FunctionComponent } from 'react'

import { css, Global } from '@emotion/react'

import global from '../../shared/global'
import reset from '../../shared/reset'

export const GlobalReset: FunctionComponent = () => (
  <Global
    styles={css`
      ${reset}
    `}
  />
)

export const GlobalBase: FunctionComponent = () => (
  <Global
    styles={css`
      ${global}
    `}
  />
)
