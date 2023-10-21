export type TBorderRadiusEnum = 'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'

const radius: { [key in TBorderRadiusEnum]: string } = {
  none: '0',
  xsmall: '0.1rem',
  small: '0.3rem',
  medium: '0.4rem',
  large: '0.8rem',
  xlarge: '1.6rem',
}

export type TBorderSizeEnum = 'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'

const size: { [key in TBorderSizeEnum]: string } = {
  none: '0',
  xsmall: '0.1rem',
  small: '0.2rem',
  medium: '0.4rem',
  large: '0.8rem',
  xlarge: '1.6rem',
}

export const border = {
  radius,
  size,
}

export default border
