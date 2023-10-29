import { css, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

import { ITheme } from '@/index'

import { Card, CardProps } from '../Card'

type StyledNavGridProps = CardProps

type StyledNavGridPropsWithTheme = {
  theme: ITheme
} & StyledNavGridProps

export const StyledNavGridSmall = (props: StyledNavGridPropsWithTheme): SerializedStyles => css`
  @media (${props.theme.layout.media.small}) {
    flex-direction: column;

    & > * {
      :nth-child(odd) {
        border-right: none;
      }
      :nth-child(odd):nth-last-child(2) {
        border-bottom: ${props.theme.color['border-light']} ${props.theme.border.size.xsmall} solid;
      }
    }
  }
`

export const StyledNavGrid = styled(Card)<StyledNavGridProps>`
  flex-direction: row;
  flex-wrap: wrap;

  ::after {
    content: '';
    flex: auto;
  }
  & > * {
    border-bottom: ${(props) =>
      `${props.theme.color['border-light']} ${props.theme.border.size.xsmall} solid`};
    :nth-child(odd) {
      border-right: ${(props) =>
        `${props.theme.color['border-light']} ${props.theme.border.size.xsmall} solid`};
    }
    :last-of-type {
      border-bottom: none;
    }
    :nth-child(odd):nth-last-child(2) {
      border-bottom: none;
    }
  }

  ${(props) => StyledNavGridSmall(props)}
`
