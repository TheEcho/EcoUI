import React, { FunctionComponent, useMemo } from 'react'

import { Box } from '../Box'
import { Overlap } from '../Overlap'
import { Paragraph } from '../Paragraph'
import { getColor, NB_MAX_OVERLAPPING_ICONS } from './constant'
import { OverlapAvatar } from './OverlapAvatar'
import { TOverlapAvatarsItem } from './types'

type Props = {
  items: TOverlapAvatarsItem[]
  size?: 'tiny' | 'atomic'
  displayAll?: boolean
  maxItems?: number
}

export const OverlapAvatars: FunctionComponent<Props> = ({
  items,
  size = 'tiny',
  displayAll = false,
  maxItems = NB_MAX_OVERLAPPING_ICONS,
}) => {
  const maxItemIcons = useMemo(() => Math.min(maxItems, items.length), [items.length, maxItems])

  const hiddenItemsCount = useMemo(() => Math.max(items.length - maxItemIcons, 0), [
    items.length,
    maxItemIcons,
  ])

  const sortedItems = useMemo(
    () => items.sort().slice(0, displayAll ? items.length : maxItemIcons),
    [displayAll, items, maxItemIcons],
  )

  return (
    <Box direction="row" align="center">
      <Overlap overlapMargin={size === 'tiny' ? 0.6 : 0.5}>
        {sortedItems.map((item, idx) => {
          return (
            <OverlapAvatar
              key={idx}
              withBorder
              title={item.title}
              size={size}
              color={item.color || getColor(item.title.length + idx)}
            />
          )
        })}
      </Overlap>
      {!displayAll && !!hiddenItemsCount && (
        <Paragraph color="text" size="small">
          +{hiddenItemsCount}
        </Paragraph>
      )}
    </Box>
  )
}
