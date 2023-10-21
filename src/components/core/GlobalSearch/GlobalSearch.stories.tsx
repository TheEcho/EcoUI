import React, { FunctionComponent, useState } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box, Button } from '../../core'
import GlobalSearch from './GlobalSearch'

export default {
  title: 'Core/GlobalSearch',
  decorators: [withKnobs],
  component: GlobalSearch,
}

export const Simple: FunctionComponent = () => {
  return (
    <GlobalSearch
      fitTarget
      items={[
        {
          label: 'Je suis un item Je suis un item Je suis un item Je suis un item Je suis un item',
          value: '1',
        },
        { label: 'Item je suis', value: '2' },
        { label: 'Es-tu un item', value: '3' },
      ]}
      placeholder="Rechercher dans le plan comptable"
    />
  )
}

export const ShowOnClick: FunctionComponent = () => {
  const [isDisplay, setIsDisplay] = useState(false)

  const handleChange = (value: string): void => {
    setIsDisplay(false)
    window.alert('Tu as choisi: ' + value)
  }

  return (
    <Box direction="column" gap="large" align="start" margin="large">
      <Button onClick={() => setIsDisplay(true)}>Voir la recherche global</Button>
      {isDisplay && (
        <GlobalSearch
          onClickOutside={() => setIsDisplay(false)}
          onChange={handleChange}
          autoFocus
          items={[
            { label: 'Je suis un item', value: 'Je suis un item' },
            { label: 'Item je suis', value: 'Item je suis' },
            { label: 'Es-tu un item', value: 'Es-tu un item' },
          ]}
          placeholder="Rechercher dans le plan comptable"
        />
      )}
    </Box>
  )
}
