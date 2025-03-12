import { FunctionComponent } from 'react'

import { TColor, TSpacingSizeEnum } from '@/index'

import { Box } from '../Box'
import { BoxProps } from '../Box'
import { Heading } from '../Heading'
import { StyledSeparator } from './Separator.styled'

type SeparatorProps = {
  text?: string
  spacing?: TSpacingSizeEnum
  variant?: 'regular' | 'empty' | 'line'
  color?: TColor
} & BoxProps

export const Separator: FunctionComponent<SeparatorProps> = ({
  children,
  text,
  spacing = 'medium',
  align = 'center',
  variant = 'empty',
  color = 'border',
  ...props
}) => {
  let content

  if (children) {
    content = children
  } else if (text) {
    content = (
      <Heading variant="card-header-title" color="text-light">
        {text}
      </Heading>
    )
  }

  if (variant === 'regular') {
    content = (
      <Box padding="small" paddingTop="none" paddingBottom="none" flex={false}>
        {content}
      </Box>
    )
  }

  return (
    <StyledSeparator
      align={align}
      justify="center"
      padding={spacing}
      paddingRight="none"
      paddingLeft="none"
      variant={variant}
      color={color}
      {...props}
    >
      {content}
    </StyledSeparator>
  )
}
