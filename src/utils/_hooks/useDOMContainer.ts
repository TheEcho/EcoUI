import { useEffect, useState } from 'react'

import { getNewContainer, removeContainer } from '../../utils'

export const useDOMContainer = (): HTMLDivElement | null => {
  const [container, setContainer] = useState<HTMLDivElement>()
  useEffect(() => {
    setContainer(getNewContainer())
    return () => {
      if (container) {
        removeContainer(container)
      }
    }
  }, [container])
  return container || null
}
