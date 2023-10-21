import {
  Children,
  cloneElement,
  FunctionComponent,
  memo,
  ReactElement,
  ReactNode,
  useState,
} from 'react'
import { v4 as uuidv4 } from 'uuid'

import { BoxProps } from '../Box'
import { StyledTooltip } from './Tooltip.styled'

/**
 * An almost-exact copy of Tooltip.tsx except that the `children` elements are not wrapped in a `Box` component,
 * meaning your layout doesn't get accidentally broken.
 *
 * This component **assumes** that there is only 1 child.
 *
 * This implementation should replace the current Tooltip.tsx component in the long term.
 */

export type TooltipProps = {
  /**
   * Text to display
   */
  label: ReactNode | string
  /**
   * Unique tooltip id
   */
  id?: string
  /**
   * Tooltip placement
   */
  place?: 'bottom' | 'left' | 'right' | 'top'
  /**
   * Tooltip background color
   */
  type?: 'dark' | 'success' | 'warning' | 'error' | 'info' | 'light'
  /**
   * Solid = static | float = follow mouse cursor
   */
  effect?: 'solid' | 'float'
  /**
   * Should hide tooltip
   */
  hideTooltip?: boolean
  /**
   * Delay to show tooltip
   */
  delayShow?: number
} & BoxProps

export const NonWrappingTooltip: FunctionComponent<TooltipProps> = memo(
  function NonWrappingTooltip({
    label,
    place = 'top',
    type = 'dark',
    effect = 'solid',
    hideTooltip = false,
    children,
    delayShow,
    ...props
  }) {
    // Assumes that props.id does not change.
    const [id] = useState(() => props.id || uuidv4())

    if (!children) {
      return null
    }

    if (
      typeof children === 'string' ||
      typeof children === 'number' ||
      typeof children === 'boolean'
    ) {
      return <div>{children}</div>
    }

    const tooltipChildren = cloneElement(Children.only(children as ReactElement), {
      'data-tip': true,
      'data-for': id,
    })

    return (
      <>
        {!hideTooltip && (
          <StyledTooltip
            id={id}
            place={place}
            type={type}
            effect={effect}
            multiline={true}
            delayShow={delayShow}
          >
            {typeof label === 'string' ? <span>{label}</span> : label}
          </StyledTooltip>
        )}
        {tooltipChildren}
      </>
    )
  },
)
