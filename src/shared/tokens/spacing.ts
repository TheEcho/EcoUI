export type TSpacingSizeEnum =
  | 'none'
  | 'xsmall'
  | 'small'
  | 'sm-medium'
  | 'medium'
  | 'lg-medium'
  | 'large'
  | 'md-large'
  | 'xlarge'

const padding = {
  none: '0',
  xsmall: '0.4rem',
  small: '0.8rem',
  'sm-medium': '1.2rem',
  medium: '1.6rem',
  'lg-medium': '2rem',
  large: '2.4rem',
  'md-large': '2.8rem',
  xlarge: '3.2rem',
} as const // satisfies Record<TSpacingSizeEnum, string>

const margin = {
  none: '0',
  xsmall: '0.4rem',
  small: '0.8rem',
  'sm-medium': '1.2rem',
  medium: '1.6rem',
  'lg-medium': '2rem',
  large: '2.4rem',
  'md-large': '2.8rem',
  xlarge: '3.2rem',
} as const // satisfies Record<TSpacingSizeEnum, string>

const gap = {
  none: '0',
  xsmall: '0.2rem',
  small: '0.4rem',
  'sm-medium': '0.6rem',
  medium: '0.8rem',
  'lg-medium': '1.2rem',
  large: '1.6rem',
  'md-large': '2.4rem',
  xlarge: '3.2rem',
} as const // satisfies Record<TSpacingSizeEnum, string>

export const spacing = {
  padding,
  margin,
  gap,
}

export default spacing
