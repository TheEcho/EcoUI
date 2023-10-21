import styled from '@emotion/styled'
import { ITheme } from '@/index';

import { Box } from '../Box'

export const StyledContainer = styled(Box)<{ isDropOpen: boolean }>(({ theme, isDropOpen }) => {
  return {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    '& > *': {
      padding: `${theme.spacing.padding['sm-medium']} ${theme.spacing.padding.medium}`,
      border: `${theme.border.size.xsmall} solid ${theme.color['border']}`,
      borderRadius: theme.border.radius.medium,
      backgroundColor: theme.color['background-lighter'],
      boxShadow: `${theme.elevation['medium-comfy']}`,
      ...(isDropOpen && {
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0',
      }),
    },
  }
})
