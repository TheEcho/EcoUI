import styled from '@emotion/styled'

import Box, { BoxProps } from '../Box'

export const RawNotificationItemContent = styled(Box)(() => ({
  minWidth: '100%',
}))

export const StyledIconBox = styled(Box)<BoxProps>(() => ({
  position: 'relative',
  borderRadius: '50%',
  padding: '0.2rem',
}))

export const StyledNotificationItem = styled(Box)<{ isNew?: boolean; hasBorderBottom?: boolean }>(
  ({ theme, isNew, hasBorderBottom }) => ({
    ...(hasBorderBottom && {
      borderBottom: `${theme.border.radius.xsmall} solid ${theme.color['border-light']}`,
    }),
    '&:hover': {
      backgroundColor: theme.color[isNew ? 'warning-light' : 'background-light'],
    },
  }),
)
