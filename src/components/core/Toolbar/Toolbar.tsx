import React, { FunctionComponent, PropsWithChildren, ReactNode } from 'react'

import { Box } from '../../core'
import {
  firstToolbarElementCss,
  lastToolbarElementCss,
  middleToolbarElementCss,
} from './StyledToolbar'

type ToolbarProps = PropsWithChildren<{
  width?: number
  flex?: boolean
}>

const cloneElementsWithCss = (elements: ReactNode[]): ReactNode | ReactNode[] => {
  if (elements.length === 1) {
    return React.cloneElement(elements[0] as React.ReactElement<any>, { className: 'top bottom' })
  } else if (elements.length > 0) {
    const firstElement = React.cloneElement(elements[0] as React.ReactElement<any>, {
      css: firstToolbarElementCss,
    })

    const middleElements = elements.slice(1, -1).map((element) =>
      React.cloneElement(element as React.ReactElement<any>, {
        css: middleToolbarElementCss,
      }),
    )

    const lastElement = React.cloneElement(
      elements[elements.length - 1] as React.ReactElement<any>,
      {
        css: lastToolbarElementCss,
      },
    )

    return [firstElement, ...middleElements, lastElement]
  }
}

/**
 * Toolbar component allows to create a toolbar with following components :
 * - Button
 * - Dropdown
 * - Input
 */
export const Toolbar: FunctionComponent<ToolbarProps> = ({ children, ...rest }) => {
  const childrenWithToolbarCss = cloneElementsWithCss(React.Children.toArray(children))

  return <Box {...rest}>{childrenWithToolbarCss}</Box>
}

export default Toolbar
