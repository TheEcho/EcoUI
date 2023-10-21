import { FunctionComponent, useCallback, useEffect, useMemo, useState } from 'react'

import { ENTER } from '../../../../utils/keyBinding'
import { Box, Separator, Text } from '../../..'
import { InputProps } from '../../Input/Input'
import { ActionFooter } from '../_common'
import { InputWithDrop } from '../InputWithDrop'
import { InputNumber } from './InputNumber/InputNumber'
import { getBtnStats, getLocalValue } from './utils'

type TProps = {
  min: number
  max: number
  onSubmit: (values: { min: number; max: number }) => void
  maxWidth?: number
}

export const RangeInputWithDrop: FunctionComponent<TProps> = ({ min, max, maxWidth, onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [localValue, setLocalValue] = useState('')
  const [localMin, setLocalMin] = useState<number>(0)
  const [localMax, setLocalMax] = useState<number>(0)

  const { submitDisabled, orderError, showResetBtn } = useMemo(
    () => getBtnStats({ min, max, localMin, localMax }),
    [min, max, localMin, localMax],
  )

  const handleOnSubmit = useCallback((): void => {
    if (localValue && !localMin && !localMax) {
      onSubmit({ min: 0, max: 0 })
      setIsOpen(false)
      return
    }

    onSubmit({ min: localMin, max: localMax })
    setIsOpen(false)
  }, [localMax, localMin, localValue, onSubmit])

  const handleResetClick = useCallback((): void => {
    onSubmit({ max: 0, min: 0 })
    setIsOpen(false)
  }, [onSubmit])

  const handleCancelClick = useCallback((): void => {
    setLocalMin(min)
    setLocalMax(max)
    setIsOpen(false)
  }, [max, min])

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>): void => {
      if (event.keyCode === ENTER) {
        handleOnSubmit()
      }
    },
    [handleOnSubmit],
  )

  const handleLocalValueChange = useCallback((value: string): void => {
    setLocalValue(value)
    setLocalMin(+value)
    setLocalMax(+value)
  }, [])

  useEffect(() => {
    setLocalValue(getLocalValue({ min, max }))
  }, [min, max])

  useEffect(() => {
    setLocalMin(min)
    setLocalMax(max)
  }, [min, max])

  const inputType: InputProps['type'] = useMemo(() => {
    if (isNaN(+localValue)) {
      return 'text'
    }

    return 'number'
  }, [localValue])

  return (
    <InputWithDrop
      value={localValue}
      dropState={isOpen}
      updateDropState={setIsOpen}
      textAreaSize="small"
      textSize="small"
      maxHeight={4.6}
      maxWidth={maxWidth}
      onChange={handleLocalValueChange}
      onKeyDown={handleKeyPress}
      type={inputType}
      resetBtnClicked={handleResetClick}
    >
      <Box
        background="background-light"
        paddingVertical="medium"
        paddingHorizontal="sm-medium"
        direction="column"
        flex={false}
      >
        <Box direction="row" align="start" flex={false} gap="medium">
          <Box direction="column" gap="small" flex={false}>
            <InputNumber
              placeholder="Min"
              value={localMin}
              onChange={v => (!!v ? setLocalMin(v) : setLocalMin(0))}
              onKeyDown={handleKeyPress}
              maxWidth={8.7}
              ellipsis
              textSize="small"
              inputSize="small"
            />
          </Box>
          <Box direction="column" gap="small" flex={false}>
            <InputNumber
              placeholder="Max"
              value={localMax}
              onChange={v => (!!v ? setLocalMax(v) : setLocalMax(0))}
              onKeyDown={handleKeyPress}
              maxWidth={8.7}
              ellipsis
              textSize="small"
              inputSize="small"
            />
          </Box>
        </Box>
        {orderError && (
          <Box flex={false} maxWidth={19.8} marginTop="xsmall">
            <Text size="small" color="primary">
              Le nombre minimum doit être inférieur ou égal au nombre maximum
            </Text>
          </Box>
        )}
        <Separator variant="line" />
        <ActionFooter
          isSubmitBtnDisabled={submitDisabled}
          onCancelClick={handleCancelClick}
          onSubmit={handleOnSubmit}
          onResetClick={handleResetClick}
          isResetBtnDisplayed={showResetBtn}
        />
      </Box>
    </InputWithDrop>
  )
}

export type TRangInputWithDropProps = TProps

export default RangeInputWithDrop
