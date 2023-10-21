import styled from '@emotion/styled'

export const StyledDropdownSelectedContainer = styled.div<{ withButton: boolean }>(
  ({ withButton }) => ({
    maxHeight: '25vh',
    margin: '0',
    padding: '0',
    display: 'grid',
    gridTemplateRows: withButton ? 'auto 1fr auto' : 'auto 1fr',
  }),
)

export const StyledSelectorDiv = styled.div(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing.gap.small,
  cursor: 'pointer',
  '&:focus': {
    outline: `2px solid ${theme.color['secondary']}`,
  },
  borderRadius: theme.border.radius.small,
}))
