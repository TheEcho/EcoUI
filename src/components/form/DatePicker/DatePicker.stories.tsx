import { FunctionComponent, useState } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { CardSection } from '../../core/Card/CardWithSection'
import { Heading } from '../../core/Heading'
import { DatePicker } from './DatePicker'
import { Meta } from '@storybook/react'

export default {
  title: 'Form/DatePicker',
  decorators: [withKnobs],
  component: DatePicker,
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>

export const Default: FunctionComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const onChange = (date: Date) => setSelectedDate(date)
  return (
    <>
      <Heading variant="card-header-title">Normal</Heading>
      <CardSection
        padding="none"
        background="background-light"
        maxWidth={30}
        width={40}
        gap="large"
      >
        <DatePicker selected={selectedDate} onChange={onChange} inline />
      </CardSection>
    </>
  )
}

export const MinDate: FunctionComponent = () => {
  const [minDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const onChange = (date: Date) => setSelectedDate(date)
  return (
    <>
      <Heading variant="card-header-title">Date minimale</Heading>
      <CardSection
        padding="none"
        background="background-light"
        maxWidth={30}
        width={40}
        gap="large"
      >
        <DatePicker selected={selectedDate} minDate={minDate} onChange={onChange} inline />
      </CardSection>
    </>
  )
}

export const DateRange: FunctionComponent = () => {
  const [startDate, setStartDate] = useState(new Date('Thu Feb 03 2022 16:00:22 GMT+0100'))
  const [endDate, setEndDate] = useState(new Date('Thu Feb 10 2022 16:00:22 GMT+0100'))

  const onChange = (dates: Array<Date> | Date | null) => {
    if (Array.isArray(dates)) {
      const [start, end] = dates
      setStartDate(start)
      setEndDate(end)
    }
  }

  return (
    <>
      <Heading variant="card-header-title">Date range</Heading>
      <CardSection
        padding="none"
        background="background-light"
        maxWidth={30}
        width={40}
        gap="large"
      >
        <DatePicker
          selected={endDate}
          startDate={startDate}
          endDate={endDate}
          inline
          selectsRange
          onChange={onChange}
        />
      </CardSection>
    </>
  )
}
