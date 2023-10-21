import { FunctionComponent } from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'

import { Icon, IconProps } from '../Icon'
import { StyledLoadingIcon } from './LoadingIcon.styled'

type LoadingIconProps = {
  size: IconProps['size']
  color?: IconProps['color']
}

export const LoadingIcon: FunctionComponent<LoadingIconProps> = ({
  size,
  color = 'text-light',
}) => {
  return (
    <StyledLoadingIcon flex={false} justify="center">
      <Icon icon={<ArrowPathIcon />} size={size} color={color} />
    </StyledLoadingIcon>
  )
}
