import React, { RefObject, useState } from 'react'
import { useEffect } from 'react'

export const useClickOutside = (
  ref: React.MutableRefObject<HTMLElement | null>,
  refsToExclude?: RefObject<HTMLElement>[],
): { clickedOutside: boolean } => {
  const [clickedOutside, setClickedOutside] = useState(false)

  useEffect(() => {
    const handleClickOutside = (
      event: React.MouseEvent<HTMLElement, MouseEvent> | MouseEvent,
    ): void => {
      const element = event.target as Node

      const elementClickedIsExclude = (refsToExclude || []).find(refToExclude =>
        refToExclude.current?.contains(element),
      )

      if (ref.current && !ref.current.contains(element) && !elementClickedIsExclude) {
        setClickedOutside(true)
      } else {
        setClickedOutside(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, refsToExclude])

  return {
    clickedOutside,
  }
}
