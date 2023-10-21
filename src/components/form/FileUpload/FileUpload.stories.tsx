import React, { FC, useState } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box, Button } from '../../core'
import { FileUpload } from './FileUpload'

const EXAMPLE_IMAGE_URL =
  'https://images.unsplash.com/photo-1525268499284-86ec700c826d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nzd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'

export default {
  title: 'Core/Form/FileUpload',
  decorators: [withKnobs],
  component: FileUpload,
}

export const WithoutValue: FC = () => {
  return <FileUpload name="fileUrl" />
}

export const WithValue: FC = () => {
  return <FileUpload name="fileUrl" value={EXAMPLE_IMAGE_URL} />
}

export const WithDeletableValue: FC = () => {
  const [value, setValue] = useState<string | null>(EXAMPLE_IMAGE_URL)
  return (
    <Box direction="column" gap="large">
      <FileUpload name="fileUrl" onDelete={() => setValue(null)} value={value} />
      <Button variant="outline" onClick={() => setValue(EXAMPLE_IMAGE_URL)}>
        Reset example
      </Button>
    </Box>
  )
}

export const WithAvatarData: FC = () => {
  return <FileUpload name="fileUrl" />
}

export const WithError: FC = () => {
  return (
    <FileUpload name="fileUrl" error="Il y a eu un souci lors de l'upload, veuillez réessayer" />
  )
}
