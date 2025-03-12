import { FunctionComponent } from 'react'

import { CardProps } from '../Card'
import { StyledNavGrid } from './NavGrid.styled'

export type NavGridProps = {
  /**
   * Take a list of NavGridItem
   */
} & CardProps

export const NavGrid: FunctionComponent<NavGridProps> = ({ ...rest }) => {
  return <StyledNavGrid padding="none" {...rest} />
}

export default NavGrid
