import { css, SerializedStyles } from '@emotion/react'
import styled, { CSSObject } from '@emotion/styled'

import { ITheme } from '@/index'
import { Box } from '../../core/Box'

export type TActionListSectionProps = {
  sectionIndex: number
  onClick?: () => void
}
type StyledActionListSectionWithTheme = { theme: ITheme } & TActionListSectionProps

const borderStyle = (props: StyledActionListSectionWithTheme): SerializedStyles => css`
  &:not(:last-child) {
    border-bottom: ${props.theme.border.size.xsmall} solid ${props.theme.color.border};
  }

  & > * {
    :first-child {
      border-right: none;
      border-left: none;
      border-top: ${props.sectionIndex === 0 ? 'none' : ''};
    }
  }
`

const getHoverStyled = ({ theme, onClick }: StyledActionListSectionWithTheme): CSSObject => {
  if (onClick) {
    return {
      cursor: 'pointer',
      ':hover': {
        background: theme.color.background,
      },
    }
  } else {
    return {
      cursor: 'inherit',
    }
  }
}
/* 
export const StyledActionListSection = styled(Box)<TActionListSectionProps>`
  ${(props) => borderStyle(props)}
  $
` */

export const StyledActionListSection = styled(Box)<TActionListSectionProps>((props) => {
  return {
    ...borderStyle(props),
    ...getHoverStyled(props),
  }
})
