import { Children, cloneElement, FunctionComponent, isValidElement, PropsWithChildren, ReactElement } from 'react'

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
  const count = Children.count(children)
  const childrenWithProps = Children.map(children, (child, idx) => {
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement, { style: { zIndex: count - idx } })
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
