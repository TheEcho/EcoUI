import React, { FunctionComponent } from 'react'

import { StyledDescriptionList } from './DescriptionList.styled'

export const DescriptionList: FunctionComponent = ({ ...rest }) => {
  return <StyledDescriptionList {...rest} />
}
