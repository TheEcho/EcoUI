import React, { BaseSyntheticEvent, FunctionComponent, PropsWithChildren } from 'react'

import { StyledForm } from './Form.styled'

export type FormProps = PropsWithChildren<{
  method?: 'get' | 'post' | 'dialog'
  id?: string
  name?: string
  action?: string
  onSubmit: (e: BaseSyntheticEvent) => Promise<void>
}>

export const Form: FunctionComponent<FormProps> = ({ children, ...rest }) => {
  return <StyledForm {...rest}>{children}</StyledForm>
}

export default Form
