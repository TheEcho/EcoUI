import React, { FunctionComponent, useRef } from 'react'

import { ActionListItem, ActionListItemProps } from '../../../core/ActionList/ActionListItem'

type TProps = {
  label: string
} & Omit<ActionListItemProps, 'label'>

export const InputSelectAutocompleteItem: FunctionComponent<TProps> = ({
  label,
  onClick,
  ...props
}) => {
  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <div ref={ref}>
      <ActionListItem title={label} {...props} onClick={onClick} />
    </div>
  )
}
