import { useLayoutEffect, useState } from 'react'

type UseCreatePortalRoot = {
  rootId: string
}

const getOrCreateRoot = (rootId: string) => {
  const existingRoot = document.getElementById(rootId)
  if (!!existingRoot) {
    return existingRoot
  }
  const newRoot = document.createElement('div')
  newRoot.id = rootId
  document.body.appendChild(newRoot)

  return newRoot
}

export const useCreatePortalRoot = ({ rootId }: UseCreatePortalRoot): HTMLElement | null => {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(document.getElementById(rootId))

  useLayoutEffect(() => {
    const root = getOrCreateRoot(rootId)
    setPortalRoot(root)
  }, [rootId])

  return portalRoot
}
