import React, { FunctionComponent, ReactElement, ReactNode, useState } from 'react'

import { Box, Button, Text } from '../..'
import { InputWithDrop } from '.'
import { DateRangeInputWithDrop } from './DateRangeInputWithDrop/DateRangeInputWithDrop'
import { RangeInputWithDrop } from './RangeInputWithDrop'
import dayjs from 'dayjs'
import { Meta } from '@storybook/react'

export default {
  title: 'Form/InputWithDrop',
  component: InputWithDrop,
  decorators: [
    (component: () => ReactNode): ReactElement => <Box margin="large">{component()}</Box>,
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof InputWithDrop>

const parseDate = (date: string): Date => dayjs(date, 'DD/MM/YYYY', true).toDate()

const items = [
  {
    label: 'La semaine dernière',
    value: { startDate: parseDate('01/01/2020'), endDate: parseDate('07/01/2020') },
  },
  {
    label: 'Le mois dernier',
    value: { startDate: parseDate('01/01/2020'), endDate: parseDate('31/01/2020') },
  },
  {
    label: "L'année dernière",
    value: { startDate: parseDate('01/01/2020'), endDate: parseDate('31/12/2020') },
  },
]

export const Default: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <InputWithDrop updateDropState={setIsOpen} dropState={isOpen}>
      <Box paddingHorizontal="medium" paddingVertical="small">
        <Text>hello world 1</Text>
      </Box>
      <Box paddingHorizontal="medium" paddingVertical="small">
        <Text>hello world 1</Text>
      </Box>
      <Box paddingHorizontal="medium" paddingVertical="small">
        <Text>hello world 1</Text>
      </Box>
      <Box flex={false} padding="medium">
        <Button onClick={() => setIsOpen(false)} variant="secondary">
          Close Drop
        </Button>
      </Box>
    </InputWithDrop>
  )
}

export const DatePickerWithModal: FunctionComponent = () => {
  const [startDate, setStartDate] = useState<Date | undefined>()
  const [endDate, setEndDate] = useState<Date | undefined>()

  const handleSumbit = ({
    startDate,
    endDate,
  }: {
    startDate: Date | undefined
    endDate: Date | undefined
  }): void => {
    setStartDate(startDate)
    setEndDate(endDate)
  }

  return (
    <DateRangeInputWithDrop
      startDate={startDate}
      endDate={endDate}
      items={items}
      maxWidth={8.7}
      showTextArea
      onSubmit={handleSumbit}
    />
  )
}

export const RangPickerWithModal: FunctionComponent = () => {
  const [min, setMin] = useState<number>(0)
  const [max, setMax] = useState<number>(0)

  return (
    <RangeInputWithDrop
      min={min}
      max={max}
      maxWidth={8.7}
      onSubmit={({ min, max }) => {
        setMin(min)
        setMax(max)
      }}
    />
  )
}
