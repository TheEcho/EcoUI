import { FunctionComponent, ReactNode } from 'react'

import { TSVGSizeEnum } from '../../../shared/tokens'
import { BoxProps } from '../../core/Box'
import { Icon } from '../../core/Icon'
import { ImageProps } from '../../core/Image'
import { Text, TextProps } from '../../core/Text'
import { Thumbnail, ThumbnailProps } from '../../core/Thumbnail'
import { StyledContainer } from './Avatar.styled'

export type AvatarProps = {
  /**
   * the url that should be used by the underlying Thumbnail component
   */
  src?: ThumbnailProps['src']
  /**
   * icon displayed
   */
  icon?: ReactNode
  /**
   * title prop passed to the underlying Thumbnail component
   */
  title?: ImageProps['title']
  /**
   * size of the text used for initials (firstName + lastName)
   * @default "small"
   */
  textSize?: TextProps['size']
  /**
   * background color of the avatar
   * @default "primary"
   */
  background?: BoxProps['background']
  /**
   * borderColor of the avatar
   */
  borderColor?: BoxProps['borderColor']
  /**
   * borderSize of the avatar
   */
  borderSize?: BoxProps['borderSize']
  /**
   * firstName used to show initials when prop src is not passed
   * @default ""
   */
  firstName?: string
  /**
   * lastName used to show initials when prop src is not passed
   * @default ""
   */
  lastName?: string
  /**
   * default icon size displayed when no src or first name & last name
   * @default "medium"
   */
  defaultIconSize?: TSVGSizeEnum
  /**
   * width of the thumbnail / avatar
   */
  width: number
  /**
   * height of the thumbnail / avatar
   */
  height: number
}

export const Avatar: FunctionComponent<AvatarProps> = ({
  firstName = '',
  lastName = '',
  height,
  width,
  background = 'primary',
  textSize = 'small',
  defaultIconSize = 'medium',
  src,
  icon,
  title,
  ...props
}) => {
  const showUserIcon = Boolean(!src && !firstName && !lastName)
  return (
    <StyledContainer
      width={width / 10}
      height={height / 10}
      background={background}
      {...(showUserIcon && {
        background: 'background',
        borderColor: props.borderColor ? props.borderColor : 'border-light',
        borderSize: 'small',
      })}
      align="center"
      justify="center"
      flex={false}
      {...props}
    >
      {!!src && <Thumbnail rounded title={title} src={src} height={height} width={width} />}
      {Boolean(!src && (firstName || lastName)) && (
        <Text color="text-lighter" size={textSize}>
          {firstName.slice(0, 1).toUpperCase()}
          {lastName.slice(0, 1).toUpperCase()}
        </Text>
      )}
      {showUserIcon && icon}
    </StyledContainer>
  )
}
