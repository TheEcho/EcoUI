import { FunctionComponent, ReactNode } from 'react'

import { TBorderRadiusEnum, TBorderSizeEnum } from '../../../shared/tokens/border'
import { TColor } from '../../../shared/tokens/color'
import { TSpacingSizeEnum } from '../../../shared/tokens/spacing'
import { TTextSize, TTextWeight } from '../../../shared/tokens/text'
import { Text } from '../Text'
import { StyledBadge } from './Badge.styled'

export type BadgeProps = {
  /**
     Text to display
     */
  label?: string
  /**
   * Color of the Tag
   */
  background?: TColor
  /**
   * Reverse the icon / label order
   */
  reverse?: boolean
  /**
   * Size of the tag's text
   */
  size?: TTextSize
  /**
   * Weight of the tag's text
   */
  weight?: TTextWeight
  /**
   * Icon to display (React Node)
   */
  icon?: ReactNode
  /**
   * Color of the text
   */
  color?: TColor

  /**
   * Padding inside Box
   */
  padding?: TSpacingSizeEnum
  /**
   * Margin inside Box
   */
  margin?: TSpacingSizeEnum

  /**
   * Border radius of box
   */
  borderRadius?: TBorderRadiusEnum

  borderSize?: TBorderSizeEnum
  borderColor?: TColor
}

export const Badge: FunctionComponent<BadgeProps> = ({
  label = '',
  background = 'primary',
  color = 'text-lighter',
  size = 'small',
  weight = 'regular',
  borderSize = 'none',
  borderColor = 'border',
  ...rest
}) => {
  return (
    <StyledBadge
      {...rest}
      background={background}
      borderSize={borderSize}
      borderColor={borderColor}
      direction="column"
      justify="around"
      borderRadius="medium"
      flex={false}
      align="center"
    >
      <Text size={size} color={color} weight={weight}>
        {label}
      </Text>
    </StyledBadge>
  )
}

export default Badge
