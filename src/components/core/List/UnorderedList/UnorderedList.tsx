import { FunctionComponent, PropsWithChildren } from 'react'

import { TColor } from '../../../../shared/tokens/color'
import { StyledUnorderedList } from './UnorderedList.styled'

export type UnorderedListProps = {
  /**
   * Color of the list's bullets
   */
  bulletColor?: TColor
}

export const UnorderedList: FunctionComponent<PropsWithChildren<UnorderedListProps>> = ({
  bulletColor = 'text',
  ...rest
}) => {
  return <StyledUnorderedList bulletColor={bulletColor} {...rest} />
}
