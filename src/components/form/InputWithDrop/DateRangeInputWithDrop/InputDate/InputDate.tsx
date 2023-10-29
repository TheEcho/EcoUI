import dayjs from 'dayjs'
import { FunctionComponent, useEffect, useRef, useState } from 'react'

import { usePrevious } from '../../../../../utils/_hooks/usePrevious'
import { Box, Text } from '../../../..'
import { InputProps, InputWithMask } from '../../../Input'
import { isValueEmpty } from '../utils'
dayjs.locale('fr')

const DEFAULT_VALUE = '__/__/____'
export const DATE_FORMAT = 'DD/MM/YYYY'

export const checkDateFormat = (date: string | undefined): boolean => {
  if (!date) {
    return false
  }

  return dayjs.utc(date, DATE_FORMAT, true).isValid()
}

export const hasDateError = (date: string | undefined): boolean =>
  !!date && date.length > 0 && date !== DEFAULT_VALUE && !checkDateFormat(date)

type TProps = {
  value: Date | null | undefined
  onChange: (value: Date | undefined, hasError: boolean) => void
  placeholder?: string
  flex?: boolean
} & Omit<InputProps, 'value' | 'onChange' | 'placeholder' | 'error'>

/**
 * @deprecated use DateInput from shared/frontend/components/common/DateInput/DateInput.tsx instead
 */
export const InputDate: FunctionComponent<TProps> = ({
  value,
  onChange,
  placeholder,
  flex = false,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [localValue, setLocalValue] = useState<string>()
  const [isFocus, setIsFocus] = useState(false)
  const [shouldDisplayError, setShouldDisplayError] = useState(false)
  const prevValue = usePrevious(value)

  const onBlur = (): void => {
    setIsFocus(false)
    if (isValueEmpty(localValue)) {
      return
    }

    setShouldDisplayError(hasDateError(localValue))
  }

  const handleChange = (newValue: string): void => {
    setLocalValue(newValue)
    const isDate = checkDateFormat(newValue)
    onChange(
      isDate ? dayjs.utc(newValue, DATE_FORMAT, true).toDate() : undefined,
      hasDateError(newValue),
    )

    if (shouldDisplayError) {
      setShouldDisplayError(false)
    }
  }

  // Keep localValue sync with value.
  useEffect(() => {
    if (prevValue === value) {
      return
    }
    if (!value) {
      return
    }
    const valueAsString = dayjs.utc(value).format(DATE_FORMAT)
    setLocalValue(valueAsString)
  }, [value, prevValue, localValue])

  props.autoComplete

  return (
    <Box direction="column" gap="small" flex={flex}>
      <InputWithMask
        mask="99/99/9999"
        value={localValue || DEFAULT_VALUE}
        onChange={e => handleChange(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={onBlur}
        error={shouldDisplayError}
        inputSize="small"
        textSize="small"
        placeholder={isFocus ? 'jj/mm/aaaa' : placeholder}
        {...(!flex && { maxWidth: 8.7 })}
        resetBtnClicked={() => handleChange(DEFAULT_VALUE)}
        ref={inputRef}
        ellipsis
        {...props}
      />
      {shouldDisplayError && !isValueEmpty(localValue) && (
        <Box flex={false} {...(!flex && { maxWidth: 8.7 })}>
          <Text size="small" color="primary">
            Date invalide
          </Text>
        </Box>
      )}
    </Box>
  )
}
