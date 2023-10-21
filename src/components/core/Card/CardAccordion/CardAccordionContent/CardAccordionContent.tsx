import React, { FunctionComponent } from 'react'

import { BoxProps } from '../../../Box'
import { Text } from '../../../Text'
import { StyledCardAccordionContent } from './CardAccordionContent.styled'

type CardAccordionContentProps = {
  componentName?: string
  loading?: boolean
} & BoxProps

export const CardAccordionContent: FunctionComponent<CardAccordionContentProps> = ({
  children,
  padding = 'sm-medium',
  paddingBottom = 'medium',
  loading,
  ...props
}) => {
  const otherProps = {
    padding,
    paddingBottom,
  }

  if (loading) {
    return (
      <StyledCardAccordionContent padding={padding}>
        <Text>Chargement...</Text>
      </StyledCardAccordionContent>
    )
  }

  return (
    <StyledCardAccordionContent {...otherProps} {...props} direction="column">
      {children}
    </StyledCardAccordionContent>
  )
}

CardAccordionContent.defaultProps = {
  componentName: 'CardAccordionContent',
}
