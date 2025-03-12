import { Children, FunctionComponent, useEffect, useMemo, useState } from 'react'

import { Box, BoxProps } from '../Box'
import { Text } from '../Text'

type ShowMoreProps = {
  itemBeforeHide: number
  onShowMoreHover?: (isHover: boolean) => void
} & BoxProps

export const ShowMore: FunctionComponent<ShowMoreProps> = ({
  itemBeforeHide,
  children,
  onShowMoreHover,
  ...props
}) => {
  const [open, setOpen] = useState(false)
  const [isShowMoreHover, setIsShowMoreHover] = useState(false)

  const items = useMemo(() => Children.toArray(children), [children])
  const filteredItems = useMemo(() => items.filter((_, index) => index < itemBeforeHide), [
    items,
    itemBeforeHide,
  ])

  const toggleItems = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault()
    setOpen(!open)
  }

  useEffect(() => {
    if (onShowMoreHover) {
      onShowMoreHover(isShowMoreHover)
    }
  }, [onShowMoreHover, isShowMoreHover])

  return (
    <Box {...props}>
      {open ? items : filteredItems}
      {items.length > itemBeforeHide && (
        <Box
          onClick={toggleItems}
          marginTop={open ? 'small' : undefined}
          onMouseEnter={() => setIsShowMoreHover(true)}
          onMouseLeave={() => setIsShowMoreHover(false)}
        >
          <Text color={isShowMoreHover ? 'secondary-dark' : 'secondary'} size="regular">
            {open ? 'Afficher moins...' : 'Afficher plus'}
          </Text>
        </Box>
      )}
    </Box>
  )
}
