import { forwardRef, type ChangeEvent } from 'react'

import { StyledContainer, StyledInput, StyledSlider } from './Switch.styled'

type TProps = {
  name?: string
  value?: boolean
  disabled?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Switch = forwardRef<HTMLInputElement, TProps>(({
  value,
  disabled = false,
  onChange,
  ...props
}, ref) => (
  <StyledContainer>
    <StyledInput
      ref={ref}
      type="checkbox"
      checked={value}
      {...(disabled ? { disabled: true } : { onChange })}
      {...props}
    />
    <StyledSlider disabled={disabled} />
  </StyledContainer>
))

export type TSwitchProps = TProps
