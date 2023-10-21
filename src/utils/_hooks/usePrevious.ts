import { useEffect, useRef } from 'react'

/**
 * Hook to keep track of the previous value of a value that will change in time.
 * Useful when we want to trigger a useEffect if only one of its dependencies changed.
 * See all details here: https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state.
 * @param value the value whose previous version we want to track.
 */
export function usePrevious<T>(value: T) {
  const ref = useRef<T>()
  // useEffect will be executed after the return, thus what's returned in the previous value that was registered.
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
