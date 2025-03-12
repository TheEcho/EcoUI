import { FunctionComponent } from 'react'
import { HandThumbUpIcon } from '@heroicons/react/24/outline'

import { BoxProps, Icon, Text } from '..'
import { IconProps } from '../Icon'
import { TextProps } from '../Text'

import { StyledBox } from './Likes.styled'

type LikesProps = {
  /**
   * Callback called when button clicked (if hasLiked is false)
   * @default "() => {}"
   */
  onLike?: () => void
  /**
   * Callback called when button clicked (if hasLiked is true)
   * @default "() => {}"
   */
  onUnlike?: () => void
  /**
   * number of likes to show
   */
  likesCount?: number
  /**
   * whether or not the viewer has liked already
   * @default false
   */
  hasLiked?: boolean
  /**
   * props passed to the underlying Icon component
   */
  iconProps?: IconProps
  /**
   * props passed to the underlying Text component
   */
  textProps?: TextProps
  /**
   * whether or not the Like is in hidden state
   * @default false
   */
  isHidden?: boolean
  /**
   * whether or not the Like is in disabled state
   * @default false
   */
  disabled?: boolean
} & BoxProps

export const Likes: FunctionComponent<LikesProps> = ({
  onLike = () => {
    //
  },
  onUnlike = () => {
    //
  },
  iconProps,
  textProps,
  likesCount,
  hasLiked = false,
  isHidden = false,
  disabled = false,
  ...rest
}) => {
  return (
    <StyledBox direction='row' align='center' gap='small' {...(disabled ? { disabled: true } : { onClick: hasLiked ? onUnlike : onLike })}  {...rest}>
      <Icon
        color={hasLiked ? 'secondary-light' : (isHidden && 'text-light') || 'text'}
        size="sm-medium"
        icon={<HandThumbUpIcon />}
        {...iconProps}
      />
      {typeof likesCount === 'number' && (
        <Text
          color={hasLiked ? 'secondary-light' : (isHidden && 'text-light') || 'text'}
          size="regular"
          weight={hasLiked ? 'medium' : 'regular'}
          {...textProps}
        >
          {likesCount}
        </Text>
      )}
    </StyledBox>
  )
}
