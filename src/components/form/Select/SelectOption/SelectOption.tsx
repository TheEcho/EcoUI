import { FunctionComponent, PropsWithChildren } from 'react'

import { StyledSelectOption } from './SelectOption.styled'

export type SelectOptionProps = {
  value?: string
}

export const SelectOption: FunctionComponent<PropsWithChildren<SelectOptionProps>> = ({ ...rest }) => (
  <StyledSelectOption {...rest} />
)
