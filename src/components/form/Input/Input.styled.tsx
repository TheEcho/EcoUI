import { forwardRef } from 'react'

import { ITheme } from '@/index'
import { css } from '@emotion/react'
import { SerializedStyles } from '@emotion/react'
import styled, { CSSObject } from '@emotion/styled'

import { TColor } from '../../../shared/tokens/color'
import { TTextSize, TTextWeight } from '../../../shared/tokens/text'
import { addAlpha } from '../../../utils/addAlpha'
import { Box, BoxProps } from '../../core/Box'
import { InputProps } from './Input'

export type InputContainerProps = {
  background: TColor
  rounded: boolean
  inputSize: 'small' | 'default'
  maxWidth?: number
  showResetBtn?: boolean
  isInputFocus: boolean
} & Pick<StyledInputProps, 'variant' | 'textColor' | 'disabled'> &
  Pick<InputProps, 'error' | 'css' | 'autoFocus'>

export type StyledInputProps = {
  ref?: React.Ref<HTMLInputElement>
  textColor: 'text' | 'text-lighter' | 'secondary' | 'text-dark'
  textWeight: TTextWeight
  textSize: TTextSize
  variant: 'default' | 'search' | 'no-border' | 'underline'
  disabled: boolean
  ellipsis?: boolean
  inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'
} & Pick<InputProps, 'value' | 'defaultValue'>

type StyledInputContainerPropsWithTheme = {
  theme: ITheme
} & InputContainerProps

const BaseInputContainer = forwardRef<HTMLDivElement>(({ ...rest }, ref) => (
  <Box borderRadius="medium" direction="row" gap="medium" align="center" flex {...rest} ref={ref} />
))
BaseInputContainer.displayName = 'BaseInputContainer'

const StyledInputRounded: SerializedStyles = css`
  border-radius: 10rem;
`

const noBorderInputStyled = (): SerializedStyles => css`
  box-shadow: none;
  padding: 0;
  background-color: transparent;
`

export const inputSizes: {
  [key in InputContainerProps['inputSize']]: { paddingHorizontal: number; paddingVertical: number }
} = {
  small: {
    paddingHorizontal: 0.6,
    paddingVertical: 0.8,
  },
  default: {
    paddingHorizontal: 1.2,
    paddingVertical: 0.8,
  },
}

const getBackgroundColor = (props: StyledInputContainerPropsWithTheme): string => {
  if (props.disabled) {
    return addAlpha(props.theme.color['border-dark'], 0.5)
  } else if (props.isInputFocus) {
    return 'transparent'
  } else if (props.textColor === 'text-lighter') {
    return addAlpha(props.theme.color['secondary-lighter'], 0.5)
  } else if (props.textColor === 'text') {
    return addAlpha(props.theme.color['background-darker'], 0.5)
  }
  return addAlpha(props.theme.color['secondary'], 0.5)
}

const underlineInputStyled = (props: StyledInputContainerPropsWithTheme): SerializedStyles => css`
  background-color: transparent;
  box-shadow: none;
  padding: 0;
  border-radius: 0;
  position: relative;
  overflow: initial;

  &:after {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: -${props.theme.spacing.padding['xsmall']};
    background-color: ${getBackgroundColor(props)};
  }
`

export const InputContainer = styled(BaseInputContainer)<
  InputContainerProps & Omit<BoxProps, 'background'>
>`
  overflow: hidden;
  padding: ${props =>
    `${inputSizes[props.inputSize].paddingVertical}rem ${
      inputSizes[props.inputSize].paddingHorizontal
    }rem`};
  box-shadow: inset 0 0 0
    ${props => `${props.theme.border.size.xsmall} ${props.theme.color.border}`};
  max-width: ${props => (props.maxWidth ? `${props.maxWidth}rem` : 'initial')};
  background-color: ${props =>
    props.disabled ? props.theme.color.background : props.theme.color[props.background]};

  &:hover {
    ${props =>
      props.showResetBtn &&
      `box-shadow: inset 0 0 0 ${props.theme.border.size.xsmall} ${props.theme.color['border-dark']};`}
    cursor: text;
  }

  ${props =>
    props.variant !== 'search' &&
    props.isInputFocus &&
    !props.disabled &&
    `box-shadow: inset 0 0 0 ${props.theme.border.size['small']} ${props.theme.color.secondary};`}

  ${props =>
    props.error &&
    `box-shadow: inset 0 0 0 ${props.theme.border.size['small']} ${props.theme.color.primary};`}

  ${props => props.variant === 'no-border' && noBorderInputStyled()}
  ${props => props.variant === 'underline' && underlineInputStyled(props)}

  ${props => props.disabled && 'cursor: not-allowed;'}

  ${props => props.css}
  ${props => props.rounded && StyledInputRounded}

  @supports (-moz-appearance:none) {
    justify-content: center;
  }
`

const removeSearchInputStyle = (): CSSObject => {
  const selector = `
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration
  `

  return {
    '&[type="search"]': {
      [selector]: {
        WebkitAppearance: 'none',
      },
    },
  }
}

const removeNumberInputStyle = (): CSSObject => {
  return {
    '&[type="number"]': {
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 'none',
      },
      MozAppearance: 'textfield',
    },
  }
}

export const StyledInput = styled('input')<StyledInputProps>(
  ({ theme, textColor, textSize, textWeight, variant, disabled, ellipsis, inputMode }) => {
    const placeholder: CSSObject = {
      fontWeight: +theme.text.weight[textWeight],
    }

    if (textColor === 'text' || textColor === 'text-dark') {
      placeholder.color = theme.color['text-light']
      placeholder.opacity = 0.6
    }

    if (textColor === 'text-lighter') {
      placeholder.color = theme.color['secondary-lighter']
      placeholder.opacity = 0.5
    }

    if (textColor === 'secondary') {
      placeholder.color = theme.color['secondary']
      placeholder.opacity = 0.5
    }

    if (variant === 'underline' && textColor === 'text-lighter') {
      placeholder.color = theme.color['text-lighter']
      placeholder.opacity = 0.5
    }

    if (disabled) {
      placeholder.color =
        textColor === 'text-lighter' ? theme.color['border-light'] : theme.color['text-light']
      placeholder.opacity = 0.6
    }

    return {
      flex: 1,
      outline: 'none',
      border: 'none',
      width: '100%',
      backgroundColor: 'transparent',
      color: theme.color[textColor],
      fontSize: theme.text.size[textSize].size,
      lineHeight: theme.text.size[textSize].height,
      fontWeight: +theme.text.weight[textWeight],
      fontFamily: theme.text.font.default,
      ...(ellipsis && {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }),
      '::placeholder': {
        ...placeholder,
      },
      ':disabled': {
        cursor: 'not-allowed',
      },
      '@supports (-moz-appearance:none)': {
        boxShadow: 'none',
        maxWidth: '-moz-available',
      },
      ...removeSearchInputStyle(),
      ...removeNumberInputStyle(),
      ...((inputMode === 'numeric' || inputMode === 'decimal') && { textAlign: 'right' }),
    }
  },
)

export type StyledBoxProps = {
  textSize: TTextSize
}
export const StyledBox = styled(Box)<StyledBoxProps>(({ theme, textSize }) => {
  return {
    height: theme.text.size[textSize].height,
  }
})
