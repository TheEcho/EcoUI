import React, { FunctionComponent } from 'react'

import {
  StyledFooterLayout,
  StyledHeaderLayout,
  StyledLayout,
  StyledMainLayout,
  StyledNavLayout,
} from './Layout.styled'

export const Layout: FunctionComponent = ({ ...rest }) => {
  return (
    <StyledLayout {...rest}>
      <StyledHeaderLayout />
      <StyledNavLayout />
      <StyledMainLayout />
      <StyledFooterLayout />
    </StyledLayout>
  )
}

export default Layout
