import styled from '@emotion/styled'

import { Box } from '../../../Box'

export const StyledCardAccordionContent = styled(Box)`
  & > * {
    padding-bottom: ${(props) => props.theme.spacing.padding.small};
    padding-top: ${(props) => props.theme.spacing.padding.small};

    &:first-of-type {
      padding-top: 0;
    }

    &:last-of-type {
      padding-bottom: 0;
    }

    &:not(:last-of-type) {
      border-bottom: ${(props) =>
        `${props.theme.border.size.xsmall} solid ${props.theme.color.border}`};
    }
  }
`
