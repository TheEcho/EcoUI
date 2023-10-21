import styled, { CSSObject } from '@emotion/styled'

import { ITheme } from '@/index'

import Box, { BoxProps } from '../Box'

export type StyledNavGridItemPropsWithTheme = {
  theme: ITheme
} & StyledNavGridItemProps

export type StyledNavGridItemProps = {
  href?: string
  disabled?: boolean
} & BoxProps

export const StyledNavGridItemSmall = ({ theme }: StyledNavGridItemPropsWithTheme): CSSObject => {
  const smallMedia = `@media (${theme.layout.media.small})`

  return {
    [smallMedia]: {
      padding: theme.spacing.padding.large,
      maxWidth: 'inherit',
      borderRight: 'none',
      borderLeft: 'none',
      flex: '1',
    },
  }
}

export const StyledNavGridItemDisabled = ({
  disabled,
}: StyledNavGridItemPropsWithTheme): CSSObject => {
  if (!disabled) {
    return {}
  }

  return {
    '&:hover': {
      cursor: 'not-allowed',
    },
    '& > *': {
      opacity: '0.4',
    },
  }
}

export const StyledNavGridItem = styled(Box)<StyledNavGridItemProps>((props) => {
  const { theme, onClick, href } = props

  const hover =
    onClick || href
      ? {
          cursor: 'pointer',
          backgroundColor: theme.color['background-dark'],
        }
      : {}

  return {
    flex: '50%',
    maxWidth: '50%',
    borderColor: theme.color['border-light'],
    '&:hover': {
      ...hover,
    },
    ...StyledNavGridItemDisabled(props),
    ...StyledNavGridItemSmall(props),
  }
})
