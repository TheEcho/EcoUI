import React, { FunctionComponent } from 'react'

import { StyledDescriptionListDescription } from './DescriptionListDescription.styled'

export const DescriptionListDescription: FunctionComponent = ({ ...rest }) => {
  return <StyledDescriptionListDescription {...rest} />
}
