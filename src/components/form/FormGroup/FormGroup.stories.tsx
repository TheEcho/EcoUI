import { FunctionComponent } from 'react'

import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import { Input } from '../Input'
import { FormGroup } from './FormGroup'
import { Meta } from '@storybook/react'

export default {
  title: 'Form/FormGroup',
  decorators: [withKnobs],
  component: FormGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof FormGroup>

export const Simple: FunctionComponent = () => (
  <FormGroup title="Objet" input={{ id: 'inputId' }}>
    <Input placeholder="Ex. plante, sculpture..." id="inputId" />
  </FormGroup>
)

export const Optional: FunctionComponent = () => (
  <FormGroup title="Objet" sideTitle="Optionnel">
    <Input placeholder="Ex. plante, sculpture..." />
  </FormGroup>
)

export const WithSideTitle: FunctionComponent = () => (
  <FormGroup title="Objet" sideTitle="(non humain)">
    <Input placeholder="Ex. plante, sculpture..." />
  </FormGroup>
)

export const WithSubtitle: FunctionComponent = () => (
  <FormGroup
    title="Objet"
    input={{ id: 'inputId' }}
    subtitle="Pensez à un objet dans vos parties communes"
  >
    <Input placeholder="Ex. plante, sculpture..." id="inputId" />
  </FormGroup>
)

export const WithError: FunctionComponent = () => (
  <FormGroup
    title="Objet"
    input={{ id: 'inputId' }}
    subtitle="Pensez à un objet dans vos parties communes"
    error="Veuillez compléter ce champs car ce champs a une importance primordiale, je te jure poto, faut le faire sinon pas cool."
  >
    <Input placeholder="Ex. plante, sculpture..." id="inputId" error />
  </FormGroup>
)

export const Knobs: FunctionComponent = () => (
  <FormGroup
    input={{ id: 'inputId' }}
    title={text('Title', 'Objet')}
    subtitle={text('Subtitle', 'Pensez à un objet dans vos parties communes')}
    error={text('Error', 'Veuillez compléter ce champs')}
    optional={boolean('Optional', false)}
  >
    <Input placeholder="Ex. plante, sculpture..." id="inputId" />
  </FormGroup>
)
