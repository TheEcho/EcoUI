import { TColor } from '@/index'

export const NB_MAX_OVERLAPPING_ICONS = 3
export const NB_MAX_ITEMS_TOOLTIP = 10

const colors: TColor[] = [
  'icon-green',
  'icon-yellow',
  'icon-blue',
  'icon-salmon',
  'background-darker',
  'icon-dark-blue',
]

export const getColor = (idx: number): TColor => colors[idx % colors.length]
