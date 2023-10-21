import { FunctionComponent } from 'react'

import { TColor } from '../../../shared/tokens/color'
import { TSVGSizeEnum } from '../../../shared/tokens/svg'
import {
  StyledProgressArc,
  StyledProgressBackground,
  StyledProgressCircle,
} from './ProgressCircle.styled'

type ProgressCircleProps = {
  value: number
  thickness?: number
  size?: TSVGSizeEnum
  backgroundColor?: TColor
  color?: TColor
}

const SizeToSvgRadius: Record<TSVGSizeEnum, number> = {
  atomic: 0.7,
  tiny: 1,
  xxsmall: 1.1,
  xsmall: 1.2,
  small: 1.4,
  'sm-medium': 1.6,
  medium: 2,
  large: 2.4,
  xlarge: 2.8,
  xxlarge: 3.2,
  xxxlarge: 4,
  huge: 4.8,
}

/**
 * Display a % value (from 0 to 100) as progress circle
 */
export const ProgressCircle: FunctionComponent<ProgressCircleProps> = ({
  value,
  thickness = 2,
  size = 'medium',
  backgroundColor = 'border-light',
  color = 'icon-green',
}) => {
  const radiusToPx = (SizeToSvgRadius[size] / 2) * 10
  const circumference = (radiusToPx - thickness / 2) * 2 * Math.PI

  return (
    <StyledProgressCircle radius={radiusToPx} color={color}>
      <StyledProgressBackground
        radius={radiusToPx}
        circumference={circumference}
        thickness={thickness}
        color={backgroundColor}
        cx={radiusToPx}
        cy={radiusToPx}
      />
      <StyledProgressArc
        value={value}
        radius={radiusToPx}
        circumference={circumference}
        thickness={thickness}
        cx={radiusToPx}
        cy={radiusToPx}
      />
    </StyledProgressCircle>
  )
}
