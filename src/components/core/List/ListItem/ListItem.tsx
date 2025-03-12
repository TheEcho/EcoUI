import { FunctionComponent, PropsWithChildren } from 'react'

import { Text } from '../../../core'
import { StyledListItem } from './ListItem.styled'

export type ListItemProps = PropsWithChildren<{
  text?: string
}>

export const ListItem: FunctionComponent<ListItemProps> = ({ children, text, ...rest }) => {
  let content = null
  if (text) {
    content = <Text>{text}</Text>
  } else {
    content = children
  }
  return <StyledListItem {...rest}>{content}</StyledListItem>
}
