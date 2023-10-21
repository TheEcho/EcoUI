import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { ElementType } from 'react'

import { TColor } from '../../../shared/tokens/color'
import { Text } from '../Text'

type TTextAlign = 'center' | 'end' | 'start'

export type StyledHeadingProps = {
  as?: ElementType<any>
  color?: TColor
  textAlign?: TTextAlign
  css?: SerializedStyles
}

export const BaseHeading = styled(Text)<StyledHeadingProps>`
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};
`

export const StyledPageTitle = styled(BaseHeading)<StyledHeadingProps>`
  font-size: 2rem;
  font-weight: ${(props) => props.theme.text.weight.bold};
  line-height: 2.6rem;
  ${(props) => props.css}
`

export const StyledCardTitle = styled(BaseHeading)<StyledHeadingProps>`
  font-size: ${(props) => props.theme.text.size.large.size};
  font-weight: ${(props) => props.theme.text.weight.medium};
  line-height: ${(props) => props.theme.text.size.large.height};
  ${(props) => props.css}
`

export const StyledCardHeaderTitle = styled(BaseHeading)<StyledHeadingProps>`
  font-size: ${(props) => props.theme.text.size.small.size};
  font-weight: ${(props) => props.theme.text.weight.bold};
  line-height: ${(props) => props.theme.text.size.small.height};
  text-transform: uppercase;
  letter-spacing: 0.055rem;
  ${(props) => props.css}
`

export const StyledSectionTitle = styled(BaseHeading)<StyledHeadingProps>`
  font-size: ${(props) => props.theme.text.size.small.size};
  font-weight: ${(props) => props.theme.text.weight.bold};
  line-height: ${(props) => props.theme.text.size.small.height};
  text-transform: uppercase;
  letter-spacing: 0.055rem;
  ${(props) => props.css}
`
export const StyledSerifTitle = styled(BaseHeading)<StyledHeadingProps>`
  font-size: ${(props) => props.theme.text.size.xxlarge.size};
  font-weight: ${(props) => props.theme.text.weight.regular};
  line-height: ${(props) => props.theme.text.size.xxlarge.height};
  font-family: ${(props) => props.theme.text.font.serif};
  ${(props) => props.css}
`
export const StyledSubTitle = styled(BaseHeading)<StyledHeadingProps>`
  font-size: 2.4rem;
  font-weight: ${(props) => props.theme.text.weight.bold};
  line-height: 2.8rem;
  ${(props) => props.css}
`
export const StyledNavGridTitle = styled(BaseHeading)<StyledHeadingProps>`
  font-size: ${(props) => props.theme.text.size.xlarge.size};
  font-weight: ${(props) => props.theme.text.weight.regular};
  line-height: ${(props) => props.theme.text.size.xlarge.size};
  ${(props) => props.css}
`
export const ObjectListItemTitle = styled(BaseHeading)<StyledHeadingProps>`
  font-size: ${(props) => props.theme.text.size.large.size};
  font-weight: ${(props) => props.theme.text.weight.regular};
  line-height: ${(props) => props.theme.text.size.large.height};
  ${(props) => props.css}
`
