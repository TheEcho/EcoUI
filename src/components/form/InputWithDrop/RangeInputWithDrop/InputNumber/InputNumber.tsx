import { forwardRef, useCallback, useEffect, useState } from 'react'

import { Input } from '../../../..'
import { InputProps } from '../../../Input/Input'

type TProps = {
  value: number | null | undefined
  onChange: (number: number | null) => void
} & Omit<InputProps, 'value' | 'onChange' | 'error'>

export const InputNumber = forwardRef<HTMLInputElement, TProps>(({
  value,
  onChange,
  ...props
}, ref) => {
  const [strValue, setStrValue] = useState<string>(value + '')

  // When props.value changes, update the displayed value.
  useEffect(() => {
    setStrValue(currentValue => {
      const currentFloat = Number.parseFloat(currentValue)

      // Handle cases where `currentValue: '1' and strInputValue: '1.0'`
      if (currentFloat === value) {
        return currentValue
      }

      return value + ''
    })
  }, [setStrValue, value])

  const onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void = useCallback(
    e => {
      const rawValue = e.target.value
      setStrValue(rawValue)
      const numberValue = !!rawValue ? +rawValue : null
      return onChange(numberValue)
    },
    [onChange],
  )

  const onResetInput = useCallback(() => {
    onChange(0)
  }, [onChange])

  return (
    <Input
      value={strValue}
      type="number"
      ref={ref}
      onChange={onInputChange}
      resetBtnClicked={onResetInput}
      {...props}
    />
  )
})

export type TInputNumberProps = TProps
