import React, { FunctionComponent, PropsWithChildren } from 'react'

import { StyledOverlap } from './Overlap.styled'

export type OverlapProps = PropsWithChildren<{
  direction?: 'vertical' | 'horizontal'
  overlapMargin?: number
}>

export const Overlap: FunctionComponent<OverlapProps> = ({
  direction = 'horizontal',
  overlapMargin = 1,
  children,
  ...rest
}) => {
  const count = React.Children.count(children)
  const childrenWithProps = React.Children.map(children, (child, idx) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement, { style: { zIndex: count - idx } })
    }
    return child
  })

  return (
    <StyledOverlap direction={direction} overlapMargin={overlapMargin} {...rest}>
      {childrenWithProps}
    </StyledOverlap>
  )
}

export default Overlap
