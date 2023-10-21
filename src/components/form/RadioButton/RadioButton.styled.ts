import { css, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

import { ITheme } from '@/index'
import Box, { BoxProps } from '../../core/Box'
import { Text } from '../../core/Text'

export type TStyledRadioButtonProps = {
  disabled?: boolean
} & BoxProps

export type StyledRadioButtonProps = {
  variants: 'primary' | 'secondary'
}

type StyledRadioButtonPropsWithTheme = {
  theme: ITheme
} & StyledRadioButtonProps

const radioButtonStyles = (props: StyledRadioButtonPropsWithTheme): SerializedStyles => css`
  :checked,
  :not(:checked) {
    display: none;
  }

  :disabled + label {
    cursor: not-allowed;
  }

  :checked + label:before {
    content: '';
    width: 2rem;
    min-width: 2rem;
    height: 2rem;
    border: 0.1rem solid ${props.theme.color[props.variants]};
    border-radius: 100%;
    background: ${props.theme.color[props.variants]};
    margin-right: ${props.theme.spacing.margin.small};
  }

  :not(:checked) + label:before {
    content: '';
    width: 2rem;
    min-width: 2rem;
    height: 2rem;
    border: 0.1rem solid ${props.theme.color['border-dark']};
    border-radius: 100%;
    background: ${props.theme.color.background};
    margin-right: ${props.theme.spacing.margin.small};
  }

  :checked + label:after,
  :not(:checked) + label:after {
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    background: ${props.theme.color[props.variants]};
    position: absolute;
    left: 0.4rem;
    border-radius: 100%;
    border: 0.3rem solid ${props.theme.color.background};
    transition: all 0.2s ease;
  }
  :not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
  }
  :checked + label:after {
    opacity: 1;
    transform: scale(1);
  }
`

export const StyledRadioButtonLabelText = styled(Text)(() => {
  return {
    flex: 1,
  }
})

export const StyledRadioButtonInput = styled.input<StyledRadioButtonProps>`
  ${(props) => radioButtonStyles(props)}
`

export const StyledRadioButtonLabel = styled('label')(() => {
  return {
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  }
})

export const StyledChildrenBox = styled(Box)`
  margin-left: 2.8rem;
`
