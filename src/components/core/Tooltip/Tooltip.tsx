import { FunctionComponent, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Box, BoxProps } from '../Box'
import { StyledTooltip } from './Tooltip.styled'

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
   * Should hide tooltip
   */
  hideTooltip?: boolean
  /**
   * Delay to show tooltip
   */
  delayShow?: number
} & BoxProps

export const Tooltip: FunctionComponent<TooltipProps> = ({
  label,
  place = 'top',
  type = 'dark',
  hideTooltip = false,
  children,
  delayShow,
  ...props
}) => {
  // Required when component used in a list
  const id = props.id || uuidv4()

  return (
    <Box data-tip data-for={id} {...props}>
      {!hideTooltip && (
        <StyledTooltip
          id={id}
          place={place}
          variant={type}
          delayShow={delayShow}
        >
          {typeof label === 'string' ? <span>{label}</span> : label}
        </StyledTooltip>
      )}

      {children}
    </Box>
  )
}

export default Tooltip
