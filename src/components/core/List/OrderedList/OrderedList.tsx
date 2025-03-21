import { FunctionComponent, PropsWithChildren } from 'react'

import { TColor } from '../../../../shared/tokens/color'
import { StyledOrderedList } from './OrderedList.styled'

export type OrderedListProps = {
  /**
   * Color of the list's bullets
   */
  bulletColor?: TColor
}
export const OrderedList: FunctionComponent<PropsWithChildren<OrderedListProps>> = ({
  bulletColor = 'text',
  ...rest
}) => {
  return <StyledOrderedList {...rest} />
}
