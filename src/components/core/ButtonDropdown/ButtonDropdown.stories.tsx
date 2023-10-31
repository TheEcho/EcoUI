import React, { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box } from '../../core'
import Icon from '../Icon'
import ButtonDropdown from './ButtonDropdown'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/ButtonDropdown',
  decorators: [withKnobs],
  component: ButtonDropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonDropdown>

export const Simple: FunctionComponent = () => (
  <div>
    <ButtonDropdown label="Tous" icon={<Icon icon="caticon-eau" size="tiny" />} />
    <Box marginTop="small">Element below dropdown</Box>
  </div>
)

export const WithItems: FunctionComponent = () => (
  <div>
    <ButtonDropdown
      label="Tous"
      icon={<Icon icon="caticon-eau" size="tiny" />}
      items={[
        { title: 'Tous' },
        { title: 'Gestionnaires (brouillon)' },
        { title: 'Conseil syndical' },
      ]}
      itemClicked={(item) => console.log(item)}
    />
    <Box marginTop="small">Element below dropdown</Box>
  </div>
)
