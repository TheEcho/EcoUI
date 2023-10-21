import {
  FunctionComponent,
  ReactNode,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { SerializedStyles } from '@emotion/react'

import { Box, Icon, Text } from '../../core'
import {
  InputContainer,
  InputContainerProps,
  StyledBox,
  StyledInput,
  StyledInputProps,
} from './Input.styled'
import { useCombinedRefs } from './utils'

export type InputProps = {
  id?: string
  className?: string
  value?: string
  defaultValue?: string
  placeholder?: string
  name?: string
  error?: boolean
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  prefix?: ReactNode | string
  suffix?: ReactNode | string
  maxWidth?: number
  css?: SerializedStyles
  type?: 'text' | 'password' | 'search' | 'number'
  inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'
  forwardRef?: React.Ref<HTMLInputElement>
  containerForwardRef?: React.Ref<HTMLDivElement>
  background?: InputContainerProps['background']
  rounded?: InputContainerProps['rounded']
  textSize?: StyledInputProps['textSize']
  inputSize?: InputContainerProps['inputSize']
  variant?: StyledInputProps['variant']
  textWeight?: StyledInputProps['textWeight']
  textColor?: StyledInputProps['textColor']
  autoFocus?: boolean
  autoComplete?: boolean
  disabled?: StyledInputProps['disabled']
  ellipsis?: StyledInputProps['ellipsis']
  allowDecimal?: boolean
  lang?: HTMLInputElement['lang']
  resetBtnClicked?: (e?: React.MouseEvent<HTMLDivElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void
  onWheel?: (e: React.WheelEvent<HTMLInputElement>) => void
  iconClicked?: () => void
}

export const Input: FunctionComponent<InputProps> = ({
  value,
  error,
  prefix,
  suffix,
  css,
  disabled = false,
  onFocus,
  onBlur,
  onWheel = e => e.currentTarget.blur(),
  background = 'background-lighter',
  rounded = false,
  autoComplete = false,
  textColor = 'text',
  textSize = 'regular',
  textWeight = 'regular',
  inputSize = 'default',
  variant = 'default',
  forwardRef,
  containerForwardRef,
  maxWidth,
  iconClicked,
  resetBtnClicked,
  ellipsis = false,
  allowDecimal = true,
  inputMode,
  ...rest
}) => {
  const [isHover, setIsHover] = useState(false)
  const [isInputFocus, setIsInputFocus] = useState(false)
  const [resetBtnHover, setResetBtnHover] = useState(false)

  const containerRef = useRef<HTMLDivElement | null>(
    containerForwardRef && typeof containerForwardRef !== 'function'
      ? containerForwardRef.current
      : null,
  )
  const combinedContainerRef = useCombinedRefs(containerForwardRef, containerRef)

  const inputRef = useRef<HTMLInputElement | null>(
    forwardRef && typeof forwardRef !== 'function' ? forwardRef.current : null,
  )
  const combinedRef = useCombinedRefs(forwardRef, inputRef)

  useLayoutEffect(() => {
    if (typeof forwardRef === 'function' && inputRef.current) {
      forwardRef(inputRef.current)
    }
  }, [inputRef, forwardRef])

  const focusInput = (): void => inputRef.current?.focus()

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
    onFocus && onFocus(event)
    setIsInputFocus(true)
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    onBlur && onBlur(event)
    setIsInputFocus(false)
  }

  const showResetBtn = useMemo(() => {
    return !!(resetBtnClicked && value && isHover && !disabled)
  }, [resetBtnClicked, value, isHover, disabled])

  const prefixContent = useMemo(() => {
    if (prefix) {
      return typeof prefix === 'string' ? (
        <Text color="text-light">{prefix}</Text>
      ) : (
        <StyledBox flex={false} onClick={iconClicked} textSize={textSize}>
          {prefix}
        </StyledBox>
      )
    }
  }, [prefix, iconClicked, textSize])

  const suffixContent = useMemo(() => {
    if (suffix) {
      return typeof suffix === 'string' ? (
        <Text color="text-light">{suffix}</Text>
      ) : (
        <StyledBox flex={false} onClick={iconClicked} textSize={textSize}>
          {suffix}
        </StyledBox>
      )
    }
  }, [suffix, iconClicked, textSize])

  return (
    <InputContainer
      css={css}
      error={error}
      variant={variant}
      background={background}
      ref={combinedContainerRef}
      rounded={rounded}
      textColor={textColor}
      disabled={disabled}
      inputSize={inputSize}
      maxWidth={maxWidth}
      showResetBtn={showResetBtn}
      onClick={() => focusInput()}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      isInputFocus={isInputFocus}
    >
      {prefixContent}
      <StyledInput
        ref={combinedRef}
        textWeight={textWeight}
        textSize={textSize}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onWheel={onWheel}
        variant={variant}
        value={value}
        autoComplete={autoComplete ? 'on' : 'off'}
        textColor={textColor}
        disabled={disabled}
        ellipsis={ellipsis}
        step={allowDecimal ? 'any' : '1'}
        inputMode={inputMode}
        {...rest}
      />
      {showResetBtn && !suffixContent && (
        <Box
          flex={false}
          onClick={resetBtnClicked}
          onMouseLeave={() => setResetBtnHover(false)}
          onMouseEnter={() => setResetBtnHover(true)}
        >
          <Icon
            icon={<XMarkIcon />}
            size={inputSize === 'small' ? 'small' : 'medium'}
            color={resetBtnHover ? 'border-dark' : 'border-light'}
          />
        </Box>
      )}
      {suffixContent}
    </InputContainer>
  )
}

/**
 * Use this input when the field can be clear
 *
 **/
export type InputNullableProps = Omit<InputProps, 'onChange' | 'value'> & {
  onChange?: (value: string | undefined | null) => void
  value?: string | null | undefined
}

export const InputNullable: FunctionComponent<InputNullableProps> = ({
  onChange,
  value,
  ...rest
}) => {
  const _onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      return e.target.value === '' ? onChange?.(null) : onChange?.(e.target.value)
    },
    [onChange],
  )
  return <Input {...rest} onChange={_onChange} value={value ?? undefined} />
}

export default Input
