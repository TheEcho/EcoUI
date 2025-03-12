import { FunctionComponent, PropsWithChildren } from 'react'

import { StyledDescriptionListDescription } from './DescriptionListDescription.styled'

export const DescriptionListDescription: FunctionComponent<PropsWithChildren> = ({ ...rest }) => {
  return <StyledDescriptionListDescription {...rest} />
}
