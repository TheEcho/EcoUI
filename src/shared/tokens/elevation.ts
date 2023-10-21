export type TElevationSizeEnum = 'none' | 'xsmall' | 'small' | 'medium' | 'medium-comfy' | 'large'

export const elevation: { [key in TElevationSizeEnum]: string } = {
  none: 'none',
  xsmall: '0px 0.1rem 0.1rem #212B361A',
  small: '0 0.1rem 0.4rem #212B360D',
  medium: '0 0.2rem 0.8rem #4D5E711F',
  'medium-comfy': '0px 0.4rem 1.6rem #4D5E711F',
  large: '0px 0.4rem 2.4rem #4D5E711F',
}

export default elevation
