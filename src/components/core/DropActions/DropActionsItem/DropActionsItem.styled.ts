import styled from '@emotion/styled'

import { Box } from '../../../core'

export const SeparatorStyled = styled(Box)(({ theme }) => {
  return {
    borderBottom: `${theme.border.size.xsmall} solid ${theme.color['border-light']}`,
  }
})
