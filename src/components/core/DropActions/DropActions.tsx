import React, {
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'

import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import { Box, Drop, Icon, IconProps, Tooltip } from '..'
import { StyledDropProps } from '../Drop/Drop.styled'
import { TSVGSizeEnum } from './../../../shared/tokens'
import { StyledDropActionsIconContainer } from './DropActions.styled'
import { DropActionsItem } from './DropActionsItem/DropActionsItem'

export type TDropActionType = 'delete' | 'separator'
export type TDropAction = {
  title: string
  onClick?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  href?: string
  type?: TDropActionType
  icon?: IconProps['icon']
  iconSize?: TSVGSizeEnum
}

export type TDropActionDropComponent = { closePanel?: () => void }

export type DropActionsProps = PropsWithChildren<{
  icon?: IconProps['icon']
  /**
   * actions array of form { title: string; type?: TDropActionType; onClick: () => void }
   */
  actions?: TDropAction[]
  /**
   * instantiated component to be rendered instead of the dots icon
   */
  buttonContent?: ReactNode
  /**
   * React Element to be rendered instead of the underlying DropActions component
   */
  dropComponent?: ReactElement
  /**
   * dropAlign prop passed to the underlying Drop component
   */
  dropAlign?: StyledDropProps['dropAlign']
  /**
   * Whether or not the tooltip is hidden
   * @default false
   */
  disabled?: boolean
  /**
   * Text to be shown if tooltip is disabled
   */
  disabledTooltip?: ReactElement | string
  /**
   * Controls whether or not the Drop is open
   * @default false
   */
  dropState?: boolean
  /**
   * True if button is flex
   * @default false
   */
  isButtonFlex?: boolean
  /**
   * True if borders of the drop component have to be visible.
   * Must be a card type.
   * @default false
   */
  isDropBorderVisible?: boolean
  /**
   * Max width of the drop component. Useful when button is flex,
   * to avoid having a full width drop component
   */
  maxDropWidth?: number

  /**
   * True if drop doesn't have mobile format
   */
  noMobileFormat?: boolean
  /**
   * To show a title to mobile format
   */
  titleMobile?: string
  /**
   * Custom on click outside handler
   */
  onClickOutside?: () => void
  /**
   * Stop event propagation after action click
   */
  stopPropagation?: boolean
}>

export const DropActions: FunctionComponent<DropActionsProps> = ({
  actions,
  children,
  buttonContent,
  dropAlign,
  dropComponent,
  maxDropWidth,
  noMobileFormat,
  disabled = false,
  disabledTooltip = 'Désactivé',
  dropState = false,
  isButtonFlex = false,
  isDropBorderVisible = false,
  stopPropagation = false,
  titleMobile,
  onClickOutside,
  icon = <EllipsisHorizontalIcon />,
}) => {
  const [isDropOpen, setIsDropOpen] = useState(dropState)

  useEffect(() => {
    setIsDropOpen(dropState)
  }, [dropState])

  const ref = useRef<HTMLInputElement>(null)

  let content

  const actionClicked = (
    action: TDropAction,
    e?: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    setIsDropOpen(false)

    action?.onClick?.(e)
    if (stopPropagation) {
      e?.stopPropagation()
    }
  }

  const toggleDropState = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault()

    !disabled && setIsDropOpen(!isDropOpen)
    if (stopPropagation) {
      e.stopPropagation()
    }
  }

  if (dropComponent) {
    content = React.cloneElement(dropComponent, {
      closePanel: () => setIsDropOpen(false),
      onClick: () => {
        setIsDropOpen(false)
      },
    })
  } else {
    content = actions?.length ? (
      <Box direction="column" paddingTop="xsmall" paddingBottom="xsmall">
        {actions?.map((action, index) => (
          <DropActionsItem key={index} action={action} onClick={e => actionClicked(action, e)} />
        ))}
      </Box>
    ) : (
      children
    )
  }

  return (
    <Box flex={false}>
      <Tooltip
        direction="row"
        justify="center"
        label={disabledTooltip}
        place="bottom"
        hideTooltip={!disabled}
      >
        <Box flex={isButtonFlex} ref={ref} onClick={toggleDropState}>
          {buttonContent || (
            <StyledDropActionsIconContainer justify="center" align="center">
              <Icon icon={icon} size="medium" />
            </StyledDropActionsIconContainer>
          )}
        </Box>
        {ref.current && isDropOpen && (
          <Drop
            dropTarget={ref.current}
            onClickOutside={() => onClickOutside?.() || setIsDropOpen(false)}
            dropAlign={dropAlign}
            preventDefaultMediaQuery
            isDropBorderVisible={isDropBorderVisible}
            maxDropWidth={maxDropWidth}
            noMobileFormat={noMobileFormat}
            titleMobile={titleMobile}
          >
            {content}
          </Drop>
        )}
      </Tooltip>
    </Box>
  )
}
