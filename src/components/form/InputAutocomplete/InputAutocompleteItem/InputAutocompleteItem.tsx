import { FunctionComponent, useRef } from 'react'

import { ActionListItem } from '../../../'

type TProps = {
  onClick: () => void
  selected: boolean
  label: string
}

export const InputAutocompleteItem: FunctionComponent<TProps> = ({ label, onClick, selected }) => {
  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <div ref={ref}>
      <ActionListItem title={label} selected={selected} onClick={onClick} />
    </div>
  )
}
