import styled from '@emotion/styled'

import { Box } from '../Box'
import { Icon } from '../Icon'

export const StyledContainer = styled(Box)(() => {
  return {
    borderRadius: '50%',
    zIndex: 1,
  }
})

export const StyledIcon = styled(Icon)<{ iconWidth: number }>(({ iconWidth }) => {
  const remString = `${iconWidth}rem !important`

  return {
    zIndex: 2,
    '& > svg': { width: remString, height: remString },
  }
})
