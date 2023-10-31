import styled, { CSSObject } from '@emotion/styled'

import { ITheme } from '@/index'
import { TColor } from '../../../shared/tokens/color'
import { TSVGSizeEnum } from '../../../shared/tokens/svg'
import Box, { BoxProps } from '../Box'

export type TIconStyledProps = BoxProps
export const StyledIcon = styled(Box)<TIconStyledProps>``

export type TStyledSvgIconProps = {
  size?: TSVGSizeEnum
  color?: TColor
  rotate?: number
  spinning?: boolean
}

type StyledSvgIconPropsWithTheme = {
  theme: ITheme
} & TStyledSvgIconProps

const svgColorStyles = (props: StyledSvgIconPropsWithTheme): CSSObject => {
  return {
    svg: {
      '& > *': {
        ...(props.color && {
          stroke: props.theme.color[props.color],
        }),
      },
    },
  }
}

const svgSizeStyles = (props: StyledSvgIconPropsWithTheme): CSSObject => {
  return {
    '& > svg': {
      ...(props.size && {
        width: props.theme.svg.sizes[props.size],
        height: props.theme.svg.sizes[props.size],
      }),
    },
  }
}

const rotateIcon = (props: StyledSvgIconPropsWithTheme): CSSObject => {
  if (!props.rotate) {
    return {}
  }

  return {
    transform: `rotate(${props.rotate}deg)`,
    transition: 'transform 0.3s',
  }
}

const spinIcon = (props: StyledSvgIconPropsWithTheme): CSSObject => {
  if (!props.spinning) {
    return {}
  }

  return {
    '@keyframes rotating': {
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    },
    animation: 'rotating 2s linear infinite',
  }
}

export const StyledIconContainer = styled.span<TStyledSvgIconProps>((props) => {
  return {
    display: 'flex',
    alignItems: 'center',
    ...svgSizeStyles(props),
    ...svgColorStyles(props),
    ...rotateIcon(props),
    ...spinIcon(props),
  }
})
