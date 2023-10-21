import styled from '@emotion/styled'

import { defaultTextStyle, TextStyleType } from '../../../utils/textStyles'

export type StyledTextProps = {
  ellipsis?: boolean | number
  breakSpaces?: boolean
  noWrap?: boolean
} & TextStyleType

export const StyledText = styled.span<StyledTextProps>`
  ${props => defaultTextStyle(props)};
  ${props =>
    typeof props.ellipsis === 'number'
      ? `
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: ${props.ellipsis};
    -webkit-box-orient: vertical;
    width: 100%;
    `
      : props.ellipsis &&
        `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  `};
  ${props => props.breakSpaces && `white-space: break-spaces;`}
  ${props => props.noWrap && `white-space: nowrap;`}
`
