import { FC } from 'react'

import { number, withKnobs } from '@storybook/addon-knobs'

import { OverlapAvatars } from './OverlapAvatars'
import { Meta } from '@storybook/react'

export default {
  title: 'Core/OverlapAvatars',
  decorators: [withKnobs],
  component: OverlapAvatars,
  tags: ['autodocs'],
} satisfies Meta<typeof OverlapAvatars>

const items = [
  { title: 'Arthur Pendragon' },
  { title: 'Perceval de Galle' },
  { title: 'Lancelot du Lac' },
  { title: 'Aconia Minor' },
  { title: "Elias de Kelliwic'h" },
  { title: 'Jean Jacques' },
  { title: 'Wallerand Delevacq' },
  { title: 'Pierre Cuni' },
]

export const WithoutTooltip: FC = () => {
  const count = number('Count', Math.floor(items.length / 2), {
    min: 0,
    max: items.length,
    range: true,
  })

  const selectedItems = items.slice(0, count)

  return <OverlapAvatars items={selectedItems} />
}
