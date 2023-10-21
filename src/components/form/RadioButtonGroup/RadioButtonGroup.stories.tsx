import React, { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box } from '../../core'
import { RadioButton, RadioButtonProps } from '../RadioButton'
import { RadioButtonGroup } from './RadioButtonGroup'
export default {
  title: 'Core/Form/RadioGroup',
  decorators: [withKnobs],
  component: RadioButtonGroup,
}

export const Simple: FunctionComponent = () => {
  const options: RadioButtonProps[] = [
    {
      id: 'fenetre',
      name: 'panne',
      value: 'fenetre',
      label: 'La fenêtre est restée ouverte',
      isSelected: true,
    },
    {
      id: 'fuite',
      name: 'panne',
      value: 'fuite',
      label: "Panne d'ascenseur",
      isSelected: false,
    },
    {
      id: 'moisissure',
      name: 'panne',
      value: 'moisissure',
      label: 'Moisissure au plafond',
      isSelected: false,
    },
  ]
  return (
    <Box margin="small" flex={false}>
      <RadioButtonGroup
        name="panne"
        description="Vous préférez avoir…"
        subDescription="Cuz it matters..."
        options={options}
        defaultValue="fenetre"
      />
    </Box>
  )
}

export const WithDescription: FunctionComponent = () => {
  const options: RadioButtonProps[] = [
    {
      id: 'fenetre',
      value: 'fenetre',
      name: 'panne',
      label: 'La fenêtre est restée ouverte',
      description: 'Il pleut. Fort. Depuis le matin.',
      isSelected: true,
    },
    {
      id: 'clefs',
      value: 'clefs',
      name: 'panne',
      label: 'Vous avez oublié vos clés',
      description: 'Un jour férié. Votre téléphone n’a plus de batterie.',
      isSelected: false,
    },
  ]
  return (
    <Box margin="small" flex={false}>
      <RadioButtonGroup
        name="panne"
        description="Choisissez votre situation préférée"
        options={options}
        defaultValue="fenetre"
      />
    </Box>
  )
}

export const WithError: FunctionComponent = () => {
  const options: RadioButtonProps[] = [
    {
      id: 'fenetre',
      value: 'fenetre',
      name: 'panne',
      label: 'La fenêtre est restée ouverte',
      isSelected: true,
    },
    {
      id: 'fuite',
      value: 'fuite',
      name: 'panne',
      label: "Panne d'ascenseur",
      isSelected: false,
    },
    {
      id: 'moisissure',
      value: 'moisissure',
      name: 'panne',
      label: 'Moisissure au plafond',
      isSelected: false,
    },
  ]
  return (
    <Box margin="small" flex={false}>
      <RadioButtonGroup
        name="panne"
        description="Vous préférez avoir…"
        options={options}
        error="Vous devez faire un choix. Désolé."
      />
    </Box>
  )
}

export const WithRowDirectionRow: FunctionComponent = () => {
  return (
    <Box margin="small" flex={false}>
      <RadioButtonGroup direction="row" name="role" description="Type de profil" gap="large">
        <RadioButton flex={false} id="owner" label="Copropriétaire" name="role" value="OWNER" />
        <RadioButton flex={false} id="tenant" label="Locataire" name="role" value="TENANT" />
        <RadioButton
          flex={false}
          id="representative"
          label="Secrétaire"
          name="role"
          value="REPRESENTATIVE"
        />
      </RadioButtonGroup>
    </Box>
  )
}

export const WithColumnDirectionColumn: FunctionComponent = () => {
  return (
    <Box margin="small" flex={false}>
      <RadioButtonGroup direction="column" name="role" description="Type de profil">
        <RadioButton id="owner" label="Copropriétaire" name="role" value="OWNER" />
        <RadioButton id="tenant" label="Locataire" name="role" value="TENANT" />
        <RadioButton id="representative" label="Secrétaire" name="role" value="REPRESENTATIVE" />
      </RadioButtonGroup>
    </Box>
  )
}

export const WithRowDirectionRowAndDescription: FunctionComponent = () => {
  return (
    <Box margin="small" flex={false}>
      <RadioButtonGroup direction="row" name="role" description="Type de profil">
        <RadioButton
          id="owner"
          label="Copropriétaire"
          name="role"
          value="OWNER"
          description="Voici la description"
        />
        <RadioButton
          id="tenant"
          label="Locataire"
          name="role"
          value="TENANT"
          description="Voici la description"
        />
        <RadioButton
          id="representative"
          label="Secrétaire"
          name="role"
          value="REPRESENTATIVE"
          description="Voici la description"
        />
      </RadioButtonGroup>
    </Box>
  )
}

export const WithColumnDirectionColumnAndDescription: FunctionComponent = () => {
  return (
    <Box margin="small" flex={false}>
      <RadioButtonGroup direction="column" name="role" description="Type de profil">
        <RadioButton
          id="owner"
          label="Copropriétaire"
          name="role"
          value="OWNER"
          description="Voici la description"
        />
        <RadioButton
          id="tenant"
          label="Locataire"
          name="role"
          value="TENANT"
          description="Voici la description"
        />
        <RadioButton
          id="representative"
          label="Secrétaire"
          name="role"
          value="REPRESENTATIVE"
          description="Voici la description"
        />
      </RadioButtonGroup>
    </Box>
  )
}
