import { TColor } from '../../../shared/tokens/color'
import { TBannerVariant } from './Banner.styled'
import { CheckCircleIcon, ExclamationTriangleIcon, ExclamationCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import { IconProps } from '../Icon'

type TBannerConfig = {
  icon: IconProps['icon']
  color: TColor
  textColor: TColor
}

export const BANNER_CONFIG: Record<TBannerVariant, TBannerConfig> = {
  success: {
    icon: <CheckCircleIcon />,
    color: 'success',
    textColor: 'success-ink',
  },
  error: {
    icon: <ExclamationTriangleIcon />,
    color: 'critical',
    textColor: 'critical-ink',
  },
  warning: {
    icon: <ExclamationCircleIcon />,
    color: 'warning',
    textColor: 'warning-ink',
  },
  information: {
    icon: <InformationCircleIcon />,
    color: 'secondary',
    textColor: 'secondary-darker',
  },
  default: {
    icon: <InformationCircleIcon />,
    color: 'text-light',
    textColor: 'text-dark',
  },
}
