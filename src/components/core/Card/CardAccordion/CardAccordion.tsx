import React, { FunctionComponent, ReactElement, ReactNode, useState } from 'react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

import { matchComponentName } from '../../../../utils/matchComponentName'
import { Box, Icon, IconProps } from '../..'
import { BoxProps } from '../../Box'
import { CardProps } from '../Card'
import { StyledCardAccordion, StyledCardAccordionHeaderSuffix } from './CardAccordion.styled'
import { Action, CardAccordionActions } from './CardAccordionActions/CardAccordionActions'
import { CardAccordionContent } from './CardAccordionContent/CardAccordionContent'
import { CardAccordionHeader } from './CardAccordionHeader/CardAccordionHeader'

type CardAccordionProps = {
  header?: ReactElement | string
  headerAlign?: BoxProps['align']
  paddingHorizontal?: BoxProps['paddingHorizontal']
  paddingVertical?: BoxProps['paddingHorizontal']
  actions?: Action[]
  onActionClick?: (action: Action) => void
  isOpen?: (open: boolean) => void
  suffixHeaderComponent?: ReactNode
  arrowIconComponent?: IconProps['icon']
  open?: boolean
  onToggle?: () => void
} & CardProps

export const CardAccordion: FunctionComponent<CardAccordionProps> = ({
  header,
  children,
  actions,
  onActionClick,
  suffixHeaderComponent,
  arrowIconComponent,
  open = false,
  onToggle,
  headerAlign = 'center',
  paddingHorizontal='sm-medium',
  paddingVertical='sm-medium',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(open)

  let headerContent
  let contentToDisplay
  let actionToDisplay

  const headerFromChildren = React.Children.toArray(children).find((element) => {
    return matchComponentName(element, 'CardAccordionHeader')
  })

  const contentFromChildren = React.Children.toArray(children).find((element) => {
    return matchComponentName(element, 'CardAccordionContent')
  })

  const actionsFromChildren = React.Children.toArray(children).find((element) => {
    return matchComponentName(element, 'CardAccordionActions')
  })

  if (header) {
    headerContent = <CardAccordionHeader>{header}</CardAccordionHeader>
  } else if (headerFromChildren) {
    headerContent = headerFromChildren
  } else {
    throw Error(
      'You must provide a header, by passing the header props (string) or by using the <CardAccordionHeader /> component',
    )
  }

  if (contentFromChildren) {
    contentToDisplay = contentFromChildren
  } else if (children) {
    contentToDisplay = <CardAccordionContent>{children}</CardAccordionContent>
  } else {
    throw Error(
      'You must provide a content, by provide a children to <CardAccordion /> or by using the <CardAccordionContent /> component',
    )
  }

  if (actions) {
    actionToDisplay = (
      <CardAccordionActions
        onClick={(action) => onActionClick && onActionClick(action)}
        actions={actions}
      />
    )
  } else if (actionsFromChildren) {
    actionToDisplay = actionsFromChildren
  }

  const toggleAccordion = (): void => {
    onToggle ? onToggle() : setIsOpen(!isOpen)
  }

  return (
    <StyledCardAccordion
      borderColor="border-light"
      borderSize="xsmall"
      flex
      borderRadius="large"
      padding="none"
      preventDefaultMediaQuery
      {...props}
    >
      <StyledCardAccordionHeaderSuffix direction="column">
        {suffixHeaderComponent && (
          <Box padding="sm-medium" paddingTop="small" paddingBottom="small">
            {suffixHeaderComponent}
          </Box>
        )}

        <Box
          direction="row"
          justify="between"
          align={headerAlign}
          onClick={() => toggleAccordion()}
          paddingHorizontal={paddingHorizontal}
          paddingVertical={paddingVertical}
        >
          {headerContent}
          {arrowIconComponent ? (
            arrowIconComponent
          ) : (
            <Icon icon={<ChevronUpIcon />} color="border-dark" rotate={open ? 180 : 0} />
          )}
        </Box>
      </StyledCardAccordionHeaderSuffix>

      {!open && actionToDisplay}
      {open && contentToDisplay}
    </StyledCardAccordion>
  )
}
