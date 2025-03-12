import { Children, cloneElement, FunctionComponent, PropsWithChildren, ReactElement, ReactNode } from 'react'

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
    return cloneElement(elements[0] as ReactElement<any>, { className: 'top bottom' })
  } else if (elements.length > 0) {
    const firstElement = cloneElement(elements[0] as ReactElement<any>, {
      css: firstToolbarElementCss,
    })

    const middleElements = elements.slice(1, -1).map((element) =>
      cloneElement(element as ReactElement<any>, {
        css: middleToolbarElementCss,
      }),
    )

    const lastElement = cloneElement(
      elements[elements.length - 1] as ReactElement<any>,
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
  const childrenWithToolbarCss = cloneElementsWithCss(Children.toArray(children))

  return <Box {...rest}>{childrenWithToolbarCss}</Box>
}

export default Toolbar
