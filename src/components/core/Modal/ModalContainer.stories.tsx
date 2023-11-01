import * as React from 'react'
import { useState } from 'react'

import { Box, Button, Text } from '../..'

import { ModalContainer } from '.'
import { Heading } from '../Heading'
import { useModal } from './_hooks/useModal'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Modal',
  component: ModalContainer,
  tags: ['autodocs'],
} satisfies Meta<typeof ModalContainer>

export const Normal: React.FC = () => {
  const {
    Modal,
    toggleModal,
    isModalOpen,
  } = useModal({
    modalProps: {
      variant: 'card'
    }
  })


  return (
    <Box direction="column" gap="medium" flex={false}>
      <Heading variant="card-header-title">ModalContainer</Heading>
      <Box direction="column" gap="medium">
        <Box flex={false}>
          <Button onClick={() => toggleModal()}>Open Modal</Button>
        </Box>
        {isModalOpen && (
          <Modal>
            <Box padding="large">
              <Text>
                Modal content, you can toggle modal when you click on the dark area around the modal
              </Text>
            </Box>
          </Modal>
        )}
      </Box>
    </Box>
  )
}
