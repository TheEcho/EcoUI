import { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import Box from '../Box'
import Image from './Image'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Image',
  decorators: [withKnobs],
  component: Image,
  tags: ['autodocs'],
} satisfies Meta<typeof Image>

//TODO: implement loading, fallback, auto-sizing ?

export const SimpleImage: FunctionComponent = () => (
  <Image src="https://via.placeholder.com/139x72" />
)

export const BrokenImages: FunctionComponent = () => (
  <Box padding="large" gap="large" maxHeight={100}>
    <Box borderColor="background-dark" borderSize="xsmall" flex={false}>
      <Image src="https://broken" width={100} height={100} />
    </Box>
    <Box borderColor="background-dark" borderSize="xsmall" flex={false}>
      <Image src="https://broken" width={100} height={100} brokenPlaceholderType="brokenLink" />
    </Box>
    <Box borderColor="background-dark" borderSize="xsmall" flex={false}>
      <Image src="https://broken" width={100} height={100} brokenPlaceholderType="pdf" />
    </Box>
  </Box>
)

export const ImageFitWithPosition: FunctionComponent = () => (
  <>
    <Box direction="row" gap="medium">
      <Image
        width={200}
        height={70}
        fit
        fitPosition="top"
        src="https://via.placeholder.com/139x72"
      />

      <Image
        width={200}
        height={70}
        fit
        fitPosition="bottom"
        src="https://via.placeholder.com/139x72"
      />
      <Image
        width={100}
        height={70}
        fit
        fitPosition="left"
        src="https://via.placeholder.com/139x72"
      />
      <Image
        width={100}
        height={70}
        fit
        fitPosition="right"
        src="https://via.placeholder.com/139x72"
      />
    </Box>
  </>
)

export const ImageWithTitle: FunctionComponent = () => (
  <Image title="Placeholder" src="https://via.placeholder.com/139x72" />
)

export const ImageNotDraggable: FunctionComponent = () => (
  <Image title="Placeholder" src="https://via.placeholder.com/139x72" draggable={false} />
)

export const ImageFill: FunctionComponent = () => (
  <Box direction="column" gap="lg-medium">
    <Box>
      <Image title="Placeholder" src="https://via.placeholder.com/139x72" />
    </Box>
    <Box>
      <Image title="Placeholder" src="https://via.placeholder.com/139x72" fill="false" />
    </Box>
    <Box>
      <Image title="Placeholder" src="https://via.placeholder.com/139x72" fill="true" />
    </Box>
  </Box>
)
