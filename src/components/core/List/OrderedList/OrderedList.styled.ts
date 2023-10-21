import { css, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

import { ITheme } from '../../../../shared/tokens'

type StyledOrderedListPropsWithTheme = { theme: ITheme }

const listStyle = (props: StyledOrderedListPropsWithTheme): SerializedStyles => css`
  counter-reset: li;
  li {
    counter-increment: li;
  }
  li::before {
    content: '.' counter(li);
    color: ${props.theme.color['text-light']};
    display: inline-block;
    font-size: ${props.theme.text.size.small.size};
    width: 1em;
    line-height: ${props.theme.text.size.small.height};
    margin-right: 0.8rem;
    text-align: right;
    direction: rtl;
  }
`

export const StyledOrderedList = styled.ol`
  ${(props) => listStyle(props)}
`
