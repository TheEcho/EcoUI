import styled from '@emotion/styled'

import { Box } from '../../core/Box'

export const StyledDropdownContainer = styled.div<{ withButton: boolean }>(({ withButton }) => ({
  maxHeight: '25vh',
  margin: '0',
  padding: '0',
  display: 'grid',
  gridTemplateRows: withButton ? '1fr auto' : '1fr',
}))

export const StyledButtonContainer = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${theme.color.border}`,
}))

export const StyledDropdownButton = styled.button(({ theme }) => ({
  display: 'block',
  width: '100%',
  height: '100%',

  padding: `${theme.spacing.padding.small} ${theme.spacing.padding.medium}`,

  cursor: 'pointer',
  background: theme.color['background-lighter'],
  border: 0,
  borderTop: `1px solid ${theme.color.border}`,
  transition: 'background 150ms ease-out',
  ':hover': {
    background: theme.color['background-light'],
  },
}))

export const StyledItemList = styled.ul({
  overflowY: 'auto',
  background: 'white',
})
