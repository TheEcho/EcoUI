import { css, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

import { ITheme, TColor } from '@/index'

import { Box } from '../Box'

type SeparatorTypeWithTheme = {
  theme: ITheme
} & SeparatorType

type SeparatorType = {
  variant?: 'regular' | 'empty' | 'line'
  color: TColor
}

export const StyledSeparatorRegular = (props: SeparatorTypeWithTheme): SerializedStyles => css`
  &::before,
  &::after {
    content: '';
    width: 100%;
    background-color: ${props.theme.color[props.color]};
    height: ${props.theme.border.size.xsmall};
    flex: 1;
  }
`

export const StyledSeparator = styled(Box)<SeparatorType>`
  text-align: center;

  ${(props) =>
    (props.variant === 'regular' || props.variant === 'line') && StyledSeparatorRegular(props)}
`
