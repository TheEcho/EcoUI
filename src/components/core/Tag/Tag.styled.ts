import styled from '@emotion/styled'

import Box from '../Box'
import { Image } from '../Image'
import { TagProps } from '.'

type TStyledTagProps = TagProps

const SIZE_TO_DIMENSIONS = {
  regular: '3.2rem',
  small: '2.8rem',
  xsmall: '2.4rem',
  'small-very-comfy': '2rem',
}

export const StyledTag = styled(Box)<TStyledTagProps>(
  ({ theme, icon, thumbnailUrl, borderColor, borderSize, rounded, size, reverse }) => {
    const childrenMaxWidth = {
      '*': {
        maxWidth: '100%',
      },
    }

    const border = borderSize &&
      borderColor && {
        border: 'none',
        boxShadow: `inset 0px 0px 0px ${theme.border.size[borderSize]} ${theme.color[borderColor]}`,
        ...(rounded && { borderRadius: '10rem' }),
      }

    if (icon) {
      return {
        padding: `0.3rem ${theme.spacing.padding.small}`,
        ...border,
        ...childrenMaxWidth,
      }
    }

    if (thumbnailUrl && size) {
      const padding = theme.spacing.padding.small

      return {
        height: SIZE_TO_DIMENSIONS[size],
        overflow: 'hidden',
        ...border,
        ...childrenMaxWidth,
        ...(reverse ? { paddingRight: padding } : { paddingLeft: padding }),
      }
    }

    return {
      padding: `${theme.spacing.padding.xsmall} ${theme.spacing.padding.xsmall}`,
      ...childrenMaxWidth,
      ...(borderSize && border),
    }
  },
)

export const StyledThumbnail = styled(Image)<TStyledTagProps>(({ size = 'regular' }) => {
  return {
    width: SIZE_TO_DIMENSIONS[size] || '3.2rem',
    height: SIZE_TO_DIMENSIONS[size] || '3.2rem',
  }
})
