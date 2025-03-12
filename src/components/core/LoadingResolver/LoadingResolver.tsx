import { createElement, FunctionComponent, ReactElement, ReactNode, useMemo } from 'react'

import { Box } from '..'
import { BoxProps } from '../Box'

type TObject<T> = {
  [P in keyof T]: T[P]
}

type TObjectNonNullable<T> = {
  [P in keyof T]: NonNullable<T[P]>
}

type TProps<T> = {
  dataWaitingToLoad: TObject<T>
  loadingComponent?: FunctionComponent
  children: (object: TObjectNonNullable<T>) => void
} & BoxProps

export function LoadingResolver<T>({
  dataWaitingToLoad,
  children,
  loadingComponent,
  ...props
}: TProps<T>): ReactElement {
  const areAllPropsLoaded = useMemo(() => {
    if (!dataWaitingToLoad) {
      return false
    }

    const keys = Object.keys(dataWaitingToLoad)

    const valueLoaded = keys.filter((key) => {
      const typedKey = key as keyof typeof dataWaitingToLoad

      return dataWaitingToLoad[typedKey]
    })

    return valueLoaded.length === keys.length
  }, [dataWaitingToLoad])

  if (!areAllPropsLoaded) {
    return <>{loadingComponent ? createElement(loadingComponent) : ''}</>
  }

  return (
    <Box {...props}>
      {children({ ...(dataWaitingToLoad as TObjectNonNullable<T>) }) as ReactNode}
    </Box>
  )
}
