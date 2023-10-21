import styled from '@emotion/styled'

import { ActionList } from '../../core/ActionList'

export const StyledActionList = styled(ActionList)(({ theme }) => ({
  maxHeight: '30rem',
  overflow: 'auto',
  border: `${theme.border.size.xsmall} solid ${theme.color.border}`,
}))
