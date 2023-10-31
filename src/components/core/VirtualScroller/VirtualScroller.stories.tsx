import React, { FunctionComponent, useCallback, useMemo, useState } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box } from '../../core/Box'
import { Heading } from '../../core/Heading'
import { Input } from '../../form/Input'
import { RangeInputWithDrop } from '../../form/InputWithDrop/RangeInputWithDrop'
import { Select, SelectOption } from '../../form/Select'
import Button from '../Button'
import VirtualScroller from './VirtualScroller'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Virtual Scroller',
  decorators: [withKnobs],
  component: VirtualScroller,
  tags: ['autodocs'],
} satisfies Meta<typeof VirtualScroller>

const items: { label: string; value: number }[] = []
for (let i = 0; i < 1000; i++) {
  items.push({
    label: i.toString(),
    value: i,
  })
}

export const Simple: FunctionComponent = () => {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(items.length)
  const [sortOrder, setSortOrder] = useState<number>(1)

  const filteredItems = useMemo(
    () =>
      items
        .filter((item) => {
          return item.value >= min && item.value < max
        })
        .sort((item1, item2) => (item1.value - item2.value) * sortOrder),
    [max, min, sortOrder],
  )

  const settings = useMemo(
    () => ({
      minIndex: 0,
      maxIndex: filteredItems.length,
      itemHeight: 30,
    }),
    [filteredItems.length],
  )

  const getData = useCallback(
    (indexStart: number, indexBottom: number) => filteredItems.slice(indexStart, indexBottom + 1),
    [filteredItems],
  )

  const getRow = useCallback(
    (item: { label: string }, index?: number) => (
      <div key={index} style={{ height: '30px' }}>
        {item.label}
      </div>
    ),
    [],
  )

  const [startIndex, setStartIndex] = useState(0)
  const [startIndexInput, setStartIndexInput] = useState(startIndex)

  return (
    <Box direction="column" gap="medium">
      <Box direction="column" gap="medium">
        <Heading variant="card-header-title">Aller à</Heading>
        <Box direction="row" gap="medium">
          <Input
            placeholder="Entrer un index..."
            type="search"
            onChange={(e) => setStartIndexInput(parseInt(e.target.value, 10))}
          />
          <Button label="GO" onClick={() => setStartIndex(startIndexInput)} />
        </Box>
      </Box>
      <Box direction="column" gap="medium">
        <Heading variant="card-header-title">Filtrer</Heading>
        <RangeInputWithDrop
          maxWidth={8}
          min={min || 0}
          max={max || 0}
          onSubmit={({ min: _min, max: _max }: { min: number; max: number }) => {
            setMin(_min)
            setMax(_max)
          }}
        />
      </Box>
      <Box direction="column" gap="medium">
        <Heading variant="card-header-title">Trier</Heading>
        <Box margin="small" maxWidth={8}>
          <Select
            name="trier"
            value={sortOrder.toString()}
            onChange={(e) => setSortOrder(parseInt(e.target.value, 10))}
          >
            <SelectOption value="1">ASC</SelectOption>
            <SelectOption value="-1">DESC</SelectOption>
          </Select>
        </Box>
      </Box>
      <div style={{ height: '500px', border: '1px black solid' }}>
        <VirtualScroller
          settings={settings}
          getRow={getRow}
          getData={getData}
          startIndex={startIndex}
        />
      </div>
    </Box>
  )
}
