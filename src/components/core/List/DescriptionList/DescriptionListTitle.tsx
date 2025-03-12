import { FunctionComponent } from 'react'

import { Text } from '../../../core'
import { StyledDescriptionListTitle } from './DescriptionListTitle.styled'

export type DescriptionListTitleProps = {
  /**
   Text of the description
   */
  title: string
}

export const DescriptionListTitle: FunctionComponent<DescriptionListTitleProps> = ({
  title,
  ...rest
}) => {
  return (
    <StyledDescriptionListTitle {...rest}>
      <Text color="text-dark" weight="medium">
        {title}
      </Text>
    </StyledDescriptionListTitle>
  )
}
