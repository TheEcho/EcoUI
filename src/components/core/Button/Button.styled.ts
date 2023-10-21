import isPropValid from '@emotion/is-prop-valid'
import { css, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

import { ITheme } from '@/index'

import { TColor } from '../../../shared/tokens/color'
import { TTextSize, TTextWeight } from '../../../shared/tokens/text'
import { addAlpha } from '../../../utils/addAlpha'
import { defaultTextStyle, TextStyleType } from '../../../utils/textStyles'
import { TStyledSvgIconProps } from './../Icon/Icon.styled'

export type TButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text' | 'outline'
type TButtonSize = 'tiny' | 'small' | 'regular' | 'large' | 'larger'
type TColorVariant = 'primary' | 'secondary'

export type StyledButtonProps = TextStyleType & {
  variant: TButtonVariant
  buttonSize: TButtonSize
  colorVariant: TColorVariant
  color?: TColor
  textColor?: TColor
  borderColor?: TColor
  cssProp?: SerializedStyles
  disabled?: boolean
  icon?: boolean
  rounded?: boolean
  iconOnly?: boolean
  loading?: boolean
  reverse?: boolean
  fullWidth?: boolean
}
type StyledButtonPropsWithTheme = { theme: ITheme } & StyledButtonProps

const basicStyle = (props: StyledButtonPropsWithTheme): SerializedStyles => css`
  cursor: pointer;
  position: relative;

  ${props.disabled && `cursor: not-allowed;`}
  ${props.loading && `position: relative;`}
  ${props.fullWidth && `width: 100%;`}

  border-radius: ${props.rounded ? '200px' : props.theme.border.radius.small};

  &:focus {
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      border-radius: ${props.rounded ? '200px' : props.theme.border.radius.small};
      box-shadow: 0 0 0 ${props.theme.border.size.small}
        ${!!props.borderColor
          ? props.borderColor
          : props.colorVariant === 'secondary'
          ? props.theme.color.primary
          : props.theme.color.secondary};
    }
  }

  &:active:focus {
    &:after {
      content: none;
    }
  }
`

const textVariantConfig: {
  [key in TColorVariant]: { regularColor: TColor; darkColor: TColor; darkerColor: TColor }
} = {
  primary: {
    regularColor: 'primary',
    darkColor: 'primary-dark',
    darkerColor: 'primary-darker',
  },
  secondary: {
    regularColor: 'secondary',
    darkColor: 'secondary-dark',
    darkerColor: 'secondary-darker',
  },
}

const variantSizeParams: {
  [key in TButtonSize]: {
    normal: string
    icon: string
    reverse?: string
    textSize: TTextSize
    textWeight: TTextWeight
  }
} = {
  tiny: {
    normal: '0.4rem 0.8rem',
    icon: '0.4rem 0.8rem',
    textSize: 'small',
    textWeight: 'medium',
  },
  small: {
    normal: '0.6rem 0.8rem',
    icon: '0.6rem 0.8rem',
    textSize: 'regular',
    textWeight: 'medium',
  },
  regular: {
    normal: '0.8rem 2.4rem',
    icon: '0.8rem 2.4rem 0.8rem 1.2rem',
    reverse: '0.8rem 1.2rem 0.8rem 2.4rem',
    textSize: 'regular',
    textWeight: 'medium',
  },
  large: {
    normal: '1.2rem 3.2rem',
    icon: '1.2rem 3.2rem',
    textSize: 'large',
    textWeight: 'medium',
  },
  larger: {
    normal: '1.8rem 4.8rem',
    icon: '1.8rem 4.8rem',
    textSize: 'large',
    textWeight: 'medium',
  },
}
const applyVariantSize = (props: StyledButtonPropsWithTheme): SerializedStyles => {
  let padding

  if (props.iconOnly) {
    padding = '0.6rem 0.8rem'
  } else {
    if (props.icon) {
      if (props.buttonSize === 'regular' && props.reverse) {
        padding = variantSizeParams[props.buttonSize].reverse
      } else {
        padding = variantSizeParams[props.buttonSize].icon
      }
    } else {
      padding = variantSizeParams[props.buttonSize].normal
    }
  }

  return css`
    padding: ${padding};
    font-size: ${props.theme.text.size[variantSizeParams[props.buttonSize].textSize].size};
    line-height: ${props.theme.text.size[variantSizeParams[props.buttonSize].textSize].height};
    font-weight: ${props.theme.text.weight[variantSizeParams[props.buttonSize].textWeight]};
  `
}

const applyVariantPrimary = (props: StyledButtonPropsWithTheme): SerializedStyles => css`
  background: ${props.theme.color[textVariantConfig[props.colorVariant].regularColor]};
  border: ${props.theme.color[textVariantConfig[props.colorVariant].darkColor]} solid 0.1rem;
  box-shadow: ${props.theme.elevation.xsmall};
  color: white;
  font-weight: ${props.theme.text.weight.medium};

  :hover:not(:disabled) {
    background: ${props.theme.color[textVariantConfig[props.colorVariant].darkColor]};
  }
  :active:not(:disabled) {
    background: ${props.theme.color[textVariantConfig[props.colorVariant].darkerColor]};
  }

  ${props.disabled &&
  `
  background: ${props.theme.color['border']};
  border: ${props.theme.color['border-dark']} solid 0.1rem;
  box-shadow: unset;
  opacity: 0.4;
  `}
`

const applyVariantSecondary = (props: StyledButtonPropsWithTheme): SerializedStyles => css`
  background: transparent linear-gradient(180deg, #fafafa 0%, #eff2f9 100%) 0% 0% no-repeat
    padding-box;
  border: 0.1rem solid ${props.theme.color.border};
  box-shadow: ${props.theme.elevation.xsmall};
  color: ${props.colorVariant === 'secondary'
    ? props.theme.color[props.colorVariant]
    : props.theme.color.text};

  :hover:not(:disabled) {
    background: #eff2f9 0% 0% no-repeat padding-box;
  }
  :active:not(:disabled) {
    background: transparent linear-gradient(180deg, #e1e5ef 0%, #eff2f9 14%, #eff2f9 100%) 0% 0%
      no-repeat padding-box;
    box-shadow: 0;
  }
  ${props.disabled &&
  `
    background: ${props.theme.color['background-dark']};
    border: ${props.theme.color['border']} solid 0.1rem;
    box-shadow: unset;
    opacity: 0.4;
  `}
`

const applyVariantOutline = (props: StyledButtonPropsWithTheme): SerializedStyles => css`
  background: transparent;
  border: 0.1rem solid ${props.theme.color[props.color ?? props.colorVariant]};
  color: ${props.theme.color[props.textColor ?? props.colorVariant]};

  :hover:not(:disabled) {
    background: ${addAlpha(props.theme.color[props.textColor ?? props.colorVariant], 0.05)};
  }
  :active:not(:disabled) {
    background: ${addAlpha(props.theme.color[props.textColor ?? props.colorVariant], 0.1)};
  }
  ${props.disabled &&
  `background: white;
    opacity: 0.4;`}
`

const applyVariantGhost = (props: StyledButtonPropsWithTheme): SerializedStyles => css`
  background: white;
  border: 0.1rem solid ${props.theme.color['border-light']};
  color: ${props.theme.color['text-light']};

  :hover:not(:disabled) {
    color: ${props.theme.color['text']};
    border: 0.1rem solid ${props.theme.color.border};
  }
  :active:not(:disabled) {
    background: ${props.theme.color['background-light']};
    border: 0.1rem solid ${props.theme.color.border};
  }
  ${props.disabled && `opacity: 0.4;`}
`

const applyVariantText = (props: StyledButtonPropsWithTheme): SerializedStyles => css`
  border: 0;
  color: ${props.theme.color[props.textColor ?? props.colorVariant]};
  font-weight: ${props.theme.text.weight.medium};
  background: transparent;

  :hover:not(:disabled) {
    background: ${addAlpha(props.theme.color[props.textColor || 'text-dark'], 0.05)};
    color: ${props.theme.color[props.textColor ?? textVariantConfig[props.colorVariant].darkColor]};
  }
  :active:not(:disabled) {
    background: ${addAlpha(props.theme.color[props.textColor || 'text-dark'], 0.1)};
    color: ${props.theme.color[
      props.textColor ?? textVariantConfig[props.colorVariant].darkerColor
    ]};
  }
  ${props.disabled && `opacity: 0.4;`}
`

const applyVariant = (props: StyledButtonPropsWithTheme): SerializedStyles => {
  switch (props.variant) {
    case 'primary':
      return applyVariantPrimary(props)
    case 'secondary':
      return applyVariantSecondary(props)
    case 'outline':
      return applyVariantOutline(props)
    case 'ghost':
      return applyVariantGhost(props)
    case 'text':
      return applyVariantText(props)
    default:
      return applyVariantPrimary(props)
  }
}

// To avoid console warning about boolean passed in DOM, see https://emotion.sh/docs/styled#customizing-prop-forwarding
const shouldNotForwardLoadingProp = (prop: string) => isPropValid(prop) && prop !== 'loading'

// Retain the container space when spinner is shown
export const ContentsContainer = styled('div', {
  shouldForwardProp: shouldNotForwardLoadingProp,
})<{
  loading?: boolean
  width?: number
}>`
  ${props => props.loading && 'visibility: hidden;'}
  ${props => props.width && `width: ${props.width}rem;`}
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

// Relative to the parent container & the icon size, position the loader
export const LoaderContainer = styled('div')<{ size: TStyledSvgIconProps['size'] }>`
  position: absolute;
  top: calc(50% - ${props => props.theme.svg.sizes[props.size || 'small']} / 2);
  left: calc(50% - ${props => props.theme.svg.sizes[props.size || 'small']} / 2);
`

export const StyledButton = styled('button', {
  shouldForwardProp: shouldNotForwardLoadingProp,
})<StyledButtonProps>`
  ${props => basicStyle(props)};
  ${props => defaultTextStyle(props)};
  ${props => applyVariant(props)};
  ${props => applyVariantSize(props)};
  ${props => props.cssProp}
`
