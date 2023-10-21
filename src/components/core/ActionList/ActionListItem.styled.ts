import styled, { CSSObject } from '@emotion/styled'

import { ITheme } from '@/index'

import { Box } from '../../core/Box'

export type TActionListItemProps = {
  selected?: boolean
}

type StyledActionListItemPropsWithTheme = { theme: ITheme } & TActionListItemProps

const getPaddingStyled = ({ theme }: StyledActionListItemPropsWithTheme): CSSObject => {
  const { medium, small } = theme.spacing.padding

  return {
    padding: `${small} ${medium}`,
  }
}

const getHoverStyled = ({ theme }: StyledActionListItemPropsWithTheme): CSSObject => {
  return {
    cursor: 'pointer',
    ':hover': {
      background: theme.color.background,
    },
  }
}

const getSelectedStyle = ({ selected, theme }: StyledActionListItemPropsWithTheme): CSSObject => {
  if (!selected) {
    return {}
  }

  return {
    ':not(:disabled)': {
      background: theme.color.background,
    },
  }
}

export const StyledActionListContent = styled(Box)(({ theme }) => {
  return {
    flexDirection: 'row',
    '& > *': {
      ':not(:last-child)': {
        margin: `0 ${theme.spacing.gap.medium} 0 0`,
      },
    },

    [`@media (${theme.layout.media.small})`]: {
      flexDirection: 'column',
      '& > *': {
        ':not(:last-child)': {
          margin: `0 0 ${theme.spacing.gap.small} 0`,
        },
      },
    },
  }
})

export const StyledActionListItem = styled(Box)<TActionListItemProps>(props => {
  return {
    ...getPaddingStyled(props),
    ...getHoverStyled(props),
    ...getSelectedStyle(props),
  }
})
