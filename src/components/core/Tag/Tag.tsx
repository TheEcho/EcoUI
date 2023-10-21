import { FunctionComponent, ReactNode } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { TBorderRadiusEnum } from '../../../shared/tokens/border'
import { TColor } from '../../../shared/tokens/color'
import { TSpacingSizeEnum } from '../../../shared/tokens/spacing'
import { Box, Icon, Text, Tooltip } from '../../core'
import { BoxProps } from '../Box'
import { TextProps } from '../Text'
import { StyledTag, StyledThumbnail } from './Tag.styled'

export type TagProps = {
  /**
    Text to display
   */
  label?: string
  /**
    Text to display in a tooltip on hover
   */
  title?: string
  /**
   * Color of the Tag
   */
  color?: BoxProps['background']
  /**
   * Reverse the icon / label order
   */
  reverse?: boolean
  /**
   * Size of the tag's text
   */
  size?: 'regular' | 'small' | 'xsmall'
  /**
   * Weight of the tag's text
   */
  weight?: 'regular' | 'medium' | 'bold'
  /**
   * Icon to display (React Node)
   */
  icon?: ReactNode
  /**
   * Thumbnail url to display
   */
  thumbnailUrl?: string
  /**
   * Color of the text
   */
  textColor?: TColor

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
  /**
   *
   */
  ellipsis?: TextProps['ellipsis']
  iconClicked?: () => void
  /**
   * On click on delete icon. Will prevail on BoxProps's onClick.
   */
  onDelete?: VoidFunction
  rounded?: boolean
  tooltipText?: string
} & BoxProps

export const Tag: FunctionComponent<TagProps> = ({
  children,
  label,
  color,
  textColor,
  reverse,
  icon,
  thumbnailUrl,
  size,
  iconClicked,
  weight = 'regular',
  ellipsis,
  borderRadius = 'medium',
  rounded = false,
  title,
  onDelete,
  tooltipText,
  ...rest
}) => {
  let innerTag = null
  const text = !!label ? (
    <Text
      color={textColor || 'text-lighter'}
      size={size}
      weight={weight}
      ellipsis={ellipsis}
      title={title}
    >
      {label}
    </Text>
  ) : null

  const image = <StyledThumbnail fit fitPosition="center" src={thumbnailUrl} size={size} />

  const _onDelete = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    onDelete?.()
  }

  const iconComponent = icon && (
    <Box direction="row" align="center" flex={false} onClick={iconClicked}>
      {icon}
    </Box>
  )

  const deleteIconComponent = !!onDelete && (
    <Box direction="row" align="center" flex={false} onClick={_onDelete}>
      <Icon size={'small'} icon={<XMarkIcon />} />
    </Box>
  )

  innerTag = (
    <Box gap={thumbnailUrl ? 'medium' : 'small'} direction="row" align="center">
      {reverse ? (
        <>
          {!!icon && iconComponent}
          {!!thumbnailUrl && image}
          {text}
          {deleteIconComponent}
        </>
      ) : (
        <>
          {deleteIconComponent} {text}
          {!!icon && iconComponent}
          {!!thumbnailUrl && image}
        </>
      )}
    </Box>
  )

  const content = !!text ? innerTag : children
  const TagWrapper = ({ children }: { children: ReactNode }) =>
    tooltipText ? <Tooltip label={tooltipText}>{children}</Tooltip> : <>{children}</>

  return (
    <TagWrapper>
      <StyledTag
        {...rest}
        background={color}
        icon={icon}
        thumbnailUrl={thumbnailUrl}
        rounded={rounded}
        reverse={reverse}
        borderRadius={rounded ? undefined : borderRadius}
        size={size}
        flex={false}
      >
        {content}
      </StyledTag>
    </TagWrapper>
  )
}

export default Tag
