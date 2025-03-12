import { FunctionComponent, PropsWithChildren } from 'react'

import { Button, ButtonProps } from '../../../../Button'

export type ActionType = 'cancel' | 'action'

type CardAccordionActionProps = PropsWithChildren<{
  onClick: () => void
  loading: boolean
  label?: string
  componentName?: 'CardAccordionAction'
  buttonVariant?: ButtonProps['variant']
}>

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
