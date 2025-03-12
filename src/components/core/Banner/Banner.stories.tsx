import { FunctionComponent, useState } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box, Heading } from '..'
import { Banner, BannerProps } from '.'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Banner',
  decorators: [withKnobs],
  component: Banner,
  tags: ['autodocs'],
} satisfies Meta<typeof Banner>

const defaultOnClick = () => {
  //
}

const defaultValues: BannerProps = {
  content:
    'Bacon ipsum dolor amet boudin shank biltong, jowl ham sirloin alcatra capicola. Sausage ham brisket, hamburger pork chop kielbasa chuck.',
  title: 'Titre',
  onClose: defaultOnClick,
  button: {
    label: 'Button',
    onClick: defaultOnClick,
  },
  link: {
    label: 'Link',
    onClick: defaultOnClick,
  },
}

export const AllBanner: FunctionComponent = () => {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <Box padding="medium" gap="large" direction="column" maxWidth={60}>
      <Box direction="column" gap="medium">
        <Heading variant="card-header-title">Default</Heading>
        <Banner {...defaultValues} variant="default" />
      </Box>
      <Box direction="column" gap="medium">
        <Heading variant="card-header-title">Information</Heading>
        <Banner {...defaultValues} variant="information" />
      </Box>
      <Box direction="column" gap="medium">
        <Heading variant="card-header-title">Warning</Heading>
        <Banner {...defaultValues} variant="warning" />
      </Box>
      <Box direction="column" gap="medium">
        <Heading variant="card-header-title">Success</Heading>
        <Banner {...defaultValues} variant="success" />
      </Box>
      <Box direction="column" gap="medium">
        <Heading variant="card-header-title">Error</Heading>
        <Banner {...defaultValues} variant="error" />
      </Box>
      <Box direction="column" gap="medium">
        <Heading variant="card-header-title">Closable</Heading>
        {isVisible && (
          <Banner
            onClose={() => setIsVisible(false)}
            content="You can close homie"
            variant="default"
          />
        )}
      </Box>
    </Box>
  )
}

export const AllOptions: FunctionComponent = () => {
  const { title, ...withoutTitle } = defaultValues
  const { content, ...withoutContent } = defaultValues
  const { button, link, ...withoutButtons } = defaultValues
  const { onClose, ...withoutOnClose } = defaultValues

  return (
    <Box padding="medium" gap="large" direction="column" maxWidth={60}>
      <Box direction="column" gap="medium">
        <Heading variant="card-header-title">All Options</Heading>
        <Banner {...defaultValues} variant="information" />
      </Box>
      <Box direction="column" gap="medium">
        <Heading variant="card-header-title">Without title</Heading>
        <Banner {...withoutTitle} variant="information" />
      </Box>
      <Box direction="column" gap="medium">
        <Heading variant="card-header-title">Without content</Heading>
        <Banner {...withoutContent} variant="information" />
      </Box>
      <Box direction="column" gap="medium">
        <Heading variant="card-header-title">Without buttons</Heading>
        <Banner {...withoutButtons} variant="information" />
      </Box>
      <Box direction="column" gap="medium">
        <Heading variant="card-header-title">Without close button</Heading>
        <Banner {...withoutOnClose} variant="information" />
      </Box>
    </Box>
  )
}
