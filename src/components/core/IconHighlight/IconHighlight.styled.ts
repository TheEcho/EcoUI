import { ITheme } from '@/index'
import { css, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

import { Box, BoxProps } from '../Box'

export type TIconHighlightSize =
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'sm-large'
  | 'tiny'

export type StyledIconHighlightProps = {
  rounded?: 'none' | 'normal' | 'full'
  size?: TIconHighlightSize
  width?: number
  height?: number
} & BoxProps

type StyledIconHighlightPropsWithTheme = {
  theme: ITheme
} & StyledIconHighlightProps

const getIconHighlightSize = (props: StyledIconHighlightPropsWithTheme): SerializedStyles => css`
  ${props.size === 'large' &&
  `
    height: 8rem;
    width: 8rem;
    `}

  ${props.size === 'sm-large' &&
  `
    height: 6rem;
    width: 6rem;
    `}

  ${props.size === 'medium' &&
  `
    height: 4rem;
    width: 4rem;
  `}
  ${props.size === 'small' &&
  `
    height: 3.2rem;
    width: 3.2rem;
  `}
  ${props.size === 'xsmall' &&
  `
    height: 2.4rem;
    width: 2.4rem;
  `}
  ${props.size === 'xxsmall' &&
  `
    height: 2rem;
    width: 2rem;
  `}
  ${props.size === 'tiny' &&
  `
    height: 1.4rem;
    width: 1.4rem;
  `}
  ${props.width !== undefined &&
  `
    width: ${props.width}rem;
  `}
  ${props.height !== undefined &&
  `
    height: ${props.height}rem;
  `}
`

const getIconHighlightRounded = (props: StyledIconHighlightPropsWithTheme): SerializedStyles =>
  css`
    ${props.rounded === 'none' &&
    `
        border-radius: none;
      `}
    ${props.rounded === 'normal' &&
    `
      border-radius: ${props.theme.border.radius.medium};
    `}
    ${props.rounded === 'full' &&
    `
      border-radius: 50%;
    `}
  `

export const StyledIconHighlight = styled(Box)<StyledIconHighlightProps>`
  ${props => getIconHighlightSize(props)}
  ${props => getIconHighlightRounded(props)}
`
