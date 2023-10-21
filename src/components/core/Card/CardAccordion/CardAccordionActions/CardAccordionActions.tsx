import React, { FunctionComponent, ReactNode } from 'react'

import { matchComponentName } from '../../../../../utils/matchComponentName'
import { Text } from '../../../Text'
import { ActionType } from './CardAccordionAction/CardAccordionAction'
import {
  StyledCardAccordionAction,
  StyledCardAccordionActions,
} from './CardAccordionActions.styled'
import { getActionColor } from './CardAccordionActions.utils'
import { WithChildren } from '@/types/WithChildren'

export type Action = {
  label: string
  type: ActionType
}

type CardAccordionActionsProps = {
  actions?: Action[]
  onClick?: (action: Action) => void
  componentName?: string
} & WithChildren

export const CardAccordionActions: FunctionComponent<CardAccordionActionsProps> = ({
  actions,
  onClick,
  children,
}) => {
  const contentFromActions = React.Children.toArray(children).filter((element) => {
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

CardAccordionActions.defaultProps = {
  componentName: 'CardAccordionActions',
}
