import styled, { CSSObject } from '@emotion/styled'

import { ITheme } from '@/index'
import { TAlignSelfEnum } from '../../../shared/tokens/alignSelf'
import { TSpacingSizeEnum } from '../../../shared/tokens/spacing'

type TFit = 'cover' | 'contain'
type TFill = 'true' | 'false'
type TOpacity = 'weak' | 'medium' | 'strong'

export type TStyledImageProps = {
  src?: string
  alt?: string
  width?: number
  height?: number
  title?: string

  fit?: boolean | TFit
  fill?: TFill
  fitPosition?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'unset'
  draggable?: boolean

  a11yTitle?: string
  alignSelf?: TAlignSelfEnum
  fallback?: string
  gridArea?: 'auto' | string

  margin?: TSpacingSizeEnum
  marginTop?: TSpacingSizeEnum
  marginRight?: TSpacingSizeEnum
  marginBottom?: TSpacingSizeEnum
  marginLeft?: TSpacingSizeEnum

  opacity?: boolean | TOpacity
}

type StyledImagePropsWithTheme = { theme: ITheme } & TStyledImageProps

const FIT_MAP: { [key in TFit]: TFit } = {
  cover: 'cover',
  contain: 'contain',
}

const OPACITY_MAP: { [key in TOpacity]: TOpacity } = {
  weak: 'weak',
  medium: 'medium',
  strong: 'strong',
}

const fitStyle = ({ fitPosition = 'unset', fit }: StyledImagePropsWithTheme): CSSObject => {
  if (!fit) {
    return {}
  }

  switch (typeof fit) {
    case 'boolean':
      return {
        objectFit: fit ? 'cover' : 'none',
        objectPosition: fitPosition,
      }
    case 'string':
      return {
        flex: '1 1',
        overflow: 'hidden',
        objectFit: FIT_MAP[fit],
        objectPosition: fitPosition,
      }
  }
}

const opacityStyle = ({ opacity }: StyledImagePropsWithTheme): CSSObject => {
  switch (typeof opacity) {
    case 'boolean':
      return {
        opacity: opacity ? 'medium' : 'initial',
      }
    case 'string':
      return {
        opacity: OPACITY_MAP[opacity],
      }
  }
  return {}
}

export const StyledImage = styled.img<TStyledImageProps>((props) => {
  return {
    ...(props.fill === 'true' && {
      width: '100%',
      height: '100%',
    }),
    ...fitStyle(props),
    ...opacityStyle(props),
  }
})
