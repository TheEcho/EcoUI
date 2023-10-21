import React, { FunctionComponent } from 'react'

import { TColor } from '../../../../shared/tokens/color'
import { StyledUnorderedList } from './UnorderedList.styled'

export type UnorderedListProps = {
  /**
   * Color of the list's bullets
   */
  bulletColor?: TColor
}

export const UnorderedList: FunctionComponent<UnorderedListProps> = ({
  bulletColor = 'text',
  ...rest
}) => {
  return <StyledUnorderedList bulletColor={bulletColor} {...rest} />
}
