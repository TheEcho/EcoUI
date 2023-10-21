import React, { FunctionComponent } from 'react'

import { css, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

import { TTextSize, TTextWeight } from '../../../shared/tokens/text'
import { defaultTextStyle } from '../../../utils/textStyles'
import { Box } from '../../core'
import { TColor } from '@/index'
import { WithChildren } from '@/types/WithChildren'

type StyledTextAreaProps = {
  error?: string | boolean
  active?: boolean
  resizable?: boolean
  variant?: 'default' | 'no-border'
  textSize?: TTextSize
  textWeight?: TTextWeight
  resize?: boolean
  height?: number
  disabled?: boolean
  color?: TColor
}

type StyledTextAreaContainerProps = {
  textAreaSize: 'small' | 'default'
  hasChildren?: boolean
}

type BaseTextAreaContainerProps = StyledTextAreaProps & StyledTextAreaContainerProps

const BaseTextAreaContainer: FunctionComponent<StyledTextAreaProps & StyledTextAreaContainerProps> = ({
  hasChildren,
  ...rest
}) => (
  <Box
    borderRadius="medium"
    direction="row"
    gap={hasChildren ? 'medium' : 'none'}
    align="center"
    {...rest}
    flex={false}
  />
)

export const NoBorderTextAreaContainer = (): SerializedStyles => css`
  box-shadow: none;
  padding: 0;
`

export const placeholderSizes: {
  [key in StyledTextAreaContainerProps['textAreaSize']]: {
    paddingHorizontal: number
    paddingVertical: number
  }
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

export const TextAreaContainer = styled(BaseTextAreaContainer)<BaseTextAreaContainerProps & WithChildren>`
  width: 100%;
  padding: ${(props) =>
    `${placeholderSizes[props.textAreaSize].paddingVertical}rem ${
      placeholderSizes[props.textAreaSize].paddingHorizontal
    }rem`};
  background-color: ${(props) => props.theme.color['background-lighter']};
  box-shadow: inset 0 0 0 ${(props) => props.theme.border.size.xsmall}
    ${(props) => props.theme.color.border};

  ${(props) =>
    props.active &&
    `box-shadow: inset 0 0 0 ${props.theme.border.size['small']} ${props.theme.color.secondary};`}
  ${(props) =>
    props.error &&
    `box-shadow: inset 0 0 0 ${props.theme.border.size['small']} ${props.theme.color.primary};`}

    ${(props) => props.variant === 'no-border' && NoBorderTextAreaContainer()};
  height: ${(props) => `${props.height}rem`};
`

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  ${(props) => defaultTextStyle(props)}
  flex: 1;

  outline: none;
  border: none;
  height: 100%;
  background-color: ${(props) => props.theme.color['background-lighter']};
  font-size: ${(props) => props.textSize && props.theme.text.size[props.textSize].size};
  line-height: ${(props) => props.textSize && props.theme.text.size[props.textSize].height};
  font-weight: ${(props) => props.textWeight && props.theme.text.weight[props.textWeight]};
  resize: ${(props) => !props.resizable && 'none'};
  padding: 0;
  cursor: ${(props) => props.disabled && 'not-allowed'};

  ::placeholder {
    font-weight: ${(props) => props.theme.text.weight.regular};
    color: ${(props) => props.theme.color['background-darker']};
  }

  ${(props) =>
    props.resize &&
    `
      &:focus {
        resize: auto;
      }
  `}
`
