import styled from '@emotion/styled'
import { ITheme } from '@/index'

import Box, { BoxProps } from '../Box'

export type TStyledObjectListItem = {
  showHover?: boolean
} & BoxProps

export const StyledObjectListItem = styled(Box)<TStyledObjectListItem>`
  :hover:not(:disabled) {
    ${(props) =>
      (props.onClick || props.showHover) &&
      `
    background-color: ${props.theme.color['background']};
    cursor: pointer;
    `}
  }
  flex: 1;
`
