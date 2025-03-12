import { FunctionComponent } from 'react'

import { BoxProps } from '../Box'
import { Image, ImageProps } from '../Image'
import { StyledThumbnail } from './Thumbnail.styled'

export type ThumbnailProps = {
  /**
   * the url that should be used by the underlying Thumbnail component
   */
  src: string
  /**
   * width of the thumbnail
   * @default 32
   */
  width?: number
  /**
   * height of the thumbnail
   * @default 32
   */
  height?: number
  /**
   * whether or not the Thumbnail must be displayed as rounded
   * @default false
   */
  rounded?: boolean
  /**
   * width passed to the underlying Image component instead of prop "width"
   * @default false
   */
  imgWidth?: number
  /**
   * height passed to the underlying Image component instead of prop "height"
   * @default false
   */
  imgHeight?: number
  /**
   * whether or not the border should be a little bit lighter
   * @default false
   */
  lightBorder?: boolean
  /**
   * title of the underlying Image component
   */
  title?: ImageProps['title']
  /**
   * thumbnail's background
   */
  background?: BoxProps['background']
} & BoxProps

export const Thumbnail: FunctionComponent<ThumbnailProps> = ({
  src,
  width = 32,
  height = 32,
  rounded = false,
  imgWidth = 0,
  imgHeight = 0,
  lightBorder = false,
  background = 'background',
  title,
  ...props
}) => {
  return (
    <StyledThumbnail
      width={width / 10}
      height={height / 10}
      direction="row"
      flex={false}
      rounded={rounded}
      align="center"
      justify="center"
      background={background}
      lightBorder={lightBorder}
      {...props}
    >
      <Image title={title} src={src} width={imgWidth || width} height={imgHeight || height} />
    </StyledThumbnail>
  )
}
