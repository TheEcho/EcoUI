import React, { FunctionComponent } from 'react'

import { StyledIconHighlight, StyledIconHighlightProps } from './IconHighlight.styled'
import { IconProps } from '../Icon/Icon'

type IconHighlightProps = {
  icon: IconProps['icon']
} & StyledIconHighlightProps

export const IconHighlight: FunctionComponent<IconHighlightProps> = ({
  icon,
  background = 'background',
  rounded = 'normal',
  size = 'medium',
  ...props
}) => {
  return (
    <StyledIconHighlight
      flex={false}
      align="center"
      justify="center"
      background={background}
      rounded={rounded}
      size={size}
      {...props}
    >
      {icon}
    </StyledIconHighlight>
  )
}

export default IconHighlight
