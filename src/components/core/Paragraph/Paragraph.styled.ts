import { css, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

import { ITheme } from '@/index'
import { defaultTextStyle, TextStyleType } from '../../../utils/textStyles'

type TTextAlign = 'center' | 'end' | 'start'
type TWhiteSpace = 'nowrap' | 'pre-line' | 'pre' | 'pre-wrap' | 'break-spaces'

export type TStyledParagraphProps = {
  textAlign: TTextAlign
  ellipsis?: boolean
  whiteSpace?: TWhiteSpace
} & TextStyleType

type TStyledParagraphPropsWithTheme = { theme: ITheme } & TStyledParagraphProps

const textAlignStyle = (props: TStyledParagraphPropsWithTheme): SerializedStyles => css`
  text-align: ${props.textAlign};
`

const whiteSpaceStyle = (props: TStyledParagraphPropsWithTheme): SerializedStyles => css`
  white-space: ${props.whiteSpace};
`

const handleEllipsis = (props: TStyledParagraphPropsWithTheme): SerializedStyles => css`
  white-space: ${props.whiteSpace ? props.whiteSpace : 'nowrap'};
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`

export const StyledParagraph = styled.p<TStyledParagraphProps>`
  ${(props) => defaultTextStyle(props)};
  ${(props) => textAlignStyle(props)}
  ${(props) => whiteSpaceStyle(props)}
  ${(props) => props.ellipsis && handleEllipsis(props)}
`
