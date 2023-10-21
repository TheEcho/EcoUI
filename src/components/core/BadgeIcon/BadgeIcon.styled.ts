import styled from '@emotion/styled'

import { theme } from '../../../shared/tokens'
import Box, { BoxProps } from '../Box'

export type TBadgeIconStyledProps = BoxProps

export const StyledBadgeIcon = styled(Box)<TBadgeIconStyledProps>(() => ({
  padding: '0.3rem 0.4rem',
  minWidth: '2rem',
  position: 'absolute',
  top: '-0.5rem',
  left: '1.6rem',
  boxShadow: theme.elevation.large,
}))

export const StyledBadgeIconContainer = styled('div')(() => ({
  position: 'relative',
}))
