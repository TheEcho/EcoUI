import { ComponentProps, FunctionComponent, ReactNode, useRef, useState } from 'react'

import { Box, Button } from '../../core'
import { ActionList, ActionListProps } from '../ActionList'
import { Drop } from '../Drop'
import Text from '../Text'
import { StyledButtonDropdown, StyledIcon, StyledIconContainer } from './ButtonDropdown.styled'

type ButtonDropdownProps = {
  label?: string
  icon?: ReactNode
  items?: ActionListProps['items']
  itemClicked?: (item: unknown) => void
  hideCardStyle?: boolean
} & Partial<ComponentProps<typeof Button>>

export const ButtonDropdown: FunctionComponent<ButtonDropdownProps> = ({
  label,
  children,
  items,
  itemClicked,
  variant = 'secondary',
  hideCardStyle,
  icon,
  ...rest
}) => {
  const [show, setShow] = useState(false)
  const onToggle = (): void => setShow(!show)
  const onDropClose = (): void => setShow(false)
  const onClick = (item: unknown): void => {
    itemClicked && itemClicked(item)
    setShow(false)
  }

  const buttonRef = useRef<HTMLButtonElement>(null)

  let drop = null

  if (show && buttonRef.current) {
    if (items) {
      drop = (
        <Drop
          onClickOutside={onDropClose}
          dropTarget={buttonRef.current}
          hideCardStyle={hideCardStyle}
        >
          <ActionList items={items} onClick={onClick} />
        </Drop>
      )
    } else {
      drop = (
        <Drop
          onClickOutside={onDropClose}
          dropTarget={buttonRef.current}
          hideCardStyle={hideCardStyle}
        >
          {children}
        </Drop>
      )
    }
  }

  return (
    <>
      <StyledButtonDropdown {...rest} onClick={onToggle} ref={buttonRef} variant={variant}>
        <Box direction="row" padding="none">
          <Box
            direction="row"
            align="center"
            padding="xsmall"
            paddingRight="small"
            paddingLeft="small"
            gap="small"
          >
            {icon}
            <Text weight="medium" size="small">
              {label}
            </Text>
          </Box>
          <StyledIconContainer
            flex={false}
            direction="row"
            align="center"
            justify="center"
          >
            <StyledIcon variant={variant} />
          </StyledIconContainer>
        </Box>
      </StyledButtonDropdown>
      {drop}
    </>
  )
}

export default ButtonDropdown
