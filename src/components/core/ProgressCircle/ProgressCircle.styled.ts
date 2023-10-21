import styled from '@emotion/styled'

import { TColor, ITheme } from '@/index'

type StyledProgressCircleProps = {
  color: TColor
  radius: number
}

export const StyledProgressCircle = styled('svg')<StyledProgressCircleProps>(
  ({ theme, color, radius }) => ({
    width: `${radius * 2}px`,
    height: `${radius * 2}px`,
    stroke: theme.color[color],
    margin: '0 !important',
    padding: '0 !important',
  }),
)

type StyledProgressBackgroundProps = {
  color: TColor
  radius: number
  circumference: number
  thickness: number
}

export const StyledProgressBackground = styled('circle')<StyledProgressBackgroundProps>(
  ({ theme, radius, circumference, color, thickness }) => ({
    r: `${radius - thickness / 2}px`,
    fill: 'transparent',
    transformOrigin: '50% 50%',
    stroke: theme.color[color],
    strokeDasharray: `${circumference} ${circumference}`,
    strokeDashoffset: 0,
    strokeWidth: thickness,
  }),
)

type StyledProgressArcProps = {
  value: number
  radius: number
  circumference: number
  thickness: number
}

export const StyledProgressArc = styled('circle')<StyledProgressArcProps>(
  ({ radius, circumference, value, thickness }) => ({
    r: `${radius - thickness / 2}px`,
    fill: 'transparent',
    transform: 'rotate(-90deg)',
    transformOrigin: '50% 50%',
    strokeDasharray: `${circumference} ${circumference}`,
    strokeDashoffset: circumference - (value / 100) * circumference,
    strokeWidth: thickness,
  }),
)
