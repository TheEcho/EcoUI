import _ from 'lodash'
import { FC, useMemo } from 'react'

import { Box, Button, Dropdown, Icon, IconProps, Tooltip } from '@/index'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'

export type TFloatingAction = {
  title?: string
  onClick: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void
  loading?: boolean
} & (
  | {
      isInDropdown?: false
      icon: IconProps['icon']
    }
  | {
      isInDropdown: true
      icon?: undefined
    }
)

export const FloatingActions: FC<{ actions: TFloatingAction[]; className?: string }> = ({
  actions,
  className,
}) => {
  const [actionsInDropdown, actionsWithIcon] = useMemo(
    () => _.partition(actions, ({ isInDropdown }) => isInDropdown),
    [actions],
  )

  const dropActions = useMemo(
    () => actionsInDropdown.map(({ title, onClick }) => ({ title, onClick })),
    [actionsInDropdown],
  )

  return (
    <Box
      background="background-lighter"
      borderRadius="medium"
      elevation="medium"
      padding="xsmall"
      direction="row"
      flex={false}
      className={className}
      onClick={e => e.stopPropagation()}
    >
      {actionsWithIcon.map(action => (
        <Tooltip
          place="left"
          flex={false}
          label={action.title}
          key={action.title}
          hideTooltip={!action.title}
        >
          <Button
            variant="text"
            icon={<Icon icon={action.icon} size="small" />}
            onClick={action.onClick}
            loading={action.loading}
          />
        </Tooltip>
      ))}
      {dropActions.length > 0 && (
        <Dropdown
          variant="text"
          items={dropActions}
          itemClicked={action => action.onClick()}
          icon={<Icon icon={<EllipsisVerticalIcon />} size="small" />}
          dropAlign={{
            top: 'bottom',
            right: 'right',
          }}
        />
      )}
    </Box>
  )
}
