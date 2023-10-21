import { FunctionComponent } from 'react'

import { TSVGSizeEnum } from '../../../shared/tokens/svg'
import { IconProps } from '../Icon'
import { StyledContainer, StyledIcon } from './CircleIcon.styled'

type CircleIconProps = {
  icon: IconProps['icon']
  size?: TSVGSizeEnum
  color?: IconProps['color']
  iconColor?: IconProps['color']
}

const SIZE_TO_WIDTH: Record<TSVGSizeEnum, number> = {
  atomic: 0.8,
  tiny: 1.2,
  xxsmall: 1.3,
  xsmall: 1.4,
  small: 1.6,
  'sm-medium': 1.8,
  medium: 2,
  large: 2.4,
  xlarge: 2.8,
  xxlarge: 3.2,
  xxxlarge: 4,
  huge: 4.8,
}

export const CircleIcon: FunctionComponent<CircleIconProps> = ({
  icon,
  size = 'medium',
  color = 'secondary',
  iconColor = 'text-lighter',
  ...rest
}) => {
  const width = SIZE_TO_WIDTH[size]
  const iconWidth = width / 2
  return (
    <StyledContainer
      align="center"
      justify="center"
      background={color}
      flex={false}
      width={width}
      height={width}
      {...rest}
    >
      <StyledIcon iconWidth={iconWidth} icon={icon} color={iconColor} />
    </StyledContainer>
  )
}
