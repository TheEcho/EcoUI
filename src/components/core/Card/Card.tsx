import { forwardRef, ReactNode } from 'react'

import { Box, BoxProps } from '../Box'
import { StyledCard } from './Card.styled'
import { CardHeader } from './CardHeader'

export type CardProps = {
  /**
   * Header title
   */
  header?: string | ReactNode
  /**
   * Card title
   */
  title?: React.ReactNode
  hideCardStyle?: boolean
  /**
   * Allow to hide duplicate not wanted Card styled
   */
  preventDefaultMediaQuery?: boolean
} & BoxProps

export const CardWithHeaderContainer = forwardRef<HTMLDivElement, CardProps>(
  (
    { header, borderRadius, background, elevation, flex, padding, direction, children, ...rest },
    ref,
  ) => {
    const props = {
      borderRadius,
      background,
      elevation,
      direction,
    }

    return (
      <StyledCard {...props} {...rest} flex={flex} ref={ref}>
        {!!header && <CardHeader header={header} />}
        <Box margin="none" padding={padding} direction={direction}>
          {children}
        </Box>
      </StyledCard>
    )
  },
)
CardWithHeaderContainer.displayName = 'CardWithHeaderContainer'

/**
 * Card is a Box component with default props for styling
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      header,
      title,
      borderRadius = 'medium',
      background = 'background-lighter',
      padding = 'large',
      elevation = 'medium',
      direction = 'column',
      children,
      flex = false,
      hideCardStyle = false,
      preventDefaultMediaQuery = false,
      ...rest
    },
    ref,
  ) => {
    let contents = children
    if (title) {
      contents = (
        <Box direction="column">
          {title}
          {children}
        </Box>
      )
    }

    let props: BoxProps

    if (hideCardStyle) {
      props = {
        borderRadius: 'none',
        background,
        padding,
        elevation: 'none',
        direction,
      }
    } else {
      props = {
        borderRadius,
        background,
        padding,
        elevation,
        direction,
      }
    }

    if (!!header) {
      const { ...propsWithoutPadding } = props
      const propsWithHeader = {
        header,
        ...propsWithoutPadding,
      }
      return (
        <CardWithHeaderContainer
          {...propsWithHeader}
          {...rest}
          flex={flex}
          ref={ref}
          preventDefaultMediaQuery={preventDefaultMediaQuery}
          hideCardStyle={hideCardStyle}
        >
          {contents}
        </CardWithHeaderContainer>
      )
    }

    return (
      <StyledCard
        {...props}
        {...rest}
        ref={ref}
        flex={flex}
        preventDefaultMediaQuery={preventDefaultMediaQuery}
        hideCardStyle={hideCardStyle}
      >
        {contents}
      </StyledCard>
    )
  },
)

Card.displayName = 'Card'

export default Card
