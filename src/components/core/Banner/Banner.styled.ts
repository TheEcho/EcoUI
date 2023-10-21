import { css, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

import { ITheme } from '@/index'
import { addAlpha } from '../../../utils/addAlpha'
import { Box } from '../Box'

export type TBannerVariant = 'success' | 'error' | 'warning' | 'information' | 'default'

export type TStyledBannerProps = {
  variant: TBannerVariant
}

type TStyledBannerPropsWithTheme = { theme: ITheme } & TStyledBannerProps

const basicStyle = (props: TStyledBannerPropsWithTheme): SerializedStyles => css`
  padding: ${props.theme.spacing.padding['lg-medium']};
  box-sizing: border-box;
  border-radius: ${props.theme.border.radius.medium};

  @media (${props.theme.layout.media.small}) {
    padding: ${props.theme.spacing.padding['medium']};
    max-width: 100%;
  }
`

const applyVariantSuccess = (props: TStyledBannerPropsWithTheme): SerializedStyles => css`
  border: ${props.theme.border.radius.xsmall} solid ${props.theme.color['success-light']};
  background: ${props.theme.color['success-lighter']};
  border-color: ${props.theme.color['success-light']};
`

const applyVariantError = (props: TStyledBannerPropsWithTheme): SerializedStyles => css`
  border: ${props.theme.border.radius.xsmall} solid ${props.theme.color['critical-light']};
  background: ${addAlpha(props.theme.color['primary'], 0.1)};
`

const applyVariantWarning = (props: TStyledBannerPropsWithTheme): SerializedStyles => css`
  border: ${props.theme.border.radius.xsmall} solid ${props.theme.color['warning-light']};
  background: ${props.theme.color['warning-lighter']};
`

const applyVariantInformation = (props: TStyledBannerPropsWithTheme): SerializedStyles => css`
  border: ${props.theme.border.radius.xsmall} solid ${props.theme.color['border']};
  background: ${addAlpha(props.theme.color['secondary'], 0.1)};
`

const applyVariantDefault = (props: TStyledBannerPropsWithTheme): SerializedStyles => css`
  border: ${props.theme.border.radius.xsmall} solid ${props.theme.color['border']};
  background: ${props.theme.color['background']};
`

const applyVariant = (props: TStyledBannerPropsWithTheme): SerializedStyles => {
  switch (props.variant) {
    case 'success':
      return applyVariantSuccess(props)
    case 'error':
      return applyVariantError(props)
    case 'warning':
      return applyVariantWarning(props)
    case 'information':
      return applyVariantInformation(props)
    case 'default':
      return applyVariantDefault(props)
    default:
      return applyVariantDefault(props)
  }
}

export const StyledBanner = styled(Box)<TStyledBannerProps>`
  ${(props) => basicStyle(props)}
  ${(props) => applyVariant(props)}
`

export const StyledBannerContent = styled(Box)(() => {
  return {
    marginTop: '-0.2rem !important',
  }
})
