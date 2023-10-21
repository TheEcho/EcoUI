import { BaseSyntheticEvent } from 'react'

import styled from '@emotion/styled'

export type TStyledFormProps = {
  onSubmit: (e: BaseSyntheticEvent) => Promise<void>
}
export const StyledForm = styled.form<TStyledFormProps>`
  flex: 1;
  width: 100%;
`
