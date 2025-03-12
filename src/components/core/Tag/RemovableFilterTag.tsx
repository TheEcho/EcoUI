import { FunctionComponent, ReactNode } from 'react'

import { StyledRemovableFilterTag, TStyledRemovableFilterTag } from './RemovableFilterTag.styled'

export type RemovableFilterTagProps = {
  /**
   Text to display
   */
  label?: string
  /**
   * Size of the tag's text
   */
  size?: 'regular' | 'small' | 'small-very-comfy'
  /**
   * Reverse the icon / label order
   */
  reverse?: boolean
  /**
   * Callback when onClick
   */
  onClick: () => void

  /**
   * Icon of the tag (should use a cross)
   */
  icon: ReactNode
} & TStyledRemovableFilterTag

export const RemovableFilterTag: FunctionComponent<RemovableFilterTagProps> = ({
  label,
  reverse = false,
  onClick,
  icon,
  ...rest
}) => {
  return (
    <StyledRemovableFilterTag
      {...rest}
      label={label}
      reverse={reverse}
      size="small"
      borderRadius="medium"
      onClick={onClick}
      icon={icon}
    />
  )
}

export default RemovableFilterTag
