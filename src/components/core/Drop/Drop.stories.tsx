import React, { FunctionComponent, useRef, useState } from 'react'

import { Input } from '../../form/Input'
import { ActionList, ActionListItem } from '..'
import { Box } from '../Box'
import { CardSection } from '../Card'
import { Text } from '../Text'
import { Drop } from './Drop'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Drop',
  component: Drop,
  tags: ['autodocs'],
} satisfies Meta<typeof Drop>

export const DropClassic: FunctionComponent = () => {
  const [isDropOpen, setIsDropOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <Box flex={false}>
      <Box
        padding="medium"
        background="primary"
        direction="column"
        flex={false}
        ref={ref}
        onClick={() => setIsDropOpen(!isDropOpen)}
      >
        <Text color="text-lighter">Click me</Text>
      </Box>
      {ref.current && isDropOpen && (
        <Drop dropTarget={ref.current} onClickOutside={() => setIsDropOpen(false)}>
          <Box direction="column" padding="small">
            <Text>Drop 1</Text>
            <Text>Drop 1</Text>
          </Box>
        </Drop>
      )}
    </Box>
  )
}

export const DropScrollable: FunctionComponent = () => {
  const [isDropOpen, setIsDropOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const NUMBER_OF_ITEMS = 100
  const items = [...Array(NUMBER_OF_ITEMS)].map((_, idx) => <Text key={idx}>Drop {idx}</Text>)

  return (
    <Box flex={false}>
      <Box
        padding="medium"
        background="primary"
        direction="column"
        flex={false}
        ref={ref}
        onClick={() => setIsDropOpen(!isDropOpen)}
      >
        <Text color="text-lighter">Click me</Text>
      </Box>
      {ref.current && isDropOpen && (
        <Drop dropTarget={ref.current} onClickOutside={() => setIsDropOpen(false)} maxHeight={200}>
          <Box direction="column" padding="small">
            {items}
          </Box>
        </Drop>
      )}
    </Box>
  )
}

export const DropWithActionList: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <Box ref={ref} width={30}>
      <Input onFocus={() => setIsOpen(true)} />
      {ref.current && isOpen && (
        <Drop dropTarget={ref.current} fitTarget onClickOutside={() => setIsOpen(false)}>
          <ActionList>
            <ActionListItem
              icon={'caticon-eau'}
              title="I'am a long title with a lot of useless word"
              label={['Label1', 'Label1', 'Label1']}
            />
            <ActionListItem
              icon={'caticon-eau'}
              title="I'am a long title with a lot of useless word"
            />
            <ActionListItem
              icon={'caticon-eau'}
              title="I'am a long title with a lot of useless word"
            />
          </ActionList>
        </Drop>
      )}
    </Box>
  )
}

export const DropWithSection: FunctionComponent = () => {
  const [isDropOpen, setIsDropOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  return (
    <Box flex={false}>
      <Box
        direction="column"
        padding="medium"
        background="primary"
        flex={false}
        ref={ref}
        onClick={() => setIsDropOpen(!isDropOpen)}
      >
        <Text color="text-lighter">Click me</Text>
      </Box>
      {ref.current && isDropOpen && (
        <Drop dropTarget={ref.current} onClickOutside={() => setIsDropOpen(false)}>
          <CardSection direction="column" padding="small">
            <Text>Drop 1</Text>
            <Text>Drop 2</Text>
          </CardSection>
          <CardSection direction="column" padding="small">
            <Text>Drop 3</Text>
            <Text>Drop 4</Text>
          </CardSection>
        </Drop>
      )}
    </Box>
  )
}
