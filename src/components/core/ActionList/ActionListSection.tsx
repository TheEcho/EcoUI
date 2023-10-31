import { FunctionComponent, PropsWithChildren } from 'react'
import { isMobile } from 'react-device-detect'

import { renderActionListItems } from './ActionList'
import { ActionListItemProps } from './ActionListItem'
import { StyledActionListSection } from './ActionListSection.styled'
import Box from '../Box'
import Icon, { IconProps } from '../Icon'
import { Heading } from '../Heading'

export type ActionListSectionProps = PropsWithChildren<{
  title?: string
  icon?: IconProps['icon']
  label?: string
  sectionIndex?: number
  actionListItems?: ActionListItemProps[]
  onClick?: () => void
}>
export const ActionListSection: FunctionComponent<ActionListSectionProps> = ({
  children,
  icon,
  title,
  sectionIndex = 0,
  actionListItems,
  onClick,
  ...rest
}) => {
  let content = null
  if (actionListItems) {
    content = renderActionListItems(actionListItems, onClick)
  } else {
    content = children
  }

  return (
    <StyledActionListSection
      sectionIndex={sectionIndex}
      {...rest}
      direction="column"
      onClick={onClick}
    >
      {!!title && (
        <Box paddingHorizontal="small" borderColor="border-light" borderSize="xsmall">
          <Box {...(isMobile && { height: 3.2 })} direction="row" align="center">
            {icon ? (
              <Box marginRight="xsmall" flex={false}>
                <Icon icon={icon} size="sm-medium" />
              </Box>
            ) : null}
            <Heading variant="section-title" color="text-light">
              {title}
            </Heading>
          </Box>
        </Box>
      )}
      {content}
    </StyledActionListSection>
  )
}
