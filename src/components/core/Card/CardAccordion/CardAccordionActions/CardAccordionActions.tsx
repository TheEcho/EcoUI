import { Children, FunctionComponent, PropsWithChildren } from 'react'

import { matchComponentName } from '../../../../../utils/matchComponentName'
import { Text } from '../../../Text'
import { ActionType } from './CardAccordionAction/CardAccordionAction'
import {
  StyledCardAccordionAction,
  StyledCardAccordionActions,
} from './CardAccordionActions.styled'
import { getActionColor } from './CardAccordionActions.utils'

export type Action = {
  label: string
  type: ActionType
}

type CardAccordionActionsProps = PropsWithChildren<{
  actions?: Action[]
  onClick?: (action: Action) => void
  componentName?: string
}>

export const CardAccordionActions: FunctionComponent<CardAccordionActionsProps> = ({
  actions,
  onClick,
  children,
}) => {
  const contentFromActions = Children.toArray(children).filter((element) => {
    return matchComponentName(element, 'CardAccordionAction')
  })

  let content

  if (contentFromActions.length) {
    content = children
  } else if (actions) {
    content =
      actions.length &&
      actions.map((action, index) => (
        <StyledCardAccordionAction
          key={index}
          padding="sm-medium"
          justify="center"
          align="center"
          type={action.type}
          onClick={() => onClick && onClick(action)}
        >
          <Text weight="medium" size="regular" color={getActionColor(action.type)}>
            {action.label}
          </Text>
        </StyledCardAccordionAction>
      ))
  } else {
    throw Error(
      'You must provide at least an Action, by passing the actions props or by using the <CardAccordionAction /> component as children of this one',
    )
  }

  return (
    <StyledCardAccordionActions
      gap="medium"
      paddingHorizontal="sm-medium"
      paddingBottom="sm-medium"
      direction="column"
    >
      {content}
    </StyledCardAccordionActions>
  )
}
