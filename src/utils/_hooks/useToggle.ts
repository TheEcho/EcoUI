import { useCallback, useState } from 'react'

/**
 * Avoid the useCallback boilerplate for a true / false / toggle state.
 */
export const useToggle = (initialValue?: boolean) => {
  const [value, setValue] = useState(initialValue ?? false)

  const setTrue = useCallback(() => setValue(true), [setValue])
  const setFalse = useCallback(() => setValue(false), [setValue])
  const toggle = useCallback(() => setValue(b => !b), [setValue])

  return {
    value,
    setTrue,
    setFalse,
    toggle,
  }
}
