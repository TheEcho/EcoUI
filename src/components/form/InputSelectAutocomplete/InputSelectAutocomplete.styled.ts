import { css, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { ITheme } from '@/index'

import { ActionList, ActionListProps } from '../../core/ActionList'

export const ContainerCss = (isOpen: boolean): SerializedStyles => css`
  ${isOpen &&
  `
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      `}
`

export const StyledActionList = styled(ActionList)<ActionListProps & { isStatic?: boolean }>(
  ({ isStatic, theme }) => {
    return {
      '> div:first-of-type': {
        maxHeight: '30rem',
        overflow: 'auto',
      },
      ...(isStatic && {
        '> div:last-of-type': {
          borderTop: `${theme.border.size.xsmall} solid ${theme.color['border-light']} !important`,
        },
      }),
    }
  },
)
