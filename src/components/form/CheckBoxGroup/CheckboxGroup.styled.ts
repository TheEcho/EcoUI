import styled from '@emotion/styled'
import { ITheme } from '@/index'

import { Box } from '../../core/Box'
import { Heading } from '../../core/Heading'

export const StyledCheckBoxGroupDescription = styled(Heading)`
  font-weight: ${(props) => props.theme.text.weight.medium};
`

export const StyledCheckBoxGroupOptionContainer = styled(Box)`
  & > * {
    margin-bottom: 1.2rem;
    :last-child {
      margin: 0;
    }
  }
`

export const StyledCheckBoxGroup = styled(Box)``
