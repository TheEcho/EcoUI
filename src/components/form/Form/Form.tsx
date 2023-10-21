import React, { BaseSyntheticEvent, FunctionComponent } from 'react'

import { StyledForm } from './Form.styled'
import { WithChildren } from '@/types/WithChildren'

export type FormProps = {
  method?: 'get' | 'post' | 'dialog'
  id?: string
  name?: string
  action?: string
  onSubmit: (e: BaseSyntheticEvent) => Promise<void>
}

export const Form: FunctionComponent<FormProps & WithChildren> = ({ children, ...rest }) => {
  return <StyledForm {...rest}>{children}</StyledForm>
}

export default Form
