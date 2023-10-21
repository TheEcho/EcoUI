import dayjs from 'dayjs'

import { TValue } from './DateRangeInputWithDrop'

type TRes = {
  isSubmitBtnDisabled: boolean
  isResetBtnDisplayed: boolean
  hasChronologicalError: boolean
}

export const isValueEmpty = (value: undefined | string | Date): boolean => {
  return !value
}

const isResetBtnDisplay = (
  startDate: TValue,
  endDate: TValue,
  localStartDate: TValue,
  localEndDate: TValue,
  hasError: boolean,
): boolean =>
  !hasError && // Do not display reset btn if some date field has an error because it means it got edited to some string that is not a date yet.
  (!!startDate || !!endDate) &&
  startDate === localStartDate &&
  endDate === localEndDate

export const getFormStates = (
  startDate: TValue,
  endDate: TValue,
  localStartDate: TValue,
  localEndDate: TValue,
  hasError: boolean,
): TRes => {
  const hasChronologicalError =
    !!localEndDate && !!localStartDate && dayjs(localEndDate).diff(dayjs(localStartDate)) < 0
  return {
    isSubmitBtnDisabled: hasError || hasChronologicalError || (!localStartDate && !localEndDate),
    isResetBtnDisplayed: isResetBtnDisplay(
      startDate,
      endDate,
      localStartDate,
      localEndDate,
      hasError,
    ),
    hasChronologicalError: hasChronologicalError,
  }
}
