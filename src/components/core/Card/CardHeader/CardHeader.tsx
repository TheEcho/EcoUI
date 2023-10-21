import { FunctionComponent, ReactNode } from 'react'

import { Heading } from '../../Heading'
import { StyledCardHeader } from './CardHeader.styled'

export type CardHeaderProps = {
  header?: string | ReactNode
}
export const CardHeader: FunctionComponent<CardHeaderProps> = ({ header }) => {
  return (
    <StyledCardHeader
      direction="row"
      flex={false}
      background="background-light"
      paddingLeft="large"
      paddingRight="large"
      paddingTop="medium"
      paddingBottom="medium"
    >
      {typeof header === 'string' ? (
        <Heading variant="card-header-title">{header}</Heading>
      ) : (
        header
      )}
    </StyledCardHeader>
  )
}
