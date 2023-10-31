import { identity } from 'lodash'
import React, { FC, useMemo, useState } from 'react'

import styled from '@emotion/styled'
import { HomeIcon } from '@heroicons/react/24/outline'

import { Box } from '../../core/Box'
import {
  ContentSearchItem,
  ContentSearchItemProps,
} from '../../core/ContentSearchItem/ContentSearchItem'
import { Text } from '../../core/Text'
import { InputSearchDropdown } from './InputSearchDropdown'
import { Icon } from '../../core'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Form/InputSearchDropdown',
  component: InputSearchDropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof InputSearchDropdown>

const items = [
  'aze',
  'rty',
  'uio',
  'fgh',
  'mlj',
  'fewfw',
  'ewgw',
  'gerge',
  'gsdxd',
  'fdzgdzhre',
  'j65ere',
]

const HoveredDiv = styled.div(`
  :hover {
    background: grey;
  }
`)

const DefaultItem: FC<{ item: string; selected: boolean }> = ({ item, selected }) => (
  <HoveredDiv>
    <Text weight={selected ? 'bold' : 'regular'}>{item}</Text>
  </HoveredDiv>
)

const useBasicDropdownState = () => {
  const [query, setQuery] = useState('')
  const [value, setValue] = useState('')

  const filteredItems = useMemo(() => {
    return query ? items.filter(i => i.toLowerCase().includes(query.toLowerCase())) : items
  }, [query])

  return { query, setQuery, value, setValue, filteredItems }
}

export const BasicTextSearchDropdown: FC = () => {
  const { setQuery, value, setValue, filteredItems } = useBasicDropdownState()

  return (
    <Box direction="column" gap="large" padding="xlarge">
      <InputSearchDropdown
        placeholder="Search placeholder"
        value={value}
        items={filteredItems}
        getId={identity}
        ItemRenderer={DefaultItem}
        onChange={setValue}
        equals={(a, b) => a === b}
        onQueryChange={setQuery}
      />
      Selected value : '{value}'
    </Box>
  )
}

export const BasicTextSearchDropdownWithCreateButton: FC = () => {
  const { setQuery, value, setValue, filteredItems } = useBasicDropdownState()

  return (
    <Box direction="column" gap="large" padding="xlarge">
      <InputSearchDropdown
        placeholder="Search placeholder"
        value={value}
        items={filteredItems}
        getId={identity}
        ItemRenderer={DefaultItem}
        onChange={setValue}
        equals={(a, b) => a === b}
        onQueryChange={setQuery}
        buttonLabel="Créer un TOTO"
        onButtonClick={() => alert(`Toto créé`)}
      />
      Selected value : '{value}'
    </Box>
  )
}

const houseIcon = (
  <Icon
    icon={<HomeIcon />}
    size="large"
    color="icon-blue"
    iconColor="background"
  />
)

interface Person extends ContentSearchItemProps {
  id: string
}

const people: readonly Person[] = [
  {
    id: '1',
    icon: houseIcon,
    title: 'Pierre Emmanuel',
    subtitle: 'T4 avec toit terrasse · 1, place de la comédie 70123 Paris',
    description: '#C34543',
  },
  {
    id: '2',
    icon: houseIcon,
    title: 'Nicolas Kuss',
    subtitle: 'T1 · 3, rue des gendarmes 75007 Paris',
    description: '#P99851',
  },
  {
    id: '3',
    icon: houseIcon,
    title: 'France Ryan',
    subtitle: 'T2 · 15, allée des marronniers 75001 Paris',
    description: '#V66321',
  },
]

const PersonRenderer: FC<{ item: Person; selected: boolean }> = ({ item, selected }) => (
  <ContentSearchItem {...item} isSelected={selected} />
)

export const PeopleSearchDropdownWithCreateButton: FC = () => {
  const [query, setQuery] = useState('')
  const [value, setValue] = useState<Person | undefined>()

  const filteredItems = useMemo(() => {
    return query
      ? people.filter(
          ({ title, description, subtitle }) =>
            title.toLowerCase().includes(query) ||
            (description && description.toLowerCase().includes(query)) ||
            (subtitle && subtitle.toLowerCase().includes(query)),
        )
      : people
  }, [query])

  return (
    <Box direction="column" gap="large" padding="xlarge">
      <InputSearchDropdown
        placeholder="Search people"
        value={value}
        items={filteredItems}
        getId={p => p.id}
        ItemRenderer={PersonRenderer}
        onChange={setValue}
        equals={(a, b) => a.id === b.id}
        onQueryChange={setQuery}
        buttonLabel="Créer un bail"
        onButtonClick={() => alert(`Bail créé`)}
      />
      Selected value : '{value?.title}'
    </Box>
  )
}
