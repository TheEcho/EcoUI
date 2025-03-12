import { FunctionComponent, PropsWithChildren } from 'react'

import { StyledContainer, StyledPlaceholderProps } from './Placeholder.styled'

export type PlaceholderProps = PropsWithChildren<{
  loading?: boolean
}> & StyledPlaceholderProps

export const Placeholder: FunctionComponent<PlaceholderProps> = ({
  loading,
  children,
  ...props
}) => {
  return loading ? <StyledContainer {...props} /> : <>{children}</>
}

export default Placeholder
