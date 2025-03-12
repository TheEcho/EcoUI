import { PropsWithChildren, forwardRef, useEffect, useRef } from 'react'
import { useCallback } from 'react'

import { Drop } from '../../core'
import Input, { InputProps } from '../Input/Input'
import { TextAreaProps } from '../TextArea'
import { StyledContainer } from './InputWithDrop.styled'

export type InputWithDropProps = PropsWithChildren<{
  name?: string
  dropState?: boolean
  updateDropState: (isOpen: boolean) => void
  maxWidth?: number
  maxHeight?: number
  type?: InputProps['type']
  onToggle?: () => void
  onChange?: (str: string) => void
  resetBtnClicked?: (e?: React.MouseEvent<HTMLDivElement>) => void
  onKeyDown?: InputProps['onKeyDown']
}> & Omit<TextAreaProps, 'name' | 'onChange'>

export const InputWithDrop = forwardRef<HTMLInputElement, InputWithDropProps>(({
  name = '',
  value,
  dropState = false,
  updateDropState,
  children,
  maxWidth,
  onChange,
  maxHeight,
  textSize,
  onFocus,
  placeholder,
  resetBtnClicked,
  disabled,
  type,
  onKeyDown,
  ...props
}, ref) => {
  const dropTargetRef = useRef<HTMLDivElement | null>(null)
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

  const closeDrop = useCallback((): void => updateDropState(false), [updateDropState])

  const updateInput = useCallback((_value: string): void => onChange && onChange(_value), [
    onChange,
  ])

  useEffect(() => {
    if (textAreaRef.current && dropState) {
      textAreaRef.current.focus()
    }
  }, [dropState])

  return (
    <>
      <StyledContainer
        ref={dropTargetRef}
        onClick={() => updateDropState(!dropState)}
        width={maxWidth}
        flex={false}
      >
        <Input
          maxWidth={maxWidth}
          value={value}
          onChange={(e) => updateInput(e.target.value)}
          resetBtnClicked={resetBtnClicked}
          ellipsis
          textSize={textSize}
          inputSize="small"
          placeholder={placeholder}
          disabled={(dropState && !onChange) || disabled}
          onKeyDown={onKeyDown}
          type={type}
        />
      </StyledContainer>

      {dropTargetRef.current && dropState && (
        <Drop
          dropTarget={dropTargetRef.current}
          dropStyle="modal"
          targetMargin={4}
          onClickOutside={closeDrop}
        >
          {children}
        </Drop>
      )}
    </>
  )
})
