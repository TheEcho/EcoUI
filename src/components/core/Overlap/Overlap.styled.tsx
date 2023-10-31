import { css, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

import { ITheme } from '@/index'

export type StyledOverlapProps = {
  overlapMargin: number
  direction: 'vertical' | 'horizontal'
}
type StyledOverlapPropsWithTheme = { theme: ITheme } & StyledOverlapProps

const overlapStyle = ({
  direction,
  overlapMargin,
}: StyledOverlapPropsWithTheme): SerializedStyles => css`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: ${direction === 'horizontal' ? 'row' : 'column'};
  & > * {
    &:not(:first-child) {
      ${direction === 'horizontal' && `margin-left: -${overlapMargin}rem`};
      ${direction === 'vertical' && `margin-top: -${overlapMargin}rem`};
    }
  }
`

export const StyledOverlap = styled.div<StyledOverlapProps>`
  ${(props) => overlapStyle(props)}
`
