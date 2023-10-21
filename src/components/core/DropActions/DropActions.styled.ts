import styled from '@emotion/styled'

import { addAlpha } from '../../../utils/addAlpha'
import { Box } from '../../core/Box'

export const StyledDropActionsIconContainer = styled(Box)(({ theme }) => {
  return {
    position: 'relative',
    '&:hover::after': {
      backgroundColor: addAlpha(theme.color['text-dark'], 0.05),
    },
    '&:after': {
      content: "''",
      position: 'absolute',
      width: '2.6rem',
      height: '2.6rem',
      borderRadius: '2px',
    },
  }
})
