import { css, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

import { ITheme } from '@/index'

import { decorationStyle } from '../../../utils'
import { Text, TextProps } from '../Text'
import { PropsWithChildren } from 'react'

export type StyledLinkPropsWithTheme = { theme: ITheme } & StyledLinkProps

export type StyledLinkProps = PropsWithChildren<{
  resetCss?: boolean
}> & TextProps

export const StyledLinkResetCss = (props: StyledLinkProps): SerializedStyles => css`
  line-height: 0;
`

export const handleHover = (props: StyledLinkPropsWithTheme): SerializedStyles => css`
  &:hover {
    transition: color 0.2s ease-out;
    color: ${props.color === 'primary' && props.theme.color['primary-darker']};
    color: ${props.color === 'primary-dark' && props.theme.color['primary-darker']};

    color: ${props.color === 'secondary' && props.theme.color['secondary-dark']};
    color: ${props.color === 'secondary-dark' && props.theme.color['secondary-darker']};
  }
`

export const StyledLink = styled(Text)<StyledLinkProps>`
  text-decoration: none;
  cursor: pointer;

  ${(props) => props.resetCss && StyledLinkResetCss(props)}

  ${(props) => handleHover(props)}
  ${(props) => decorationStyle(props)}
`
