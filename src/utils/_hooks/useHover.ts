import { useState } from 'react'

type HoverResult = {
  isHover: boolean
  setHover: (hover: boolean) => void
  hoverProps: {
    onMouseEnter: () => void
    onMouseLeave: () => void
  }
}

export const useHover = (): HoverResult => {
  const [isHover, setHover] = useState(false)

  const hoverProps = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  }

  return { isHover, setHover, hoverProps }
}
