import styled from '@emotion/styled'

import Box, { BoxProps } from '../Box'

export type StyledSideBarProps = BoxProps & { hasSectionSeparator?: boolean }

export const StyledSideBar = styled(Box)<StyledSideBarProps>`
  & > * {
    ${(props) =>
      !props.hasSectionSeparator &&
      `
      &:not(:last-of-type) {
        padding-bottom: ${props.theme.spacing.padding.xlarge};
      }
      &:first-of-type {
        padding-top: ${props.theme.spacing.padding['medium']};
      }
      `}

    ${(props) =>
      props.hasSectionSeparator &&
      `
      &:not(:last-of-type) {
        padding: ${props.theme.spacing.padding.medium} 0;
        border-bottom: ${props.theme.border.size.xsmall} solid ${props.theme.color['border-light']};
      }

      &:last-of-type {
        padding: ${props.theme.spacing.padding.medium} 0;
      }
    `}
  }
`
