import React, { FC } from 'react'

import { number, withKnobs } from '@storybook/addon-knobs'

import { OverlapAvatars } from './OverlapAvatars'
import { OverlapAvatarsTooltip } from './OverlapAvatarsTooltip'

export default {
  title: 'Core/OverlapAvatars',
  decorators: [withKnobs],
  component: OverlapAvatarsTooltip,
}

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

export const WithTooltip: FC = () => {
  const count = number('Count', Math.floor(items.length / 2), {
    min: 0,
    max: items.length,
    range: true,
  })

  const selectedItems = items.slice(0, count)

  return (
    <OverlapAvatarsTooltip items={selectedItems}>
      <OverlapAvatars items={selectedItems} />
    </OverlapAvatarsTooltip>
  )
}
