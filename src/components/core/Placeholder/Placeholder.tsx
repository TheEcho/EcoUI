import React, { FunctionComponent } from 'react'

import { StyledContainer, StyledPlaceholderProps } from './Placeholder.styled'
import { WithChildren } from '@/types/WithChildren'

export type PlaceholderProps = {
  loading?: boolean
} & StyledPlaceholderProps

export const Placeholder: FunctionComponent<PlaceholderProps & WithChildren> = ({
  loading,
  children,
  ...props
}) => {
  return loading ? <StyledContainer {...props} /> : <>{children}</>
}

export default Placeholder
