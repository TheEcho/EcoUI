import styled from '@emotion/styled'

import { Box, BoxProps } from '../Box'

export type TGridStyleProps = {
  itemPerRow: number
  gap: BoxProps['gap']
}

export const Container = styled(Box)<TGridStyleProps>(({ itemPerRow, gap, theme }) => {
  const gapSize = gap ? theme.spacing.gap[gap] : '0px'
  const itemWidth = `calc(${100 / itemPerRow}% - ${gapSize} / ${itemPerRow} * ${itemPerRow - 1})`

  const nthChild = `&:nth-child(${itemPerRow}n)`
  const topMargin = `&:nth-child(n+${itemPerRow + 1})`

  return {
    '& > *': {
      flex: `0 0 ${itemWidth} !important`,

      '&:last-of-type': {
        flex: `0 0 ${itemWidth} !important`,
      },

      [nthChild]: {
        marginRight: 0,
      },
      [topMargin]: {
        marginTop: `${gapSize} !important`,
      },
    },
  }
})
