import React, { FunctionComponent, useRef } from 'react'

import { ActionListItem, Box, Text } from '../../../core'
import { TInputAutoCompleteItemWithAction } from '..'

type TProps = {
  onActionClick?: (value: string) => void
  selected: boolean
  item: TInputAutoCompleteItemWithAction
}

export const InputAutocompleteAction: FunctionComponent<TProps> = ({
  onActionClick,
  selected,
  item,
}) => {
  const ref = useRef<HTMLDivElement | null>(null)

  if (!onActionClick) {
    return (
      <Box paddingLeft="medium" paddingRight="large" paddingTop="small" paddingBottom="small">
        <Text color="primary">
          If you add a role to an item you must provide to the InputAutocomplete the onActionClicked
          props
        </Text>
      </Box>
    )
  }

  return (
    <div ref={ref}>
      <ActionListItem
        selected={selected}
        onClick={() => onActionClick(item.value)}
        icon={item.icon}
        title={item.label}
        color="secondary"
        weight="medium"
      />
    </div>
  )
}

export type TInputAutocompleteActionProps = TProps
