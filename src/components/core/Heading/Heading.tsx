import React, { ElementType, FunctionComponent, ReactNode } from 'react'

import {
  BaseHeading,
  ObjectListItemTitle,
  StyledCardHeaderTitle,
  StyledCardTitle,
  StyledHeadingProps,
  StyledNavGridTitle,
  StyledPageTitle,
  StyledSectionTitle,
  StyledSerifTitle,
  StyledSubTitle,
} from './Heading.styled'
import { WithChildren } from '@/types/WithChildren'

export type THeadingVariant =
  | 'page-title'
  | 'card-title'
  | 'card-header-title'
  | 'section-title'
  | 'nav-grid-title'
  | 'object-list-item-title'
  | 'serif-title'
  | 'subtitle'

export type HeadingProps = {
  /**
   * Variant of the heading
   */
  variant: THeadingVariant
  /**
   * Force an HTML tag to be used for this heading
   */
  as?: ElementType<any>
  /**
   * Color of the heading
   */
  color?: StyledHeadingProps['color']
  /**
   *
   */
  ellipsis?: boolean
  /**
   *
   */
  textAlign?: StyledHeadingProps['textAlign']
  css?: StyledHeadingProps['css']
} & WithChildren

export const StyledHeadingComponents: {
  [key in THeadingVariant]: { component: typeof BaseHeading; as: ElementType<any> }
} = {
  'page-title': {
    component: StyledPageTitle,
    as: 'h1',
  },
  'card-title': {
    component: StyledCardTitle,
    as: 'h2',
  },
  'card-header-title': {
    component: StyledCardHeaderTitle,
    as: 'h3',
  },
  'section-title': {
    component: StyledSectionTitle,
    as: 'h4',
  },
  'nav-grid-title': {
    component: StyledNavGridTitle,
    as: 'h3',
  },
  'object-list-item-title': {
    component: ObjectListItemTitle,
    as: 'h4',
  },
  'serif-title': {
    component: StyledSerifTitle,
    as: 'h3',
  },
  subtitle: {
    component: StyledSubTitle,
    as: 'h4',
  },
}

/**
 * Heading component
 */
export const Heading: FunctionComponent<HeadingProps> = ({ variant, as: asProp, ...rest }) => {
  const StyledHeading = StyledHeadingComponents[variant].component
  const as = asProp || StyledHeadingComponents[variant].as

  return <StyledHeading as={as} {...rest} />
}

export default Heading
