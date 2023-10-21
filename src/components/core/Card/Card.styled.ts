import { css, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

import { ITheme } from '@/index'
import { Box } from '../Box'

type StyledCardProps = {
  preventDefaultMediaQuery?: boolean
  hideCardStyle?: boolean
}

type StyledCardPropsWithTheme = {
  theme: ITheme
} & StyledCardProps

const StyledCardResponsive = (props: StyledCardPropsWithTheme): SerializedStyles => css`
  @media (${props.theme.layout.media.medium}) {
    border-right: none;
    border-left: none;
  }
`

export const StyledCard = styled(Box)<StyledCardProps>`
  ${(props) => !props.preventDefaultMediaQuery && StyledCardResponsive(props)}
`
