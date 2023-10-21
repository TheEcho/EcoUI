import { FunctionComponent } from 'react'
import InputMask, { Props as MaskOptions } from 'react-input-mask'

import Input, { InputProps } from './Input'

type TProps = { mask?: string } & InputProps & Partial<Omit<MaskOptions, 'autoComplete' | 'prefix'>>

export const InputWithMask: FunctionComponent<TProps> = ({
  value,
  onChange,
  onFocus,
  onBlur,
  mask = '',
  maskChar,
  alwaysShowMask,
  forwardRef,
  onKeyPress,
  onKeyDown,
  disabled,
  ...props
}) => {
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
    inputRef: forwardRef,
  }

  return mask ? (
    <InputMask {...inputProps} {...maskProps}>
      <Input {...props} />
    </InputMask>
  ) : (
    <Input {...props} {...inputProps} forwardRef={forwardRef} />
  )
}

export type TInputWithMaskProps = TProps
