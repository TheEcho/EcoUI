import styled from '@emotion/styled'

import { Box, BoxProps } from '../Box'

export type StyledBreadcrumbProps = BoxProps

export const StyledBreadcrumbContainer = styled(Box)<StyledBreadcrumbProps>`
  & > * {
    &:not(:last-of-type) {
      &:after {
        content: '/';
        margin: 0 ${(props) => props.theme.spacing.margin.xsmall};
        color: ${(props) => props.theme.color.text};
        text-decoration: none;
      }
    }
  }
`
