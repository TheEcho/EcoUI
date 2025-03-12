import { FunctionComponent, useState } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box, Image, Text } from '../..'
import { CardAccordion } from './CardAccordion'
import { CardAccordionAction } from './CardAccordionActions/CardAccordionAction'
import { CardAccordionActions } from './CardAccordionActions/CardAccordionActions'
import { CardAccordionContent } from './CardAccordionContent/CardAccordionContent'
import { CardAccordionHeader } from './CardAccordionHeader/CardAccordionHeader'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Card/CardAccordion',
  decorators: [withKnobs],
  component: CardAccordion,
  tags: ['autodocs'],
} satisfies Meta<typeof CardAccordion>

export const Simple: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Box margin="large">
      <CardAccordion
        open={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
        suffixHeaderComponent={<Text color="text-light">Je suis un suffixHeaderComponent</Text>}
      >
        <CardAccordionHeader>
          <Box direction="row" gap="medium" align="center">
            <Image src="https://via.placeholder.com/32x32" />
            <Box direction="column">
              <Text size="regular" weight="medium" color="text-dark">
                5 Rue Pascal
              </Text>
              <Box direction="row" gap="xsmall" align="center">
                <Text size="small">Copropriété</Text>
                <Text size="small" weight="medium">
                  •
                </Text>
                <Text size="small" color="text-light">
                  1 contact
                </Text>
              </Box>
            </Box>
          </Box>
        </CardAccordionHeader>
        <CardAccordionContent>
          <Box direction="column" gap="medium">
            <Text weight="medium" color="text-dark" size="regular">
              Résumé
            </Text>
            <Text size="regular">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Box>
          <Box direction="column" gap="medium">
            <Box direction="row" justify="between" align="center">
              <Text weight="medium" color="text-dark" size="regular">
                Dernière Mise à jour
              </Text>
              <Text color="text-light" size="small">
                Aujourd&apos;hui à 12h42
              </Text>
            </Box>
            <Text>
              L&apos;assemblé générale du 18/20/1992 a voté la purge de marçonnerie sur le pignon
              droit.
            </Text>
          </Box>
          <Box direction="column" gap="medium">
            <Text color="text-light" size="xsmall" weight="medium">
              ACTIONS
            </Text>
            <Box direction="column">
              <Box onClick={() => console.log('Editer ce dossier')}>
                <Text color="secondary-dark" weight="medium">
                  Éditer ce dossier
                </Text>
              </Box>
              <Box onClick={() => console.log('Partager ce dossier en réponse')}>
                <Text color="secondary-dark" weight="medium">
                  Partager ce dossier en réponse
                </Text>
              </Box>
            </Box>
          </Box>
        </CardAccordionContent>
        <CardAccordionActions>
          <CardAccordionAction onClick={() => console.log('clicked')}>
            Rattacher
          </CardAccordionAction>
          <CardAccordionAction onClick={() => console.log('clicked')}>Annuler</CardAccordionAction>
        </CardAccordionActions>
      </CardAccordion>
    </Box>
  )
}
