import { ReactNode } from 'react'

import styled from '@emotion/styled'

import { TBorderRadiusEnum } from '../../../shared/tokens/border'
import { TSpacingSizeEnum } from '../../../shared/tokens/spacing'
import { Tag } from './Tag'
import { ITheme } from '@/index'

export type TStyledRemovableFilterTag = {
  padding?: TSpacingSizeEnum
  margin?: TSpacingSizeEnum
  borderRadius?: TBorderRadiusEnum
  onClick?: () => void
  /**
   * Icon of the tag (should use a cross)
   */
  icon: ReactNode
} // & Omit<TagProps, 'color' | 'textColor' | 'background'>

export const StyledRemovableFilterTag = styled(Tag)<TStyledRemovableFilterTag>`
  background-color: ${(props) => props.theme.color.primary};
  &:hover {
    background-color: ${(props) => props.theme.color['primary-dark']};
  }
  &:active {
    background-color: ${(props) => props.theme.color['primary-darker']};
  }
`
