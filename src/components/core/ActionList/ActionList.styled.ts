import { css, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

import { ITheme, Card } from '@/index'

export type TActionListProps = {
  variants?: 'with-input'
}

type StyledActionListProps = {
  theme: ITheme
} & TActionListProps

const StyledActionListMedium = (props: StyledActionListProps) => css`
  @media (${props.theme.layout.media.medium}) {
    border-top: none;
    border-bottom: none;
  }
`

const paddingStyle = (props: StyledActionListProps): SerializedStyles => css`
  padding-top: ${props.theme.spacing.padding.xsmall};
  padding-bottom: ${props.theme.spacing.padding.xsmall};
`

const withInputStyle = (props: StyledActionListProps): SerializedStyles => css`
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border: ${props.theme.border.size.xsmall} solid ${props.theme.color.border};
  box-shadow: none;

  @media (${props.theme.layout.media.medium}) {
    box-shadow: none;
  }
`

export const StyledActionList = styled(Card)<TActionListProps>`
  ${props => paddingStyle(props)}
  ${props => props.variants === 'with-input' && withInputStyle(props)}
  ${props => StyledActionListMedium(props)}
`
