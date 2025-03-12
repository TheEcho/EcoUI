import { FunctionComponent } from 'react'

import { BoxProps } from '../Box'
import { Container, TGridStyleProps } from './Grid.styled'

type GridProps = TGridStyleProps & BoxProps

export const Grid: FunctionComponent<GridProps> = ({ itemPerRow, ...props }) => {
  return <Container flexWrap="true" direction="row" itemPerRow={itemPerRow} {...props} />
}
