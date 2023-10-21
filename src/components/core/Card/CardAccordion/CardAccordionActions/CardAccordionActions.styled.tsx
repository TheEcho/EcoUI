import styled from '@emotion/styled'

import Box from '../../../Box'
import { ActionType } from './CardAccordionAction/CardAccordionAction'

export const StyledCardAccordionActions = styled(Box)`
  & > * {
    &:not(:last-child) {
      border-right: ${(props) =>
        `${props.theme.border.size.xsmall} solid ${props.theme.color.border}`};
    }
  }
`

export const StyledCardAccordionAction = styled(Box)<{ type: ActionType }>`
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color['background-light']};
  }
`
