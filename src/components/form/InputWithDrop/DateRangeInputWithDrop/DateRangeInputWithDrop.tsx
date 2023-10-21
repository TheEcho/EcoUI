import dayjs from 'dayjs'
import React, { FunctionComponent, useEffect, useMemo, useState, useCallback } from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

import { ENTER } from '../../../../utils/keyBinding'
import { Box, Icon, Separator, Text } from '../../../core'
import { InputWithDrop } from '..'
import { ActionFooter } from '../_common/ActionFooter/ActionFooter'
import { RecommandedDateList } from '../_common/List/List'
import { IconContainer } from './DateRangeInputWithDrop.styled'
import { checkDateFormat, DATE_FORMAT, InputDate } from './InputDate/InputDate'
import { getFormStates } from './utils'

export type TValue = Date | undefined

export type TItem = {
  label: string
  value: {
    startDate: Date
    endDate: Date
  }
}

type TProps = {
  startDate: TValue
  endDate: TValue
  items?: TItem[]
  showTextArea?: boolean
  maxWidth?: number
  onSubmit: (dates: { startDate: TValue; endDate: TValue }) => void
}

export const DateRangeInputWithDrop: FunctionComponent<TProps> = ({
  startDate,
  endDate,
  items,
  maxWidth,
  onSubmit,
}) => {
  const [displayValue, setDisplayedValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [localStartDate, setLocalStartDate] = useState<TValue>()
  const [localEndDate, setLocalEndDate] = useState<TValue>()
  const [dateError, setDateError] = useState(false)

  const { isSubmitBtnDisabled, isResetBtnDisplayed, hasChronologicalError } = useMemo(
    () => getFormStates(startDate, endDate, localStartDate, localEndDate, dateError),
    [startDate, endDate, localStartDate, localEndDate, dateError],
  )

  const handleStartDateChange = useCallback((date: TValue, hasError: boolean): void => {
    setLocalStartDate(date)
    setDateError(hasError)
  }, [])

  const handleEndDateChange = useCallback((date: TValue, hasError: boolean): void => {
    setLocalEndDate(date)
    setDateError(hasError)
  }, [])

  const handleCancelClick = useCallback((): void => {
    setIsOpen(false)
    setLocalStartDate(startDate)
    setLocalEndDate(endDate)
  }, [endDate, startDate])

  const handleOnSubmit = useCallback((): void => {
    onSubmit({
      startDate: localStartDate,
      endDate: localEndDate,
    })
    setIsOpen(false)
  }, [localEndDate, localStartDate, onSubmit])

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>): void => {
      if (event.keyCode === ENTER) {
        handleOnSubmit()
      }
    },
    [handleOnSubmit],
  )

  const handleResetClick = useCallback((): void => {
    setIsOpen(false)
    setLocalStartDate(undefined)
    setLocalEndDate(undefined)
    onSubmit({ startDate: undefined, endDate: undefined })
  }, [onSubmit])

  const handleResetInput = useCallback(
    (e?: React.MouseEvent<HTMLDivElement>): void => {
      e?.stopPropagation()
      handleResetClick()
    },
    [handleResetClick],
  )

  const handleItemPicked = useCallback(
    ({ value }: TItem): void => {
      handleStartDateChange(value.startDate, false)
      handleEndDateChange(value.endDate, false)
      onSubmit(value)
    },
    [handleEndDateChange, handleStartDateChange, onSubmit],
  )

  const handleLocalValueChange = useCallback((value: string): void => {
    setDisplayedValue(value)
    const isDate = checkDateFormat(value)
    if (isDate) {
      const date = dayjs.utc(value, DATE_FORMAT, true).toDate()
      setLocalStartDate(date)
      setLocalEndDate(date)
    }
  }, [])

  // Keep displayedValue sync with local values.
  useEffect((): void => {
    const startDateStr = startDate ? dayjs(startDate).format('DD/MM/YYYY') : ''
    const endDateStr = endDate ? dayjs(endDate).format('DD/MM/YYYY') : ''
    if (!startDate && !endDate) {
      return setDisplayedValue('')
    }
    if (!startDate) {
      return setDisplayedValue(`< ${endDateStr}`)
    }
    if (!endDate) {
      return setDisplayedValue(`> ${startDateStr}`)
    }
    if (startDate === endDate) {
      return setDisplayedValue(`${startDateStr}`)
    }
    setDisplayedValue(`${startDateStr} -> ${endDateStr}`)
  }, [endDate, startDate])

  // Keep local values sync with props.
  useEffect(() => {
    setLocalStartDate(startDate)
    setLocalEndDate(endDate)
  }, [endDate, startDate])

  return (
    <InputWithDrop
      value={displayValue}
      dropState={isOpen}
      updateDropState={setIsOpen}
      textAreaSize="small"
      textSize="small"
      placeholder="jj/mm/aaaa"
      maxHeight={4.6}
      maxWidth={maxWidth}
      onChange={handleLocalValueChange}
      onKeyDown={handleKeyPress}
      resetBtnClicked={handleResetInput}
    >
      {items && (
        <RecommandedDateList
          items={items}
          onItemPicked={handleItemPicked}
          closeDrop={() => setIsOpen(false)}
        />
      )}
      <Box
        background="background-light"
        paddingVertical="medium"
        paddingHorizontal="sm-medium"
        direction="column"
        flex={false}
      >
        <Box direction="row" align="start" flex={false}>
          <InputDate
            value={localStartDate}
            placeholder="Début"
            onChange={handleStartDateChange}
            onKeyDown={handleKeyPress}
          />
          <IconContainer flex={false}>
            <Icon icon={<ChevronRightIcon />} color="text-light" />
          </IconContainer>
          <InputDate
            value={localEndDate}
            placeholder="Fin"
            onChange={handleEndDateChange}
            onKeyDown={handleKeyPress}
          />
        </Box>
        {hasChronologicalError && (
          <Box flex={false} maxWidth={19.8} marginTop="xsmall">
            <Text size="small" color="primary">
              La date de fin doit être après la date de début
            </Text>
          </Box>
        )}
        <Separator variant="line" />
        <ActionFooter
          isSubmitBtnDisabled={isSubmitBtnDisabled}
          onCancelClick={handleCancelClick}
          onSubmit={handleOnSubmit}
          onResetClick={handleResetClick}
          isResetBtnDisplayed={isResetBtnDisplayed}
        />
      </Box>
    </InputWithDrop>
  )
}

export type TDateInputWithModal = TItem

export default DateRangeInputWithDrop
