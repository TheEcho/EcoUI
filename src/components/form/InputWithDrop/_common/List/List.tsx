import React, { FunctionComponent } from 'react'

import { Box, ObjectListItem, Text } from '../../../../core'
import { TDateInputWithModal } from '../../DateRangeInputWithDrop/DateRangeInputWithDrop'

type TProps = {
  items: TDateInputWithModal[]
  onItemPicked: (values: TDateInputWithModal) => void
  closeDrop: () => void
}

export const RecommandedDateList: FunctionComponent<TProps> = ({
  items,
  onItemPicked,
  closeDrop,
}) => {
  const handleClick = (item: TDateInputWithModal): void => {
    onItemPicked(item)
    closeDrop()
  }

  if (!items.length) {
    return null
  }

  return (
    <Box direction="column">
      {items.map((item, index) => (
        <ObjectListItem
          key={index}
          id={index + ''}
          paddingHorizontal="sm-medium"
          paddingVertical="small"
          onClick={() => handleClick(item)}
        >
          <Text size="regular">{item.label}</Text>
        </ObjectListItem>
      ))}
    </Box>
  )
}

export type TListProps = TProps
