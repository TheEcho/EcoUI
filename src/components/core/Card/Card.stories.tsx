import React, { FunctionComponent } from 'react'

import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import { Box, Button, Heading, Link, Paragraph } from '../../core'
import { Card, CardSection, CardWithSection } from '.'

export default {
  title: 'Core/Card',
  decorators: [withKnobs],
  component: Card,
}

export const Simple: FunctionComponent = () => (
  <Box background="background-light" padding="medium">
    <Card>Hello World</Card>
  </Box>
)

export const WithParagraph: FunctionComponent = () => (
  <Box background="background-light" padding="medium">
    <Card width={60}>
      <Box marginBottom="small">
        <Heading variant="card-title">Votre contrat</Heading>
      </Box>
      <Paragraph>
        Nous pensons que la <Link href="#">qualité de notre prestation</Link> devrait être la seule
        raison pour laquelle vous nous gardez.
      </Paragraph>
    </Card>
  </Box>
)

const onClick = action('button onClick')
export const WithParagraphAndButtons: FunctionComponent = () => (
  <Box background="background-light" padding="medium">
    <Card width={60}>
      <Box marginBottom="small">
        <Heading variant="card-title">Votre contrat</Heading>
      </Box>
      <Paragraph>
        Nous pensons que la <Link href="#">qualité de notre prestation</Link> devrait être la seule
        raison pour laquelle vous nous gardez.
      </Paragraph>
      <Box direction="row" gap="medium" marginTop="medium">
        <Button label="Button" onClick={onClick} />
        <Button label="Button" variant="primary" onClick={onClick} />
      </Box>
    </Card>
  </Box>
)

export const WithParagraphAndLink: FunctionComponent = () => (
  <Box background="background-light" padding="medium">
    <Card width={60}>
      <Box marginBottom="small">
        <Heading variant="card-title">Votre contrat</Heading>
      </Box>
      <Paragraph>
        Nous pensons que la <Link href="#">qualité de notre prestation</Link> devrait être la seule
        raison pour laquelle vous nous gardez.
      </Paragraph>
      <Box marginTop="medium">
        <Link href="#">En savoir plus</Link>
      </Box>
    </Card>
  </Box>
)

export const WithSections: FunctionComponent = () => (
  <Box background="background-light" padding="medium">
    <CardWithSection width={60}>
      <CardSection>
        <Box marginBottom="small">
          <Heading variant="card-title">Votre contrat</Heading>
        </Box>
        <Paragraph>
          Nous pensons que la <Link href="#">qualité de notre prestation</Link> devrait être la
          seule raison pour laquelle vous nous gardez.
        </Paragraph>
      </CardSection>
      <CardSection background="background">
        <Paragraph>
          Vous avez fourni l’ensemble des pièces requises. Nous examinons minutieusement votre
          dossier depuis le 14 septembre 2019.
        </Paragraph>
      </CardSection>
    </CardWithSection>
  </Box>
)

export const WithOnlyOneSection: FunctionComponent = () => (
  <Box background="background-light" padding="medium">
    <CardWithSection width={60}>
      <CardSection>
        <Box marginBottom="small">
          <Heading variant="card-title">Votre contrat</Heading>
        </Box>
        <Paragraph>
          Nous pensons que la <Link href="#">qualité de notre prestation</Link> devrait être la
          seule raison pour laquelle vous nous gardez.
        </Paragraph>
      </CardSection>
    </CardWithSection>
  </Box>
)

export const WithSectionsAndHeader: FunctionComponent = () => (
  <Box background="background-light" padding="medium">
    <CardWithSection width={60} header="Header">
      <CardSection>
        <Box marginBottom="small">
          <Heading variant="card-title">Votre contrat</Heading>
        </Box>
        <Paragraph>
          Nous pensons que la <Link href="#">qualité de notre prestation</Link> devrait être la
          seule raison pour laquelle vous nous gardez.
        </Paragraph>
      </CardSection>
      <CardSection background="background">
        <Paragraph>
          Vous avez fourni l’ensemble des pièces requises. Nous examinons minutieusement votre
          dossier depuis le 14 septembre 2019.
        </Paragraph>
      </CardSection>
    </CardWithSection>
  </Box>
)

export const WithHeader: FunctionComponent = () => (
  <Box background="background-light" padding="medium">
    <Card header="Modifiez vos coordonnées en ligne" width={60}>
      Hello World
    </Card>
  </Box>
)
