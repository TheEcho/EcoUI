import { ReactElement } from 'react'

import styled, { CSSObject } from '@emotion/styled'

import { ITheme } from '@/index'
import Box, { BoxProps } from '../../core/Box'
import { Text } from '../../core/Text'

type TStyledCheckboxProps = {
  disabled?: boolean
  label?: ReactElement | string
  rounded?: boolean
  variant?: 'primary' | 'secondary'
} & BoxProps

type TStyledCheckboxPropsWithTheme = TStyledCheckboxProps & { theme: ITheme }

export const StyledCheckboxLabelText = styled(Text)<{ rounded: boolean }>(({ rounded }) => {
  return {
    flex: 1,
    lineHeight: !!rounded ? '1.6rem' : '2rem',
  }
})

const getBasicCheckbox = ({
  theme,
  label,
  rounded,
}: TStyledCheckboxPropsWithTheme): CSSObject => {
  return {
    content: "''",
    width: rounded ? '1.6rem' : '2rem',
    minWidth: rounded ? '1.6rem' : '2rem',
    height: rounded ? '1.6rem' : '2rem',
    borderRadius: rounded ? theme.border.radius.xlarge : theme.border.radius.medium,
    ...(label && { marginRight: '8px' }),
  }
}

const getCheckboxMark = ({
  theme,
  rounded,
}: TStyledCheckboxPropsWithTheme): CSSObject => {
  return {
    ':checked + label:after, :not(:checked) + label:after': {
      content: "''",
      width: rounded ? '0.8rem' : '1.2rem',
      height: rounded ? '0.4rem' : '0.8rem',
      position: 'absolute',
      top: rounded ? '0.55rem' : '0.4rem',
      left: '0.4rem',
      borderBottom: `${rounded ? '0.2rem' : '0.3rem'} solid ${theme.color.background}`,
      borderLeft: `${rounded ? '0.2rem' : '0.3rem'} solid ${theme.color.background}`,
      transition: 'all 0.2s ease',
    },
  }
}

export const StyledCheckboxInput = styled.input<TStyledCheckboxProps>(
  ({ theme, label, rounded, variant }) => {
    const basicCheckboxStyle = getBasicCheckbox({ theme, label, rounded })

    const isSecondary = variant === 'secondary'

    return {
      ':disabled + label': {
        cursor: 'not-allowed',
      },
      ':checked, :not(:checked)': {
        display: 'none',
      },
      ':checked + label:before': {
        ...basicCheckboxStyle,
        ...(isSecondary
          ? {
              border: `${theme.border.size.xsmall} solid transparent`,
              background: theme.color.secondary,
            }
          : {
              border: `${theme.border.size.xsmall} solid ${theme.color['primary-darker']}`,
              background: theme.color.primary,
            }),
      },

      ':not(:checked) + label:before': {
        ...basicCheckboxStyle,
        border: `${theme.border.size.xsmall} solid ${theme.color['border-dark']}`,
        background: theme.color.background,
      },

      ':not(:checked) + label:after': {
        opacity: 0,
        transform: 'scale(0.4)',
      },

      ':checked + label:after': {
        transform: 'rotate(-45deg) scale(1)',
        opacity: 1,
      },

      ...getCheckboxMark({ theme, rounded }),
    }
  },
)

export const StyledCheckboxLabel = styled.label<TStyledCheckboxProps>(({ disabled, theme }) => {
  return {
    position: 'relative',
    cursor: 'pointer',
    fontSize: '1.5rem',
    lineHeight: '2.4rem',
    display: 'flex',
    alignItems: 'start',
    color: disabled ? theme.color['text-light'] : theme.color['text-dark'],
  }
})

export const OptionalElementContainer = styled(Box)(() => {
  return {
    marginLeft: '2.8rem',
  }
})

export const StyledCheckbox = styled(Box)(() => {
  return {
    minWidth: 'initial',
  }
})
