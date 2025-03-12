import { FunctionComponent } from 'react'

import { Avatar } from '../Avatar'
import { TStyledSvgIconProps } from '../Icon/Icon.styled'

type Props = {
  size?: 'tiny' | 'atomic'
  title?: string
  color?: TStyledSvgIconProps['color']
  withBorder?: boolean
}

export const OverlapAvatar: FunctionComponent<Props> = ({
  title,
  color,
  size = 'tiny',
  withBorder = false,
}) => {
  const iconHighlightSize = size === 'atomic' ? 1.5 : 2
  const nameSplit = title?.split(' ')?.filter((s) => s.match(/^\w/))
  const firstName = nameSplit?.[0]
  const lastName = nameSplit?.slice(1)?.join(' ')

  return (
    <Avatar
      width={iconHighlightSize * 10}
      height={iconHighlightSize * 10}
      firstName={firstName}
      {...(size === 'tiny' && { lastName })}
      background={color}
      borderColor={withBorder ? 'background' : undefined}
      borderSize={withBorder ? 'xsmall' : undefined}
      textSize="xsmall"
    />
  )
}
