import { ComponentProps } from 'react'

import { css, CSSObject, keyframes, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

import { CardWithSection } from '../../core/Card'
import Box from '../Box'
import Button from '../Button'

type HorizontalAlign = 'left' | 'right'
type VerticalAlign = 'top' | 'bottom'

type TAlign = {
  bottom?: VerticalAlign
  top?: VerticalAlign
  left?: HorizontalAlign
  right?: HorizontalAlign
}

export type StyledDropProps = {
  dropAlign: TAlign
  hideCardStyle?: boolean
} & ComponentProps<typeof CardWithSection>

const getTransformOriginStyle = (dropAlign: TAlign): string => {
  let vertical = 'top'
  if (dropAlign.bottom) {
    vertical = 'bottom'
  }
  let horizontal = 'left'
  if (dropAlign.right) {
    horizontal = 'right'
  }
  return `${vertical} ${horizontal}`
}

const dropKeyFrames = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const hideCardStyle = (): SerializedStyles => css`
  background-color: initial;
  box-shadow: none;
  padding: 0;
`

const animatedBottom = (): CSSObject => ({
  '@keyframes bottomAnimation': {
    from: {
      bottom: '-70vh',
    },
    to: {
      bottom: '0',
    },
  },
  animation: 'bottomAnimation 0.4s ease-in-out',
  animationDelay: '0s',
})

export const StyledDropCardContainer = styled(CardWithSection)<StyledDropProps>`
  ${props => props.hideCardStyle && hideCardStyle()}
  opacity: 0;
  transform-origin: ${props => getTransformOriginStyle(props.dropAlign)};
  animation: ${dropKeyFrames} 0.1s forwards;
  animation-delay: 0.01s;
  position: fixed;
  overflow-y: auto;
  z-index: 1000;
`

export const StyledDropModalContainer = styled(Box)<StyledDropProps>(({ dropAlign }) => {
  return {
    transformOrigin: getTransformOriginStyle(dropAlign),
    animation: `${dropKeyFrames} 0.1s forwards`,
    animationDelay: '0.01s',
    zIndex: 1000,
    opacity: 0,
    position: 'fixed',
    overflowY: 'auto',
    boxShadow: '0px 4px 16px #5E616533',
    '& > *': {
      '&:not(:first-child)': {
        borderTop: '1px solid #E1E5EF',
      },
    },
  }
})

export const StyledDropContainerMobile = styled(Box)`
  background-color: ${props => props.theme.color['background-lighter']};
  width: 100% !important;
  max-height: 70vh !important;
  min-height: 5vh;
  max-width: 100vw !important;
  padding-top: ${props => props.theme.spacing.padding.small};
  position: absolute;
  overflow-y: auto;
  z-index: 1000;
  left: 0 !important;
  top: initial !important;
  right: 0 !important;
  bottom: 0;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  ${animatedBottom()}

  & > * {
    width: 100% !important;
  }
`

export const StyledDropCustomContainer = styled(Box)<StyledDropProps>(`
  position: fixed;
  z-index: 1000;
`)

export const StyledButton = styled(Button)`
  padding: 0;
`

export const StyledDropContainerOverlay = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
`

export const StyledDropCloseButtonMobile = styled(Box)`
  position: absolute;
  right: ${props => props.theme.spacing.padding.small};
  top: ${props => props.theme.spacing.padding.small};
`
