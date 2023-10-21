import { FunctionComponent } from 'react'

import { TColor } from '../../../shared/tokens/color'
import { BoxProps } from '../Box'
import { Tab, TabProps } from './Tab'
import { StyledTabs } from './Tabs.styled'

export type TabSize = 'small' | 'medium' | 'large'

export type TabsProps = {
  /**
    Tabs can be passed as children or with this prop, it will render the underlying <Tab /> components (see Tab props)
   */
  tabs?: TabProps[]
  /**
   * Color of tabs text / icon when they are not selected
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
   * It can be used to render a smaller Tabs component
   * @default "medium"
   */
  size?: TabSize
} & BoxProps

export const Tabs: FunctionComponent<TabsProps> = props => {
  const { color, disabledColor, selectedColor, tabs, children, size = 'medium', ...rest } = props
  return (
    <StyledTabs flex={false} size={size} {...rest}>
      {tabs?.length
        ? tabs.map(tab => (
            <Tab
              key={tab.icon ? `${tab.title}-${tab.icon}` : tab.title}
              color={color}
              disabledColor={disabledColor}
              selectedColor={selectedColor}
              size={size}
              {...tab}
            />
          ))
        : children}
    </StyledTabs>
  )
}

export default Tabs
