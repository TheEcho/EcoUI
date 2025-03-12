import { FunctionComponent } from 'react'

import { Box, BoxProps } from '../../../Box'

type CardAccordionHeaderProps = {
  componentName?: string
} & BoxProps

export const CardAccordionHeader: FunctionComponent<CardAccordionHeaderProps> = ({
  children,
  ...props
}) => {
  return <Box {...props}>{children}</Box>
}
