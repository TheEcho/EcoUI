import React, { forwardRef, FunctionComponent } from 'react'

import styled from '@emotion/styled'

import { Card, CardProps } from './Card'
import { CardHeader } from './CardHeader'

export type CardSectionProps = Omit<CardProps, 'title'>

const StyledCardWithSection = styled(Card)<{ hasHeader?: boolean }>(({ theme, hasHeader }) => {
  const removeBorderRadiusSelector = hasHeader ? '&:last-child' : '&:not(:first-child):last-child'

  return {
    padding: 0,
    '& > *': {
      ':not(:last-child)': {
        borderTop: 'none',
        borderBottom: `solid ${theme.border.size.xsmall} ${theme.color['border-light']}`,
        borderBottomLeftRadius: theme.border.radius.none,
        borderBottomRightRadius: theme.border.radius.none,
      },
      [removeBorderRadiusSelector]: {
        borderBottom: 0,
        borderTopLeftRadius: theme.border.radius.none,
        borderTopRightRadius: theme.border.radius.none,
      },
    },
  }
})

export const CardWithSection = forwardRef<HTMLDivElement, CardSectionProps>(
  ({ header, children, ...props }, ref) => (
    <StyledCardWithSection {...props} hasHeader={!!header} ref={ref}>
      {!!header && <CardHeader header={header} />}
      {children}
    </StyledCardWithSection>
  ),
)
CardWithSection.displayName = 'CardWithSection'

export const CardSection: FunctionComponent<Omit<CardProps, 'header'>> = ({ ...props }) => (
  <Card elevation="none" preventDefaultMediaQuery {...props} />
)

export default CardWithSection
