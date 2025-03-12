import { FunctionComponent, PropsWithChildren } from 'react'

import styled from '@emotion/styled'

import { Text } from '../../core'

type FormLabelProps = PropsWithChildren<{
  name?: string
}>

const StyledLabel = styled.label<{ htmlFor?: string }>`
  cursor: ${(props) => (props.htmlFor ? 'pointer' : 'default')};
`

export const FormLabel: FunctionComponent<FormLabelProps> = ({ name, children }) => {
  return (
    <StyledLabel htmlFor={name}>
      <Text color="text-dark" weight="medium">
        {children}
      </Text>
    </StyledLabel>
  )
}

export default FormLabel
