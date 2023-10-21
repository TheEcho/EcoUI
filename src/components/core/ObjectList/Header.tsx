import React, { FunctionComponent, ReactNode } from 'react'

import { Heading } from '../../core'
import { StyledHeader } from './Header.styled'

export type HeaderProps = {
  header?: string | ReactNode
}
export const ObjectListHeader: FunctionComponent<HeaderProps> = ({ header }) => {
  return (
    <StyledHeader
      flex={false}
      background="background-light"
      padding="large"
      paddingTop="medium"
      paddingBottom="medium"
    >
      {typeof header === 'string' ? (
        <Heading variant="section-title">{header}</Heading>
      ) : (
        header
      )}
    </StyledHeader>
  )
}
