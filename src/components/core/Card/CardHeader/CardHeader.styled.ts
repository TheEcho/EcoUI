import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { ITheme } from '@/index'

import { Box } from '../../Box'

type StyledCardHeaderWithTheme = {
  theme: ITheme
}

const headerStyles = (props: StyledCardHeaderWithTheme) => css`
  border-bottom: ${props.theme.border.size.xsmall} solid ${props.theme.color['border-light']};
  border-top-left-radius: ${props.theme.border.radius.medium};
  border-top-right-radius: ${props.theme.border.radius.medium};
`

export const StyledCardHeader = styled(Box)`
  ${(props) => headerStyles(props)}
`
