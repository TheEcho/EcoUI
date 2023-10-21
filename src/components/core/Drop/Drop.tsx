import { FunctionComponent, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { getNewContainer, removeContainer } from '../../../utils/DOM'
import { DropContainer, DropContainerProps } from './DropContainer'

const useContainer = (): HTMLDivElement | null => {
  const [container] = useState<HTMLDivElement>(getNewContainer())
  useEffect(() => {
    return () => {
      if (container) {
        removeContainer(container)
      }
    }
  }, [container])
  return container || null
}

export type DropProps = {
  targetMargin?: number
  hideCardStyle?: boolean
  preventDefaultMediaQuery?: boolean
  fitTarget?: boolean
  forwardRef?: React.Ref<HTMLDivElement>
  isDropBorderVisible?: boolean
  maxDropWidth?: number
  noMobileFormat?: boolean
  titleMobile?: string
} & DropContainerProps

export const Drop: FunctionComponent<DropProps> = ({ children, ...rest }) => {
  const dropContainer = useContainer()

  if (!dropContainer) {
    return null
  }

  return createPortal(<DropContainer {...rest}>{children}</DropContainer>, dropContainer)
}

export default Drop
