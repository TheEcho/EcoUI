import { FunctionComponent, forwardRef } from 'react'
import InputMask, { Props as MaskOptions } from 'react-input-mask'

import Input, { InputProps } from './Input'

type TProps = { mask?: string } & InputProps & Partial<Omit<MaskOptions, 'autoComplete' | 'prefix'>>

export const InputWithMask = forwardRef<HTMLInputElement, TProps>(({
  value,
  onChange,
  onFocus,
  onBlur,
  mask = '',
  maskChar,
  alwaysShowMask,
  onKeyPress,
  onKeyDown,
  disabled,
  ...props
}, ref) => {
  const inputProps = {
    value,
    onChange,
    onBlur,
    onFocus,
    onKeyPress,
    onKeyDown,
    disabled,
  }

  const maskProps = {
    mask,
    maskChar,
    alwaysShowMask,
    inputRef: ref,
  }

  return mask ? (
    <InputMask {...inputProps} {...maskProps}>
      <Input {...props} />
    </InputMask>
  ) : (
    <Input {...props} {...inputProps} ref={ref} />
  )
})

export type TInputWithMaskProps = TProps
