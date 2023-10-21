import { ReactNode } from 'react'

import { StyledActionList } from './ActionList.styled'
import { ActionListItem, ActionListItemProps } from './ActionListItem'
import { ActionListSection, ActionListSectionProps } from './ActionListSection'
import { WithChildren } from '@/types/WithChildren'

export type ActionListProps = {
  sections?: ActionListSectionProps[]
  items?: ActionListItemProps[]
  flex?: boolean | 'grow' | 'shrink'
  onClick?: (item: any, e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  variants?: 'with-input'
  maxWidth?: string
} & WithChildren

export const renderActionListItems = (
  items: ActionListItemProps[],
  onClick?: ActionListProps['onClick'],
): ReactNode => {
  return items.map((item, index) => {
    return (
      <ActionListItem
        key={index}
        title={item.title}
        label={item.label}
        description={item.description}
        icon={item.icon}
        selected={item.selected}
        onClick={e => item.onClick?.(e) || onClick?.(item, e)}
      />
    )
  })
}

const renderActionListSectionItems = (
  sections: ActionListSectionProps[],
  onClick?: ActionListProps['onClick'],
): ReactNode => {
  return sections.map((section, index) => {
    return (
      <ActionListSection
        key={index}
        title={section.title}
        actionListItems={section.actionListItems}
        onClick={() => section.onClick?.() || onClick?.(section)}
      />
    )
  })
}

export const ActionList = ({
  flex,
  sections,
  items,
  children,
  onClick,
  variants,
  maxWidth = 'initial',
  ...rest
}: ActionListProps) => {
  let content = null

  if (sections && items) {
    console.warn('Should use sections OR items props')
  }
  if (items) {
    content = renderActionListItems(items, onClick)
  } else if (sections) {
    content = renderActionListSectionItems(sections, onClick)
  } else {
    content = children
  }
  return (
    <div style={{ maxWidth }}>
      <StyledActionList
        {...rest}
        borderColor="border-light"
        padding="none"
        flex={flex}
        variants={variants}
        elevation="none"
      >
        {content}
      </StyledActionList>
    </div>
  )
}

export default ActionList
