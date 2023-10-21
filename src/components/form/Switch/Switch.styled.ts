import styled from '@emotion/styled'
import { ITheme } from '@/index'

export const StyledContainer = styled('label')(() => {
  return {
    position: 'relative',
    display: 'inline-block',
    width: '3rem',
    height: '2rem',
  }
})

export const StyledInput = styled.input(({ theme }) => {
  return {
    opacity: 0,
    width: 0,
    height: 0,

    '&:checked + div': {
      backgroundColor: theme.color.primary,

      '&:before': {
        transform: 'translateX(1rem)',
      },
    },
  }
})

export const StyledSlider = styled('div')<{ disabled?: boolean }>(({ theme, disabled = false }) => {
  return {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: disabled ? theme.color['text-light'] : theme.color.text,
    transition: '.4s',
    borderRadius: '3.4rem',
    '&:before': {
      position: 'absolute',
      borderRadius: '50%',
      content: "''",
      height: '1.6rem',
      width: '1.6rem',
      left: '0.2rem',
      bottom: '0.2rem',
      backgroundColor: theme.color['background-lighter'],
      transition: '.4s',
    },
  }
})
