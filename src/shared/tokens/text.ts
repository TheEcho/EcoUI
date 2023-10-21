export type TTextSize = 'regular' | 'xsmall' | 'small' | 'large' | 'xlarge' | 'xxlarge'

const size: { [key in TTextSize]: { size: string; height: string } } = {
  xsmall: { size: '1rem', height: '1.2rem' },
  small: { size: '1.2rem', height: '1.6rem' },
  regular: { size: '1.4rem', height: '2rem' },
  large: { size: '1.6rem', height: '2rem' },
  xlarge: { size: '1.8rem', height: '2.8rem' },
  xxlarge: { size: '3.2rem', height: '4rem' },
}

export const text = {
  font: {
    default: "'Inter', sans-serif",
    serif: "'DM Serif Display', 'serif'",
  },
  weight: {
    regular: '400',
    medium: '600',
    bold: '700',
  },
  size,
  decoration: {
    'line-through': 'line-through',
    underline: 'underline',
    none: 'none',
  },
}

export type TTextWeight = keyof typeof text.weight
export type TTextFont = keyof typeof text.font
export type TTextDecoration = keyof typeof text.decoration

export default text
