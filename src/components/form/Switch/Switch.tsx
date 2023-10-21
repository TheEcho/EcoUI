import type { ChangeEvent, FunctionComponent } from 'react'

import { StyledContainer, StyledInput, StyledSlider } from './Switch.styled'

type TProps = {
  name?: string
  value?: boolean
  disabled?: boolean
  forwardRef?: React.Ref<HTMLInputElement>
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Switch: FunctionComponent<TProps> = ({
  value,
  forwardRef,
  disabled = false,
  onChange,
  ...props
}) => (
  <StyledContainer>
    <StyledInput
      ref={forwardRef}
      type="checkbox"
      checked={value}
      {...(disabled ? { disabled: true } : { onChange })}
      {...props}
    />
    <StyledSlider disabled={disabled} />
  </StyledContainer>
)

export type TSwitchProps = TProps
