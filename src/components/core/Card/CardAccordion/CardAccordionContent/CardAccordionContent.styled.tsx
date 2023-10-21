import styled from '@emotion/styled'

import { Box } from '../../../Box'

export const StyledCardAccordionContent = styled(Box)`
  & > * {
    padding-bottom: ${(props) => props.theme.spacing.padding.small};
    padding-top: ${(props) => props.theme.spacing.padding.small};

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }

    &:not(:last-child) {
      border-bottom: ${(props) =>
        `${props.theme.border.size.xsmall} solid ${props.theme.color.border}`};
    }
  }
`
