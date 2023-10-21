import { css } from '@emotion/react'
import styled from '@emotion/styled'

import Box, { BoxProps } from '../Box'

export type StyledLoadMoreProps = {
  buttonIsLink?: boolean
} & BoxProps

export const fullWidthButton = () => css`
  & > * {
    width: 100%;
  }
`

export const StyledLoadMore = styled(Box)<StyledLoadMoreProps>`
  ${(props) => !props.buttonIsLink && fullWidthButton()}
`
