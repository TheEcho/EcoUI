import { FunctionComponent } from 'react'

import { ClockIcon, PlayIcon } from '@heroicons/react/24/outline'
import { action } from '@storybook/addon-actions'

import { Box, Icon, Text } from '../../core'
import { Button, ButtonProps } from './Button'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    colorVariant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  }
} satisfies Meta<typeof Button>

const onClick = action('button onClick')

const Primary: FunctionComponent<ButtonProps> = (props) => (
  <Box gap="medium" direction="row" flex={false}>
    <Button label="Button" onClick={onClick} variant="primary" {...props} />
    <Button
      label="Button"
      onClick={onClick}
      variant="primary"
      colorVariant="secondary"
      {...props}
    />
  </Box>
)

const Secondary: FunctionComponent<ButtonProps> = (props) => (
  <Button label="Button" onClick={onClick} variant="secondary" {...props} />
)
const Outline: FunctionComponent<ButtonProps> = (props) => (
  <Button label="Button" onClick={onClick} variant="outline" {...props} />
)
const Ghost: FunctionComponent<ButtonProps> = (props) => (
  <Button label="Button" onClick={onClick} variant="ghost" {...props} />
)
const TextBtn: FunctionComponent<ButtonProps> = (props) => (
  <Button label="Button" onClick={onClick} variant="text" {...props} />
)

const IconOnly: FunctionComponent<ButtonProps> = (props) => (
  <Button variant="secondary" icon={<Icon icon={<ClockIcon />} color="text-lighter" />} {...props} />
)

export const allVariants: FunctionComponent = (props) => (
  <Box gap="medium" direction="row" padding="medium" background="background" align="center">
    <Primary />
    <Secondary />
    <Outline />
    <Ghost />
    <TextBtn />
    <IconOnly />
  </Box>
)

export const allBtnSize: FunctionComponent = (props) => (
  <Box gap="medium" direction="row" padding="medium" align="center">
    <Button variant="primary" buttonSize="tiny" label="Button" />
    <Button variant="primary" buttonSize="small" label="Button" />
    <Button variant="primary" buttonSize="regular" label="Button" />
    <Button variant="primary" buttonSize="large" label="Button" />
    <Button variant="primary" buttonSize="larger" label="Button" />
  </Box>
)

export const allVariantsLoading: FunctionComponent = (props) => (
  <Box gap="medium" direction="row">
    <Primary loading />
    <Secondary loading />
    <Outline loading />
    <Ghost loading />
    <TextBtn loading />
    <IconOnly loading />
  </Box>
)

export { Ghost, Outline, Primary, Secondary, TextBtn }

export const WithIcon: FunctionComponent = () => (
  <Button
    icon={<Icon icon={<ClockIcon />} color="primary" />}
    onClick={onClick}
    variant="primary"
  />
)
export const WithLabelIcon: FunctionComponent = () => (
  <Button
    icon={<Icon icon={<PlayIcon />} color="text-lighter" />}
    onClick={onClick}
    variant="primary"
    buttonSize="small"
    label={<Text color="text-lighter">Button</Text>}
  />
)
export const WithLabelIconReverse: FunctionComponent = () => (
  <Button
    label="Button"
    icon={<Icon icon={<ClockIcon />} color="primary" />}
    onClick={onClick}
    variant="primary"
    reverse
  />
)
export const withColor: FunctionComponent = (props) => (
  <Box gap="medium" direction="column">
    <Box gap="medium" direction="row">
      <Outline color="warning" textColor="warning-ink" />
      <TextBtn color="warning" textColor="warning-ink" />
    </Box>
    <Box gap="medium" direction="row">
      <Outline color="secondary" textColor="secondary-darker" />
      <TextBtn color="secondary" textColor="secondary-darker" />
    </Box>
    <Box gap="medium" direction="row">
      <Outline loading color="secondary" textColor="secondary-darker" />
      <Outline loading color="warning" textColor="warning-ink" />
      <TextBtn loading color="warning" textColor="warning-ink" />
    </Box>
  </Box>
)
