import React from 'react'

/**
 * Allow to have optionnal ref on the input and
 * handle input local state with his own ref
 *
 * https://itnext.io/reusing-the-ref-from-forwardref-with-react-hooks-4ce9df693dd
 */
export const useCombinedRefs = (
  ...refs: (React.Ref<HTMLElement | null> | undefined)[]
): React.MutableRefObject<HTMLInputElement | null> => {
  const targetRef = React.useRef<HTMLInputElement | null>(null)

  React.useEffect(() => {
    const filteredRefs = refs.filter((ref) => ref) as React.Ref<HTMLInputElement | null>[]

    filteredRefs.forEach((ref: React.Ref<HTMLInputElement | null>) => {
      if (!ref) {
        return
      }

      if (typeof ref === 'function') {
        ref(targetRef.current)
      } else {
        // eslint-disable-next-line prettier/prettier
        (ref.current as HTMLInputElement | null) = targetRef.current
      }
    })
  }, [refs])

  return targetRef
}
