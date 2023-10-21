import { ITheme } from '@/index'
import styled from '@emotion/styled'

import Box from '../Box'
import { TabProps, TabsProps } from '.'

const getTabsStyleForSpecificSize = ({
  size,
  theme,
}: {
  size: TabsProps['size']
  theme: ITheme
}) => {
  return {
    gap: size === 'small' ? theme.spacing.gap['lg-medium'] : theme.spacing.gap.large,
    marginTop: theme.spacing.margin['sm-medium'],
    marginBottom: theme.spacing.margin['medium'],
  }
}

export const StyledTabs = styled(Box)<TabsProps>(({ size, theme }) => ({
  position: 'relative',
  flexDirection: 'row',
  alignSelf: 'strech',
  '&:after': {
    content: '""',
    position: 'absolute',
    height: theme.border.size.xsmall,
    background: theme.color['border-light'],
    bottom: `-${theme.spacing.margin.small}`,
    left: 0,
    right: 0,
    zIndex: 5,
  },
  ...getTabsStyleForSpecificSize({ size, theme }),
}))

type TStyledTabProps = TabProps & { isClickable: boolean }

export const StyledTab = styled(Box)<TStyledTabProps>(
  ({
    theme,
    selectedColor = 'primary-dark',
    disabled,
    selected,
    disabledColor = 'text-light',
    isClickable,
  }) => ({
    paddingLeft: '0.1rem',
    paddingRight: '0.1rem',
    whiteSpace: 'nowrap',

    ...(!disabled &&
      selected && {
        position: 'relative',
        span: {
          color: theme.color[selectedColor],
        },
        '> div': {
          background: `${theme.color[selectedColor]}1A`,
        },
        svg: {
          '> *': {
            fill: `${theme.color[selectedColor]} !important`,
          },
        },
        // Use :after pseudo element to underline the selected tab.
        // (we position it absolutely so that it can overlap on the tabs container's border bottom)
        '&:after': {
          content: '""',
          position: 'absolute',
          height: theme.border.size.small,
          background: theme.color[selectedColor],
          bottom: '-0.7rem',
          left: 0,
          right: 0,
          zIndex: 10,
        },
      }),
    ...(disabled && {
      opacity: 0.5,
      '> span': {
        color: theme.color[disabledColor],
      },
      svg: {
        '> *': {
          fill: `${theme.color[disabledColor]} !important`,
        },
      },
    }),
    ...(!disabled &&
      !selected &&
      isClickable && {
        ':hover': {
          span: {
            color: theme.color[selectedColor],
          },
          '> div': {
            background: `${theme.color[selectedColor]}1A`,
          },
          svg: {
            '> *': {
              fill: `${theme.color[selectedColor]} !important`,
            },
          },
        },
      }),
  }),
)
