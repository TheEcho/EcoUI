import React, { FunctionComponent } from 'react'

import { Text } from '../../../core'
import { StyledListItem } from './ListItem.styled'
import { WithChildren } from '@/types/WithChildren'

export type ListItemProps = {
  text?: string
}
export const ListItem: FunctionComponent<ListItemProps & WithChildren> = ({ children, text, ...rest }) => {
  let content = null
  if (text) {
    content = <Text>{text}</Text>
  } else {
    content = children
  }
  return <StyledListItem {...rest}>{content}</StyledListItem>
}
