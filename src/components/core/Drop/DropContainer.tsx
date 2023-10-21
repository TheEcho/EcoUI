import { FunctionComponent, useCallback, useEffect, useRef } from 'react'
import { isMobile } from 'react-device-detect'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { useCombinedRefs } from '../../../components/form/Input/utils'
import { findScrollParents } from '../../../utils/DOM'
import { Box, Icon, Text } from '../../'
import {
  StyledButton,
  StyledDropCardContainer,
  StyledDropContainerMobile,
  StyledDropContainerOverlay,
  StyledDropCustomContainer,
  StyledDropModalContainer,
  StyledDropProps,
} from './Drop.styled'
import { placeDropContainer } from './placeDropContainer'
import { WithChildren } from '@/types/WithChildren'

export type DropContainerProps = {
  dropTarget: HTMLElement
  onClickOutside?: () => void
  onEsc?: () => void
  dropAlign?: StyledDropProps['dropAlign']
  targetMargin?: number
  fitTarget?: boolean
  dropStyle?:
    | 'card'
    | 'modal'
    /**
     * If you don't want to inherit any of card/modal's style because of special needs
     * e.g you need to dictate a specific layout (see: InputSearchDropdown for an example).
     */
    | 'custom'
  forwardRef?: React.Ref<HTMLDivElement>
  isDropBorderVisible?: boolean
  maxDropWidth?: number
  noMobileFormat?: boolean
  titleMobile?: string
  width?: number
} & Pick<StyledDropProps, 'elevation' | 'borderRadius' | 'maxHeight'>

export const DropContainer: FunctionComponent<DropContainerProps & WithChildren> = ({
  dropAlign = {
    top: 'bottom',
    left: 'left',
  },
  onClickOutside,
  dropTarget,
  children,
  targetMargin,
  fitTarget = false,
  dropStyle,
  maxHeight,
  forwardRef,
  isDropBorderVisible = false,
  maxDropWidth: maxWidth,
  noMobileFormat = false,
  titleMobile,
  ...rest
}) => {
  const dropRef = useRef<HTMLDivElement | null>(
    forwardRef && typeof forwardRef !== 'function' ? forwardRef.current : null,
  )

  const combinedDropRef = useCombinedRefs(forwardRef, dropRef)

  const closePanelMobile = useCallback(() => {
    combinedDropRef.current?.animate([{ bottom: '0px' }, { bottom: `-70vh` }], {
      duration: 400,
      iterations: 1,
    })
    setTimeout(() => onClickOutside?.(), 400)
  }, [combinedDropRef, onClickOutside])

  const onClickDocument = useCallback(
    (event: MouseEvent) => {
      const dropTargetNode = dropTarget
      const dropNode = combinedDropRef.current
      const eventTarget = event.target as Node
      if (
        onClickOutside &&
        dropNode && // need this for ie11
        !dropTargetNode.contains(eventTarget) &&
        !dropNode.contains(eventTarget)
      ) {
        if (!isMobile || noMobileFormat) {
          onClickOutside()
        } else {
          closePanelMobile()
        }
      }
    },
    [closePanelMobile, combinedDropRef, dropTarget, noMobileFormat, onClickOutside],
  )

  const scrollParents = useRef<(Element | Document | DocumentFragment)[]>([])
  const place = useCallback(
    (preserveHeight: boolean): void => {
      ;(!isMobile || noMobileFormat) &&
        placeDropContainer({
          container: combinedDropRef.current!,
          align: dropAlign,
          target: dropTarget,
          preserveHeight,
          targetMargin,
          fitTarget,
          maxHeight,
        })
    },
    [noMobileFormat, combinedDropRef, dropAlign, dropTarget, targetMargin, fitTarget, maxHeight],
  )

  const scrollPlace = useCallback(
    (event: Event) => {
      return placeDropContainer({
        container: combinedDropRef.current!,
        align: dropAlign,
        target: dropTarget,
        preserveHeight: true,
        targetMargin,
        fitTarget,
        maxHeight,
      })
    },
    [combinedDropRef, dropAlign, dropTarget, targetMargin, fitTarget, maxHeight],
  )

  const addScrollListener = useCallback(() => {
    scrollParents.current = findScrollParents(dropTarget)
    scrollParents.current.forEach(scrollParent =>
      scrollParent.addEventListener('scroll', scrollPlace),
    )
  }, [dropTarget, scrollPlace])

  const removeScrollListener = useCallback(() => {
    scrollParents.current.forEach(scrollParent =>
      scrollParent.removeEventListener('scroll', scrollPlace),
    )
  }, [scrollParents, scrollPlace])

  const onResize = useCallback(() => {
    removeScrollListener()
    addScrollListener()
    place(false)
  }, [removeScrollListener, addScrollListener, place])

  useEffect(() => {
    document.addEventListener('mousedown', onClickDocument)
    window.addEventListener('resize', onResize)
    addScrollListener()

    place(true)
    return () => {
      document.removeEventListener('mousedown', onClickDocument)
      window.removeEventListener('resize', onResize)
      removeScrollListener()
    }
  }, [onClickDocument, onResize, addScrollListener, place, removeScrollListener])

  const mounted = useRef(false)
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
    } else {
      place(false)
    }
  })

  /* 
TODO: améliorer le swipe 
  const handlers = useSwipeable({
    onSwipedDown: () => {
      closePanelMobile()
    }
  }) */

  if (isMobile && !noMobileFormat) {
    return children ? (
      <StyledDropContainerOverlay>
        <StyledDropContainerMobile elevation="large" ref={combinedDropRef} direction="column">
          {/* <Box flex={false} justify="center" {...handlers} height={2}>
              <Box width={4} height={0.4} background="background-dark" borderRadius="large" flex={false}></Box>
            </Box> */}
          <Box
            justify={!!titleMobile ? 'between' : 'end'}
            paddingHorizontal="medium"
            paddingTop="sm-medium"
            paddingBottom="small"
          >
            {!!titleMobile && (
              <Text weight="bold" size="large">
                {titleMobile}
              </Text>
            )}
            <StyledButton
              icon={<Icon icon={<XMarkIcon />} size="medium" />}
              onClick={closePanelMobile}
              variant="text"
            />
          </Box>
          {children}
        </StyledDropContainerMobile>
      </StyledDropContainerOverlay>
    ) : (
      <></>
    )
  } else {
    switch (dropStyle) {
      case 'card':
        return (
          <StyledDropCardContainer
            ref={combinedDropRef}
            dropAlign={dropAlign}
            padding="none"
            paddingTop="small"
            paddingBottom="small"
            elevation="medium"
            borderRadius="medium"
            {...(maxWidth && {
              maxWidth,
            })}
            {...(isDropBorderVisible && {
              borderColor: 'border-light',
              borderSize: 'xsmall',
            })}
            {...rest}
          >
            {children}
          </StyledDropCardContainer>
        )
      case 'modal':
        return (
          <StyledDropModalContainer
            flex={false}
            ref={combinedDropRef}
            dropAlign={dropAlign}
            padding="none"
            borderColor="border"
            borderSize="xsmall"
            borderRadius="small"
            direction="column"
            {...(maxWidth && {
              maxWidth,
            })}
            {...rest}
          >
            {children}
          </StyledDropModalContainer>
        )

      case 'custom':
        return (
          <StyledDropCustomContainer
            dropAlign={dropAlign}
            flex={false}
            ref={combinedDropRef}
            padding="none"
            borderColor="border"
            borderSize="xsmall"
            borderRadius="small"
            direction="column"
            {...(maxWidth && {
              maxWidth,
            })}
            {...rest}
          >
            {children}
          </StyledDropCustomContainer>
        )

      default:
        return <></>
    }
  }
}

DropContainer.defaultProps = {
  dropStyle: 'card',
}

export default DropContainer
