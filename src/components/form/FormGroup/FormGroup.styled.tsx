import styled from '@emotion/styled'

import { Box, BoxProps } from '../../core/Box'

export const StyledIconWrapper = styled(Box)<BoxProps>(({ theme }) => {
  return {
    marginTop: '-0.2rem',
  }
})

export const StyledFormErrorWrapper = styled(Box)<BoxProps>(({ theme }) => {
  return {
    display: 'block',
  }
})
