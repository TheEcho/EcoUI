import { css, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

import { ITheme } from '../../../../shared/tokens'
import { Box } from '../../Box'

export type TStyledSideBarItemProps = {
  active?: boolean
}
type StyledSideBarItemPropsWithTheme = { theme: ITheme } & TStyledSideBarItemProps

const hoverStyle = (props: StyledSideBarItemPropsWithTheme): SerializedStyles => css`
  :hover:not(:disabled) {
    background: ${props.theme.color['background-light']};
    cursor: pointer;
  }
`
export const StyledSideBarItem = styled(Box)<TStyledSideBarItemProps>`
  position: relative;
  margin-left: -${(props) => props.theme.spacing.margin.xsmall} !important;

  ${(props) => hoverStyle(props)}

  ${(props) =>
    props.active &&
    `
    background: ${props.theme.color['background-lighter']};
  `}
`

export const StyledSideBarItemIcon = styled(Box)`
  position: absolute;
  left: -2.4rem;
`
