import styled from '@emotion/styled'

import { Box } from '../../core/Box'
import { Heading } from '../../core/Heading'

export const StyledCheckboxGroupDescription = styled(Heading)`
  font-weight: ${(props) => props.theme.text.weight.medium};
`

export const StyledCheckboxGroupOptionContainer = styled(Box)`
  & > * {
    margin-bottom: 1.2rem;
    :last-child {
      margin: 0;
    }
  }
`

export const StyledCheckboxGroup = styled(Box)``
