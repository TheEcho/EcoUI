import {
  ComponentProps,
  Fragment,
  FunctionComponent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react'

import { TColor } from '@/index'

import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Button, Icon } from '../../core'
import { ActionList } from '../ActionList'
import { Drop } from '../Drop'
import { StyledDropProps } from '../Drop/Drop.styled'

type DropDownProps = {
  label?: string
  items?: any[]
  itemClicked?: (item: any) => void
  hideCardStyle?: boolean
  maxHeight?: number
  dropAlign?: StyledDropProps['dropAlign']
  titleMobile?: string
  forceColorVariant?: boolean
} & Partial<ComponentProps<typeof Button>>

/**
 * Dropdown Component
 *
 * TODO:
 *
 *  - Labeled Dropdown
 *  - Examples with ActionList
 */
export const Dropdown: FunctionComponent<DropDownProps> = ({
  label,
  icon,
  reverse,
  children,
  items,
  itemClicked,
  forceColorVariant,
  variant = forceColorVariant ? undefined : 'secondary',
  hideCardStyle,
  maxHeight,
  dropAlign,
  titleMobile,
  ...rest
}) => {
  const [show, setShow] = useState(false)
  const onToggle = (): void => setShow(!show)
  const onDropClose = (): void => setShow(false)
  const onClick = useCallback(
    (item: any) => {
      itemClicked?.(item)
      setShow(false)
    },
    [itemClicked],
  )

  const buttonRef = useRef<HTMLButtonElement>(null)

  const drop = useMemo(() => {
    if (!show || !buttonRef.current) {
      return null
    }

    if (items) {
      return (
        <Drop
          onClickOutside={onDropClose}
          dropTarget={buttonRef.current}
          hideCardStyle={hideCardStyle}
          maxHeight={maxHeight}
          dropAlign={dropAlign}
          titleMobile={titleMobile}
        >
          <ActionList items={items} onClick={onClick} />
        </Drop>
      )
    }

    return (
      <Drop
        onClickOutside={onDropClose}
        dropTarget={buttonRef.current}
        hideCardStyle={hideCardStyle}
        maxHeight={maxHeight}
        dropAlign={dropAlign}
      >
        {children}
      </Drop>
    )
  }, [children, dropAlign, hideCardStyle, items, maxHeight, onClick, show, titleMobile])

  const iconColor = useMemo<TColor>(() => {
    switch (variant) {
      case 'primary':
        return 'text-lighter'
      case 'secondary':
      case 'outline':
      case 'ghost':
      case 'text':
      default:
        return 'text'
    }
  }, [variant])

  return (
    <Fragment>
      <Button
        {...rest}
        label={label}
        icon={icon ?? <Icon icon={<ChevronDownIcon />} color={iconColor} size="small" />}
        reverse={reverse ?? !!icon ? false : true}
        onClick={onToggle}
        ref={buttonRef}
        variant={variant}
      />
      {drop}
    </Fragment>
  )
}

export default Dropdown
