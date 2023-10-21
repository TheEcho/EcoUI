import styled from '@emotion/styled'
import { ITheme } from '@/index'

import { Box, BoxProps } from '../Box'

export type StyledThumbnailProps = {
  rounded?: boolean
  lightBorder: boolean
} & BoxProps

export const StyledThumbnail = styled(Box)<StyledThumbnailProps>(
  ({ theme, rounded, lightBorder }) => {
    return {
      overflow: 'hidden',
      boxShadow: `0px 0px 0px ${theme.border.size.xsmall} rgba(0, 0, 0, ${
        lightBorder ? '0.1' : '0.2'
      })`,
      borderRadius: rounded ? '50%' : theme.border.radius.medium,
      '& > *': {
        objectFit: 'cover',
      },
    }
  },
)
