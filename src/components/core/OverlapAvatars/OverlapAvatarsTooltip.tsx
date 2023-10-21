import React, { FunctionComponent, useMemo } from 'react'

import { Box } from '../Box'
import { Paragraph } from '../Paragraph'
import { Tooltip } from '../Tooltip'
import { getColor, NB_MAX_ITEMS_TOOLTIP } from './constant'
import { OverlapAvatar } from './OverlapAvatar'
import { TOverlapAvatarsItem } from './types'
import { WithChildren } from '@/types/WithChildren'

type Props = {
  items: TOverlapAvatarsItem[]
  size?: 'tiny' | 'atomic'
  displayAll?: boolean
  maxItems?: number
}

export const OverlapAvatarsTooltip: FunctionComponent<Props & WithChildren> = ({
  items,
  size = 'tiny',
  displayAll = false,
  maxItems = NB_MAX_ITEMS_TOOLTIP,
  children,
}) => {
  const maxItemLines = useMemo(() => Math.min(maxItems, items.length), [items.length, maxItems])

  const hiddenItemsCount = useMemo(() => Math.max(items.length - maxItemLines, 0), [
    items.length,
    maxItemLines,
  ])

  const sortedItems = useMemo(
    () => items.sort().slice(0, displayAll ? items.length : maxItemLines),
    [displayAll, items, maxItemLines],
  )

  return (
    <Tooltip
      direction="row"
      justify="center"
      place="top"
      label={
        <Box align="start" direction="column" gap="medium" paddingVertical="small">
          {sortedItems.map((item, idx) => {
            return (
              <Box key={`item-${idx}-${item.title}`} align="center" direction="row" gap="medium">
                <OverlapAvatar
                  size={size}
                  title={item.title}
                  color={item.color || getColor(item.title.length + idx)}
                />
                <Paragraph color="text-lighter">{item.title}</Paragraph>
              </Box>
            )
          })}

          {!displayAll && !!hiddenItemsCount && (
            <Box direction="row" gap="large" paddingHorizontal="xsmall">
              <Paragraph color="text-lighter">···</Paragraph>
              <Paragraph color="text-lighter">
                + {hiddenItemsCount} personne{hiddenItemsCount > 1 ? 's' : ''}
              </Paragraph>
            </Box>
          )}
        </Box>
      }
    >
      {children}
    </Tooltip>
  )
}
