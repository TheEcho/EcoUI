import { useEffect, useState } from 'react'

import { ITheme, theme } from '../../shared/tokens'

export const useMediaQuery = (query: string): boolean => {
  const [match, setMatch] = useState(window.matchMedia(query).matches)

  useEffect(() => {
    const updateMatch = () => setMatch(window.matchMedia(query).matches)

    updateMatch()
    if (typeof window.matchMedia(query).addListener == 'function') {
      // Fix for Webkit...
      // https://developer.apple.com/documentation/webkitjs/mediaquerylist
      window.matchMedia(query).addListener(updateMatch)
    } else {
      window.matchMedia(query).addEventListener('change', updateMatch)
    }
    return () => {
      if (typeof window.matchMedia(query).removeListener == 'function') {
        window.matchMedia(query).removeListener(updateMatch)
      } else {
        window.matchMedia(query).removeEventListener('change', updateMatch)
      }
    }
  }, [query])

  return match
}

export const useSmallMediaQuery = (): boolean => {
  const smallQuery = `(${theme.layout.media.small})`
  return useMediaQuery(smallQuery)
}

export const useMediumMediaQuery = (): boolean => {
  const mediumQuery = `(${theme.layout.media.medium})`
  return useMediaQuery(mediumQuery)
}

export const useWideMediaQuery = (): boolean => {
  const wideQuery = `(${theme.layout.media.wide})`
  return useMediaQuery(wideQuery)
}

export const useUltrawideMediaQuery = (): boolean => {
  const ultrawideQuery = `(${theme.layout.media.ultrawide})`
  return useMediaQuery(ultrawideQuery)
}

export const useHugeMediaQuery = (): boolean => {
  const hugeQuery = `(${theme.layout.media.huge})`
  return useMediaQuery(hugeQuery)
}

export type ScreenSize = keyof ITheme['layout']['media'] | 'huger'

/**
 * Hook providing screen size depending on screen width
 * @param (optional) custom Media queries for custom breakpoints
 */
export const useScreenSize = (customMedia?: ITheme['layout']['media']): ScreenSize => {
  const media = customMedia ?? theme.layout.media

  const isSmall = useMediaQuery(`(${media.small})`)
  const isMedium = useMediaQuery(`(${media.medium})`)
  const isWide = useMediaQuery(`(${media.wide})`)
  const isUltrawide = useMediaQuery(`(${media.ultrawide})`)
  const isHuge = useMediaQuery(`(${media.huge})`)

  if (isSmall) {
    return 'small'
  }
  if (isMedium) {
    return 'medium'
  }
  if (isWide) {
    return 'wide'
  }
  if (isUltrawide) {
    return 'ultrawide'
  }
  if (isHuge) {
    return 'huge'
  }
  return 'huger'
}
