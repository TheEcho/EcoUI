import styled from '@emotion/styled'

import { ReactDatePicker } from './ReactDatePicker.styled'

export const DatePickerWrapper = styled(ReactDatePicker)(({ theme }) => ({
  '.react-datepicker': {
    width: '100%',
    border: 'none',
    fontFamily: theme.text.font.default,

    '.react-datepicker__navigation': {
      top: '0.7rem',
      '&.react-datepicker__navigation--previous': {
        left: '15%',
      },
      '&.react-datepicker__navigation--next': {
        right: '15%',
      },
    },

    '.react-datepicker__navigation-icon': {
      '&::before': {
        borderWidth: `${theme.border.size['small']} ${theme.border.size['small']} 0 0`,
        borderColor: theme.color['text-light'],
      },
    },

    '.react-datepicker__month-container': {
      width: '100%',

      '.react-datepicker__day-name, .react-datepicker__day': {
        height: '2.5rem',
        width: '2.8rem',

        '&.react-datepicker__day--disabled': {
          opacity: 0.3,
        },
      },

      '.react-datepicker__month': {
        margin: '0.4rem 0 1.4rem 0 !important',
      },

      '.react-datepicker__header': {
        border: 'none',
        backgroundColor: 'unset',
        padding: `0 0 ${theme.spacing.padding.xsmall} 0`,

        '.react-datepicker__month, .react-datepicker__current-month': {
          textTransform: 'capitalize',
          color: theme.color['text-dark'],
          fontWeight: parseInt(theme.text.weight.medium, 10),
          fontSize: theme.text.size['regular'].size,
          lineHeight: '4rem',
          letterSpacing: -0.15,
        },

        '.react-datepicker__day-name': {
          margin: `${theme.spacing.margin.xsmall} ${theme.spacing.margin.xsmall} 0 ${theme.spacing.margin.xsmall}`,
          textTransform: 'uppercase',
          color: theme.color['text-light'],
          fontSize: 0,

          '&::first-letter': {
            fontSize: theme.text.size['regular'].size,
            fontWeight: parseInt(theme.text.weight.regular, 10),
            lineHeight: '2rem',
          },
        },
      },

      '.react-datepicker__week': {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',

        '.react-datepicker__day': {
          fontSize: theme.text.size.regular.size,
          lineHeight: '1.8rem',
          backgroundColor: 'unset',
          color: theme.color['text-dark'],
          margin: theme.spacing.margin.xsmall,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          '&.react-datepicker__day--outside-month': {
            color: theme.color['text-light'],
          },

          '&.react-datepicker__day--selected, &.react-datepicker__day--in-range': {
            color: theme.color.primary,
          },

          '&:hover, &.react-datepicker__day--selected, &.react-datepicker__day--in-range, &.react-datepicker__day--in-selecting-range': {
            background: '#fdf6f4',
          },
        },
      },
    },
  },
}))
