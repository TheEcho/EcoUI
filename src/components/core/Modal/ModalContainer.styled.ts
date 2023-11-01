import { Box } from '../..'
import styled, { CSSObject } from '@emotion/styled'

const MARGIN_SPACING = 10

export type StyledModalOverlayProps = {
  onClick: () => void
}

const animatedBottom = (): CSSObject => ({
  '@keyframes bottomAnimation': {
    from: {
      bottom: '-60vh',
    },
    to: {
      bottom: '0',
    },
  },
  animation: 'bottomAnimation 0.7s ease-in-out',
})

const getOverlayCSS = ({ position }: { position: 'fixed' | 'absolute' }): CSSObject => ({
  position,
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  zIndex: 11,
  backgroundColor: 'rgba(0,0,0,0.5)',
})

export const StyledModalOverlay = styled('div')<{}>(() => getOverlayCSS({ position: 'fixed' }))

export const StyledModalContainer = styled(Box)(({}) => {
  return {
    zIndex: 10000,
    height: '100%',
  }
})

export const StyledModalCardContainer = styled(Box)<{
  scrollable: boolean
  variant?: 'card' | 'card-large' | 'default' | 'full' | 'bottom' | 'height-auto'
}>(({ scrollable, variant }) => {
  return {
    cursor: 'auto',
    overflow: 'auto',
    maxHeight: `calc(100vh - 1.6rem * 2)`,
    maxWidth: `calc(100vw - 1.6rem * 2)`,
    height: '100%',
    ...(variant === 'full' && {
      width: '100%',
      maxHeight: '100vh',
      maxWidth: '100vw',
      height: '100%',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      display: 'block',
    }),
    ...(variant === 'card' && {
      width: '70rem',
      maxHeight: `calc(100vh - ${MARGIN_SPACING * 2}rem)`,
      height: 'auto',
    }),
    ...(variant === 'card-large' && {
      width: '150rem',
      padding: '2rem 2rem',
      maxHeight: `calc(100vh - ${MARGIN_SPACING}rem)`,
      height: 'auto',
    }),
    ...(variant === 'height-auto' && {
      height: 'auto',
    }),
    ...(variant === 'bottom' && {
      width: '100%',
      maxHeight: '60vh',
      maxWidth: '100vw',
      height: 'auto',
      position: 'fixed',
      left: '0',
      right: '0',
      bottom: '0',
      borderRadius: '0 !important',
      borderTopLeftRadius: '2rem !important',
      borderTopRightRadius: '2rem !important',
      ...animatedBottom(),
    }),
    flexDirection: 'column',
    ...(scrollable && {
      '&:after': {
        content: "''",
        height: '4.8rem',
        display: 'block',
        width: '100%',
      },
    }),
  }
})
