import styled from '@emotion/styled'

import { Box } from '../../Box'
import Card from '../Card'

export const StyledCardAccordion = styled(Card)(() => {
  return {
    overflow: 'auto',
  }
})

export const StyledCardAccordionHeaderSuffix = styled(Box)`
  & > * {
    &:not(:first-child) {
      position: relative;

      &:before {
        position: absolute;
        content: '';
        width: ${(props) => `calc(100% - ${props.theme.spacing.padding['sm-medium']} * 2)`};
        top: 0;
        height: ${(props) => props.theme.border.size.xsmall};
        background-color: ${(props) => props.theme.color.border};
      }
    }
  }
`
