import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Box } from '../Box'

export const infiniteRotateAnimation = css`
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`

export const StyledLoadingIcon = styled(Box)`
  ${infiniteRotateAnimation}

  & > * {
    svg {
      animation: rotating 2s linear infinite;
    }
  }
`
