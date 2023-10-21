import React, { ElementType } from 'react'

import { StyledLink, StyledLinkProps } from './Link.styled'
import { WithChildren } from '@/types/WithChildren'
import { IconProps } from '../Icon'

export type LinkProps = {
  href?: string
  as?: ElementType<any>
  label?: string
  target?: '_blank'
  title?: string
  icon?: IconProps['icon']
  resetCss?: boolean
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
} & StyledLinkProps

/**
 * Link extends Text component
 */
// eslint-disable-next-line react/display-name
export const Link = React.forwardRef(
  (
    {
      label,
      href,
      color = 'primary',
      children,
      target,
      title,
      icon,
      resetCss = false,
      ...rest
    }: LinkProps & WithChildren,
    ref,
  ) => {
    const content = label || children || ''
    const linkProps: Pick<LinkProps & WithChildren, 'as' | 'href' | 'color' | 'target' | 'title' | 'children'> = {
      as: 'a',
      href,
      children,
      color,
      target,
      title,
    }
    return (
      <span
        onClick={(e) => {
          // if a custom onclick event has been set, use this and revent the link below to activate
          if (rest?.onClick && !(href || rest.as)) {
            e?.preventDefault?.()
            rest.onClick(e)
          }
        }}
        style={
          rest.ellipsis
            ? {
                maxWidth: '100%',
                overflow: 'hidden',
                display: 'inline-block',
                textOverflow: 'ellipsis',
              }
            : {}
        }
      >
        <StyledLink {...linkProps} {...rest} resetCss={resetCss}>
          {content}
        </StyledLink>
      </span>
    )
  },
)

export default Link
