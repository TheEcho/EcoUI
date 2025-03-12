import fr from 'date-fns/locale/fr'
import { FunctionComponent } from 'react'
import ReactDatePicker, { registerLocale } from 'react-datepicker'

import { DatePickerWrapper } from './DatePicker.styled'

registerLocale('fr', fr)

type DatePickerProps = ReactDatePicker['props']
type CustomDatePickerProps = Omit<DatePickerProps, 'selectsRange'> & {
  selectsRange?: boolean | undefined
}

/**
 * Date picker
 * @param datePickerProps
 */
export const DatePicker: FunctionComponent<CustomDatePickerProps> = ({
  locale = 'fr',
  ...datePickerProps
}) => (
  <DatePickerWrapper>
    <ReactDatePicker {...datePickerProps} {...{ locale }} />
  </DatePickerWrapper>
)
