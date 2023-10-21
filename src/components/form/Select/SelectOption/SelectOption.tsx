import { FunctionComponent } from 'react'

import { StyledSelectOption } from './SelectOption.styled'

export type SelectOptionProps = {
  value?: string
}

export const SelectOption: FunctionComponent<SelectOptionProps> = ({ ...rest }) => (
  <StyledSelectOption {...rest} />
)
