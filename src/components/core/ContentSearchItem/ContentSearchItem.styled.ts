import styled from '@emotion/styled'

import Box from '../Box'

export const ContentSearchItemContainer = styled(Box)<{ selected: boolean }>(
  ({ theme, selected }) => ({
    cursor: 'pointer',
    transition: '150ms background ease-out',
    background: selected ? theme.color['background-light'] : 'none',
    ':hover': {
      background: selected ? theme.color.background : theme.color['background-light'],
    },
  }),
)
