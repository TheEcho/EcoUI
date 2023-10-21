import NextLink from 'next/link'
import { FunctionComponent, memo } from 'react'

import { TabSize, TSVGSizeEnum, TTextSize } from '@/index'

import { TColor } from '../../../shared/tokens/color'
import { BoxProps } from '../Box'
import { Icon, IconProps } from '../Icon'
import { Tag } from '../Tag'
import { Text } from '../Text'
import { StyledTab } from './Tabs.styled'

export type TabProps = {
  /**
   * Tab title that will be displayed
   */
  title: string
  /**
   * Whether or not the tab must be displayed as selected
   */
  selected?: boolean
  /**
   * Whether or not the tab must be displayed as disabled (not clickable)
   * @default false
   */
  disabled?: boolean
  /**
   * Tab link. Prefer this to `onClick` if you only need to redirect to another page
   */
  href?: string
  /**
   * Function invoked as an event as soon as tab is clicked
   */
  onClick?: (value: string) => void
  /**
   * Icon that should be rendered on the left of the title (it takes the color of the text)
   */
  icon?: IconProps['icon']
  /**
   * It can be used to render a smaller Tab component
   * @default "medium"
   */
  size?: TabSize
  /**
   * Color of text / icon when it is not selected
   * @default "text"
   */
  color?: TColor
  /**
   * Color that should be used when a tab is disabled
   * @default "text-light"
   */
  disabledColor?: TColor
  /**
   * Color that should be used when a tab is selected or hovered
   * @default "critical"
   */
  selectedColor?: TColor
  /**
   * Tag added to end of Tab
   */
  suffixTagLabel?: string | number
} & BoxProps

export const Tab: FunctionComponent<TabProps> = memo(function Tab(props) {
  const {
    color = 'text-light',
    title,
    icon,
    disabled,
    selected,
    onClick,
    href,
    size = 'medium',
    suffixTagLabel,
    ...rest
  } = props
  const isClickable = !disabled && !!(onClick || href)

  const customSize: Record<
    TabSize,
    { iconSize: TSVGSizeEnum; textSize: TTextSize; tagSize: 'small' | 'xsmall' | 'regular' }
  > = {
    small: {
      iconSize: 'tiny',
      textSize: 'regular',
      tagSize: 'small',
    },
    medium: {
      iconSize: 'small',
      textSize: 'large',
      tagSize: 'regular',
    },
    large: {
      iconSize: 'large',
      textSize: 'xlarge',
      tagSize: 'regular',
    },
  }

  const tabContent = (
    <>
      {icon && <Icon icon={icon} size={customSize[size].iconSize} color={color} />}
      <Text size={customSize[size].textSize} weight="medium" color={color}>
        {title}
      </Text>
      {suffixTagLabel !== undefined && (
        <Tag
          label={`${suffixTagLabel}`}
          color={[color, 10]}
          textColor={color}
          maxHeight={2}
          size={customSize[size].tagSize}
        />
      )}
    </>
  )

  return (
    <StyledTab
      flex={false}
      direction="row"
      paddingBottom="xsmall"
      gap="sm-medium"
      align="center"
      selected={selected}
      disabled={disabled}
      title={title}
      isClickable={isClickable}
      {...(isClickable && { onClick, cursor: 'pointer' })}
      {...rest}
    >
      {href ? (
        <NextLink href={href}>
          <a href={href}>{tabContent}</a>
        </NextLink>
      ) : (
        tabContent
      )}
    </StyledTab>
  )
})

export default Tab
