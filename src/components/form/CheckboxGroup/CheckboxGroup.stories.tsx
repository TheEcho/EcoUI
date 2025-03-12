import { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box } from '../../core'
import { Input } from '..'
import { CheckboxProps } from '../Checkbox'
import { CheckboxGroup } from './CheckboxGroup'
import { Meta } from '@storybook/react'

export default {
  title: 'Form/CheckboxGroup',
  decorators: [withKnobs],
  component: CheckboxGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxGroup>

export const Simple: FunctionComponent = () => {
  const options: CheckboxProps[] = [
    {
      id: 'ascenceur',
      value: 'ascenseur',
      label: 'Ascenseur',
      checked: false,
    },
    {
      id: 'escalier',
      value: 'escalier',
      label: 'Escalier',
      checked: false,
    },
    {
      id: 'piscine',
      value: 'piscine',
      label: 'Piscine',
      checked: true,
    },
    {
      id: 'spa',
      value: 'spa',
      label: 'Spa',
      checked: true,
    },
  ]
  return (
    <Box margin="small">
      <CheckboxGroup
        name="options-choice"
        description="Vos options"
        options={options}
        direction="row"
      />
    </Box>
  )
}

export const VerticalWithInput: FunctionComponent = () => {
  const options: CheckboxProps[] = [
    {
      id: 'montant',
      value: 'montant',
      label: 'Le montant',
      checked: true,
      optionalElement: <Input suffix="€ HT" />,
    },
    {
      id: 'poste',
      value: 'poste',
      label: 'Les frais d’expédition par la poste',
      checked: false,
    },
    {
      id: 'transporteur',
      value: 'transporteur',
      label: 'Les frais d’expédition par un autre transporteur',
      checked: false,
    },
  ]
  return (
    <Box margin="small">
      <CheckboxGroup
        name="options-choice"
        description="Vous connaissez…"
        options={options}
        direction="column"
      />
    </Box>
  )
}
export const VerticalWithError: FunctionComponent = () => {
  const options: CheckboxProps[] = [
    {
      id: 'montant',
      value: 'montant',
      label: 'Le montant',
      checked: false,
    },
    {
      id: 'poste',
      value: 'poste',
      label: 'Les frais d’expédition par la poste',
      checked: false,
    },
    {
      id: 'transporteur',
      value: 'transporteur',
      label: 'Les frais d’expédition par un autre transporteur',
      checked: false,
    },
  ]
  return (
    <Box margin="small">
      <CheckboxGroup
        name="panne"
        description="Vous préférez avoir…"
        options={options}
        error="Vous devez faire un choix. Désolé."
        direction="column"
      />
    </Box>
  )
}
