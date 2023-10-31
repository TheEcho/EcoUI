import React, { FocusEvent, FunctionComponent, ReactNode, forwardRef, useState } from 'react'

import { TTextSize, TTextWeight } from '../../../shared/tokens/text'
import { Text } from '../../core'
import { StyledTextArea, TextAreaContainer } from './TextArea.styled'

export type TextAreaProps = {
  id?: string
  name: string
  value?: string
  defaultValue?: string
  placeholder?: string
  error?: string | boolean
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  prefix?: ReactNode | string
  suffix?: ReactNode | string
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  onKeyPress?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void
  variant?: 'default' | 'no-border'
  textSize?: TTextSize
  textWeight?: TTextWeight
  resize?: boolean
  height?: number
  textAreaSize?: 'small' | 'default'
  disabled?: boolean
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  error,
  name,
  value,
  defaultValue,
  onBlur,
  onFocus,
  prefix,
  suffix,
  variant = 'default',
  height = 10,
  textAreaSize = 'default',
  onChange,
  disabled = false,
  ...rest
}, ref) => {
  const [active, setActive] = useState(false)
  const handleOnFocus = (event: FocusEvent<HTMLTextAreaElement>): void => {
    setActive(true)
    if (onFocus) {
      onFocus(event)
    }
  }
  const handleOnBlur = (event: FocusEvent<HTMLTextAreaElement>): void => {
    setActive(false)
    if (onBlur) {
      onBlur(event)
    }
  }
  let prefixContent = prefix

  if (typeof prefix === 'string') {
    prefixContent = <Text color="text-light">{prefix}</Text>
  }
  let suffixContent = suffix

  if (typeof suffix === 'string') {
    suffixContent = <Text color="text-light">{suffix}</Text>
  }

  return (
    <TextAreaContainer
      textAreaSize={textAreaSize}
      error={error}
      active={active}
      variant={variant}
      hasChildren={!!(prefixContent || suffixContent)}
      height={height}
    >
      {prefixContent}
      <StyledTextArea
        {...rest}
        onChange={onChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        ref={ref}
        name={name}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
      />
      {suffixContent}
    </TextAreaContainer>
  )
})
