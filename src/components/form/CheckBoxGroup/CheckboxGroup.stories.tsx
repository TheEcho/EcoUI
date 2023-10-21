import React, { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box } from '../../core'
import { Input } from '../../form'
import { CheckBoxProps } from '../CheckBox'
import { CheckBoxGroup } from './CheckboxGroup'

export default {
  title: 'Core/Form/CheckBoxGroup',
  decorators: [withKnobs],
  component: CheckBoxGroup,
}

export const Simple: FunctionComponent = () => {
  const options: CheckBoxProps[] = [
    {
      id: 'ascenceur',
      value: 'ascenseur',
      label: 'Ascenseur',
      isSelected: false,
    },
    {
      id: 'escalier',
      value: 'escalier',
      label: 'Escalier',
      isSelected: false,
    },
    {
      id: 'piscine',
      value: 'piscine',
      label: 'Piscine',
      isSelected: true,
    },
    {
      id: 'spa',
      value: 'spa',
      label: 'Spa',
      isSelected: true,
    },
  ]
  return (
    <Box margin="small">
      <CheckBoxGroup
        name="options-choice"
        description="Vos options"
        options={options}
        direction="row"
      />
    </Box>
  )
}

export const VerticalWithInput: FunctionComponent = () => {
  const options: CheckBoxProps[] = [
    {
      id: 'montant',
      value: 'montant',
      label: 'Le montant',
      isSelected: true,
      optionalElement: <Input suffix="€ HT" />,
    },
    {
      id: 'poste',
      value: 'poste',
      label: 'Les frais d’expédition par la poste',
      isSelected: false,
    },
    {
      id: 'transporteur',
      value: 'transporteur',
      label: 'Les frais d’expédition par un autre transporteur',
      isSelected: false,
    },
  ]
  return (
    <Box margin="small">
      <CheckBoxGroup
        name="options-choice"
        description="Vous connaissez…"
        options={options}
        direction="column"
      />
    </Box>
  )
}
export const VerticalWithError: FunctionComponent = () => {
  const options: CheckBoxProps[] = [
    {
      id: 'montant',
      value: 'montant',
      label: 'Le montant',
      isSelected: false,
    },
    {
      id: 'poste',
      value: 'poste',
      label: 'Les frais d’expédition par la poste',
      isSelected: false,
    },
    {
      id: 'transporteur',
      value: 'transporteur',
      label: 'Les frais d’expédition par un autre transporteur',
      isSelected: false,
    },
  ]
  return (
    <Box margin="small">
      <CheckBoxGroup
        name="panne"
        description="Vous préférez avoir…"
        options={options}
        error="Vous devez faire un choix. Désolé."
        direction="column"
      />
    </Box>
  )
}
