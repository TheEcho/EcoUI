import styled from '@emotion/styled'

import { TColor } from '../../../shared/tokens/color'
import Box, { BoxProps } from '../Box'

export type TBadgeStyledProps = {
  /**
   * Color of the Tag
   */
  color?: TColor
} & BoxProps

export const StyledBadge = styled(Box)<TBadgeStyledProps>`
  padding: 0.4rem 0.8rem;
  min-width: 2.4rem;
`
