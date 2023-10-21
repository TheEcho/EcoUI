import { FunctionComponent, ReactNode } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { Icon, Paragraph } from '../../core'
import Box, { BoxProps } from '../Box'
import { Button, ButtonProps } from '../Button'
import { Link, LinkProps } from '../Link'
import { StyledBanner, StyledBannerContent, TStyledBannerProps } from './Banner.styled'
import { BANNER_CONFIG } from './utils'

type TBannerButton = Pick<ButtonProps, 'label' | 'onClick'>
type TBannerLink = Pick<LinkProps, 'label' | 'onClick'>

export type BannerProps = {
  variant?: TStyledBannerProps['variant']
  content?: ReactNode
  title?: string
  onClose?: () => void
  button?: TBannerButton
  link?: TBannerLink
} & BoxProps

export const Banner: FunctionComponent<BannerProps> = ({
  content,
  variant = 'default',
  title,
  onClose,
  button,
  link,
  flex = false,
  ...rest
}) => {
  const bannerConfig = BANNER_CONFIG[variant]

  return (
    <StyledBanner {...rest} flex={flex} variant={variant} align="start">
      <Box flex={false} justify="center">
        <Icon icon={bannerConfig.icon} size="sm-medium" color={bannerConfig.color} />
      </Box>
      <StyledBannerContent direction="column" gap="lg-medium" marginHorizontal="sm-medium">
        <Box direction="column" gap="small">
          {!!title && (
            <Paragraph weight="medium" color={bannerConfig.textColor}>
              {title}
            </Paragraph>
          )}
          {!!content && <Paragraph color={bannerConfig.textColor}>{content}</Paragraph>}
        </Box>
        {(button || link) && (
          <Box direction="row" gap="large" align="center">
            {button && (
              <Button
                {...button}
                buttonSize="tiny"
                variant="outline"
                color={bannerConfig.color}
                textColor={bannerConfig.textColor}
              />
            )}
            {link && <Link weight="medium" {...link} color={bannerConfig.textColor} />}
          </Box>
        )}
      </StyledBannerContent>
      {onClose && (
        <Box flex={false} justify="center" onClick={onClose}>
          <Icon icon={<XMarkIcon />} size="medium" color={bannerConfig.textColor} />
        </Box>
      )}
    </StyledBanner>
  )
}

export default Banner
