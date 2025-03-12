import { FunctionComponent, useEffect, useState } from 'react'

import { Box, Text } from '..'
import { LoadingResolver } from './LoadingResolver'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/LoadingResolver',
  component: LoadingResolver,
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingResolver>

const ALL_ITEMS = ['123', '234']

const LoadingComponent: FunctionComponent = () => <div>Chargement ...</div>

export const Default: FunctionComponent = () => {
  const [items, setItems] = useState<string[] | null>(null)

  useEffect(() => {
    setTimeout(() => setItems(ALL_ITEMS), 3000)
  }, [])

  return (
    <LoadingResolver
      direction="column"
      dataWaitingToLoad={{ items }}
      loadingComponent={LoadingComponent}
    >
      {({ items }) => (
        <Box direction="column" gap="medium">
          {items.map((item) => (
            <Text color="text-light" key={item}>
              {item}
            </Text>
          ))}
        </Box>
      )}
    </LoadingResolver>
  )
}
