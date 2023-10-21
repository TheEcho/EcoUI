import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, delay = 200, exception?: T): T => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(
    () => {
      // Set debouncedValue to value (passed in) after the specified delay
      // If the value is the exception, do not wait
      if (exception !== undefined && value === exception) {
        setDebouncedValue(value)
      } else {
        // Return a cleanup function that will be called every time ...
        // ... useEffect is re-called. useEffect will only be re-called ...
        // ... if value changes (see the inputs array below).
        // This is how we prevent debouncedValue from changing if value is ...
        // ... changed within the delay period. Timeout gets cleared and restarted.
        // To put it in context, if the user is typing within our app's ...
        // ... search box, we don't want the debouncedValue to update until ...
        // ... they've stopped typing for more than 500ms.
        const handler = setTimeout(() => {
          setDebouncedValue(value)
        }, delay)
        return () => {
          clearTimeout(handler)
        }
      }
    },
    // Only re-call effect if value changes
    // You could also add the "delay" var to inputs array if you ...
    // ... need to be able to change that dynamically.
    /** @deprecated */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value],
  )

  return debouncedValue
}

export const useDebounceBoolean = (value: boolean, delay?: number, exception?: boolean): boolean =>
  useDebounce<boolean>(value, delay, exception)

export const useDebounceNumber = (value: number, delay?: number): number =>
  useDebounce<number>(value, delay)

export const useDebounceString = (value: string, delay?: number): string =>
  useDebounce<string>(value, delay)
