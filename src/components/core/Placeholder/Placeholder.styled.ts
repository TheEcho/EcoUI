import styled, { CSSObject } from '@emotion/styled'

import { ITheme } from '@/index'

export type StyledPlaceholderProps = {
  height?: number
  width?: number
  delay?: number
}

const PlaceholderAnimation = ({ theme }: { theme: ITheme }): CSSObject => {
  return {
    opacity: 0.2,

    '@keyframes opacityFadeIn': {
      '0%': {
        opacity: '0.2',
      },
      '50%': {
        opacity: '1',
      },
      '100%': {
        opacity: '0.2',
      },
    },

    '@keyframes backgroundFadeIn': {
      '0%': {
        opacity: 0.2,
        backgroundColor: theme.color['background'],
      },
      '50%': {
        opacity: 1,
        backgroundColor: theme.color['background-dark'],
      },
      '100%': {
        opacity: 0.2,
        backgroundColor: theme.color['background'],
      },
    },
  }
}

export const StyledContainer = styled('div')<StyledPlaceholderProps>(
  ({ height = 2.4, width = 0, delay = 0, theme }) => {
    let randomWidth = width
    let randomDelay = delay

    while (randomWidth === 0) {
      const randomNumber = Math.floor(Math.random() * 100)

      if (randomNumber > 30 || randomNumber < 80) {
        randomWidth = randomNumber
      }
    }

    while (randomDelay === 0) {
      const randomNumber = Math.floor(Math.random() * 5)

      if (randomNumber > 2 || randomNumber < 4) {
        randomDelay = randomNumber
      }
    }

    return {
      height: `${height}rem`,
      display: 'block',
      width: `${randomWidth}%`,
      background: theme.color.background,
      borderRadius: theme.border.radius.medium,
      animation: 'opacityFadeIn 5s infinite ease-in-out,  backgroundFadeIn 5s infinite ease-in-out',
      animationDelay: `${randomDelay}s`,
      ...PlaceholderAnimation({ theme }),
    }
  },
)
