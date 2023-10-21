import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { ITheme } from '../../../../shared/tokens'
import { TColor } from '../../../../shared/tokens/color'

export type StyledUnorderedListProps = {
  /**
   * Color of the list's bullets
   */
  bulletColor: TColor
}
type StyledUnorderedListPropsWithTheme = { theme: ITheme } & StyledUnorderedListProps

const listStyle = (props: StyledUnorderedListPropsWithTheme) => css`
  li::before {
    content: '\002022';
    color: ${props.theme.color[props.bulletColor]};
    font-weight: ${props.theme.text.weight.bold};
    display: inline-block;
    width: 1rem;
  }
`

export const StyledUnorderedList = styled.ul<StyledUnorderedListProps>`
  ${props => listStyle(props)}
`
