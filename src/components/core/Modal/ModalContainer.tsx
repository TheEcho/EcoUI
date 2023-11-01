import { FunctionComponent, useCallback, useEffect } from 'react'
import * as React from 'react'

import { BoxProps } from '../..'
import { CSSObject } from '@emotion/react'

import {
  StyledModalCardContainer,
  StyledModalContainer,
  StyledModalOverlay,
} from './ModalContainer.styled'

export type ModalContainerProps = BoxProps & React.PropsWithChildren<{
  toggleModal: () => void
  width?: number
  variant?: 'card' | 'card-large' | 'default' | 'full' | 'bottom' | 'height-auto'
  scrollable?: boolean
  css?: CSSObject
}>

const VariantContainer: FunctionComponent<
  {
    variant: ModalContainerProps['variant']
    scrollable: boolean
    onMouseDown?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  } & BoxProps
> = ({ variant, children, scrollable, ...props }) => {
  return (
    <StyledModalCardContainer
      borderRadius={variant === 'full' ? 'none' : 'medium'}
      background={props.background || 'background-light'}
      elevation={variant === 'full' ? 'none' : 'medium'}
      scrollable={scrollable}
      variant={variant}
      flex={['card', 'card-large'].includes(variant ?? '') ? false : true}
      {...props}
    >
      {children}
    </StyledModalCardContainer>
  )
}

export const ModalContainer: FunctionComponent<ModalContainerProps> = ({
  toggleModal,
  children,
  variant,
  scrollable = false,
  ...rest
}) => {
  const overlayRef: React.Ref<HTMLDivElement> = React.useRef(null)
  const containerRef: React.Ref<HTMLDivElement> = React.useRef(null)

  useEffect(() => {
    if (!!overlayRef.current) {
      overlayRef.current.focus()
    }
  }, [])

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === 27 && toggleModal) {
        toggleModal()
      }
    },
    [toggleModal],
  )

  return (
    <StyledModalOverlay
      ref={overlayRef}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseDown={e => {
        const overlay = overlayRef.current
        const container = containerRef.current
        const target = e.target as HTMLElement
        const hasClickedOutsideModal = target.isEqualNode(overlay) || target.isEqualNode(container)

        if (hasClickedOutsideModal) {
          toggleModal()
        }
      }}
    >
      <StyledModalContainer ref={containerRef} align="center" justify="center">
        <VariantContainer scrollable={scrollable} variant={variant} {...rest}>
          {children}
        </VariantContainer>
      </StyledModalContainer>
    </StyledModalOverlay>
  )
}

