import { ReactNode } from 'react'

export const matchComponentName = (component: ReactNode, name: string): boolean => {
  return (
    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    component?.type?.displayName === name ||
    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    component?.type?.name === name ||
    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    component?.props?.componentName === name
  )
}
