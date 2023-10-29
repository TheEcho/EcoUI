import { ITheme } from '@/index'
import { css, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

import Box from '../Box'
import { Card, CardProps } from '../Card'

export type TStyledObjectList = {
  displayHeader?: boolean
  displayLoadMore?: boolean
  displayPrefixElement?: boolean
  displayPrefixElements?: boolean
  displaySuffixElements?: boolean
  hideCardStyle?: boolean
} & CardProps

export type StyledObjectListWithTheme = { theme: ITheme } & TStyledObjectList

const hideCardStyle = (props: StyledObjectListWithTheme): SerializedStyles => css`
  background-color: initial;
  box-shadow: none;
  padding: 0;
`

const calculateMargin = (props: StyledObjectListWithTheme) => css`
  & > * {
    :last-of-type {
      margin-bottom: ${props.displayLoadMore && props.theme.spacing.margin.medium};
      margin-top: ${props.displayLoadMore && 0};
    }
  }
`

export const StyledObjectList = styled(Card)<TStyledObjectList>`
  & > * {
    border-bottom: ${props =>
      props.hideCardStyle
        ? `none`
        : `${props.theme.color['border-light']} ${props.theme.border.size.xsmall} solid`};
    :first-of-type {
      ${props =>
        props.displayPrefixElement || props.displayPrefixElements
          ? `border-bottom: ${props.theme.color['border']} ${props.theme.border.size.xsmall} solid;`
          : ''}
      & > * {
        :not(:last-of-type) {
          ${props =>
            props.displayPrefixElements
              ? `border-bottom: ${props.theme.color['border-light']} ${props.theme.border.size.xsmall} solid;`
              : ''}
        }
      }
    }
    :nth-last-child(2) {
      border-bottom: ${props => props.displayLoadMore && 'none'};
    }
    :last-of-type {
      border-bottom: none;
    }
  }

  ${props => props.hideCardStyle && hideCardStyle(props)}
  ${props => calculateMargin(props)}
`

export const StickyHeaderWrapper = styled(Box)`
  position: sticky;
  z-index: 2;
  top: 0;
  font-size: ${props => props.theme.text.size.small.size};
  font-weight: ${props => props.theme.text.weight.bold};
  line-height: ${props => props.theme.text.size.small.height};
  text-transform: uppercase;
  letter-spacing: 0.055rem;
  color: ${props => props.theme.color['text-light']};
`
