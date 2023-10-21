export type TSVGSizeEnum =
  | 'atomic'
  | 'tiny'
  | 'xxsmall'
  | 'xsmall'
  | 'small'
  | 'sm-medium'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'xxxlarge'
  | 'huge'

export const svgSizes: { [key in TSVGSizeEnum]: string } = {
  atomic: '0.7rem',
  tiny: '1rem',
  xxsmall: '1.1rem',
  xsmall: '1.2rem',
  small: '1.4rem',
  'sm-medium': '1.6rem',
  medium: '2rem',
  large: '2.4rem',
  xlarge: '2.8rem',
  xxlarge: '3.2rem',
  xxxlarge: '4rem',
  huge: '4.8rem',
}

export default {
  sizes: svgSizes,
}
