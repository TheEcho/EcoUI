import React, { FunctionComponent, ReactNode } from 'react'

import { Button, ButtonProps } from '../../../../Button'
import { WithChildren } from '@/types/WithChildren'

export type ActionType = 'cancel' | 'action'

type CardAccordionActionProps = {
  onClick: () => void
  loading: boolean
  label?: string
  componentName?: 'CardAccordionAction'
  buttonVariant?: ButtonProps['variant']
} & WithChildren

export const CardAccordionAction: FunctionComponent<CardAccordionActionProps> = ({
  onClick,
  loading,
  children,
  label,
  buttonVariant = 'secondary',
}) => {
  return (
    <Button loading={loading} onClick={onClick} variant={buttonVariant} buttonSize="tiny" fullWidth={true}>
      {label || children}
    </Button>
  )
}
