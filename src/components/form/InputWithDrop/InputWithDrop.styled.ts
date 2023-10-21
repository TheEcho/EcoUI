import styled from '@emotion/styled'

import { Box } from '../../core'

export const StyledContainer = styled(Box)(() => {
  return {
    '& > *': {
      cursor: 'pointer',

      'input: disabled': {
        cursor: 'pointer',
      },
    },
  }
})
