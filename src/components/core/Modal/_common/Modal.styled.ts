import styled from '@emotion/styled'

import { Box } from '../..'

export const ModalHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.color['background-light'],
  padding: `${theme.spacing.padding['lg-medium']} ${theme.spacing.padding.large}`,
  borderBottom: `${theme.border.size.xsmall} solid ${theme.color['border-light']}`,
}))

export const ModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.color['background-lighter'],
  padding: `0rem ${theme.spacing.padding.large}`,
}))

export const ModalFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.color['background-lighter'],
  padding: `${theme.spacing.padding.medium} ${theme.spacing.padding.large}`,

  [`@media (min-width:${theme.layout.breakpoints.wide}px)`]: {
    borderTop: `${theme.border.size.xsmall} solid ${theme.color['border-light']}`,
  },
}))
