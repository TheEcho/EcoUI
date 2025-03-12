import { FunctionComponent } from 'react'

import { action } from '@storybook/addon-actions'

import Button from '../Button'
import Dropdown from '../Dropdown'
import { Toolbar } from './Toolbar'
import { Meta } from '@storybook/react'
import { DropItem } from '../..'

export default {
  title: 'Core/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Toolbar>

const onClick = action('button onClick')

export const MultipleComponents: FunctionComponent = () => (
  <Toolbar>
    <Button label="Button 1" onClick={onClick} variant="secondary" />
    <Button label="Button 2" onClick={onClick} variant="secondary" />
    <Dropdown label="Dropdown">
      <DropItem title="Example 1"/>
      <DropItem title="Example 2"/>
    </Dropdown>
  </Toolbar>
)

export const TwoButtons: FunctionComponent = () => (
  <Toolbar>
    <Button label="Button 1" onClick={onClick} variant="secondary" />
    <Button label="Button 2" onClick={onClick} variant="secondary" />
  </Toolbar>
)

export const ThreeButtons: FunctionComponent = () => (
  <Toolbar>
    <Button label="Button 1" onClick={onClick} variant="secondary" />
    <Button label="Button 2" onClick={onClick} variant="secondary" />
    <Button label="Button 3" onClick={onClick} variant="secondary" />
  </Toolbar>
)

export const OneButton: FunctionComponent = () => (
  <Toolbar>
    <Button label="Button 1" onClick={onClick} variant="secondary" />
  </Toolbar>
)

export const ButtonAndDropdown: FunctionComponent = () => (
  <Toolbar>
    <Button label="Button 1" onClick={onClick} variant="secondary" />
    <Dropdown label="Dropdown">
      <DropItem title="Example 1"/>
      <DropItem title="Example 2"/>
    </Dropdown>
  </Toolbar>
)
