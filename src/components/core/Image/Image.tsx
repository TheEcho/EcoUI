import React, { FunctionComponent } from 'react'

import { imagePlaceholders, TImagePlaceholder } from '../../../shared/tokens/imagePlaceholders'
import { StyledImage, TStyledImageProps } from './Image.styled'

export type ImageProps = {
  brokenPlaceholderType?: TImagePlaceholder
} & TStyledImageProps

export const Image: FunctionComponent<ImageProps> = ({
  brokenPlaceholderType = 'transparent',
  ...rest
}) => {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    event.currentTarget.src = imagePlaceholders[brokenPlaceholderType]
  }

  return <StyledImage {...rest} onError={handleImageError} />
}

export default Image
