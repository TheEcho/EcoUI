import styled from '@emotion/styled'
import { ITheme } from '@/index'

import Box, { BoxProps } from '../Box'

export type StyledHeaderProps = BoxProps

export const StyledHeader = styled(Box)<StyledHeaderProps>`
  border-top-left-radius: ${(props) => props.theme.border.radius.medium};
  border-top-right-radius: ${(props) => props.theme.border.radius.medium};
`
