import { FunctionComponent, PropsWithChildren } from 'react'

import { StyledDescriptionList } from './DescriptionList.styled'

export const DescriptionList: FunctionComponent<PropsWithChildren> = ({ ...rest }) => {
  return <StyledDescriptionList {...rest} />
}
