import { FunctionComponent, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { useClickOutside } from '../../../utils/_hooks/useClickOutside'
import { useCombinedRefs } from '../../form/Input/utils'
import {
  InputSelectAutocomplete,
  TInputSelectAutocomplete,
} from '../../form/InputSelectAutocomplete'
import { Icon } from '../Icon'
import { StyledContainer } from './GlobalSearch.styled'

type TProps = {
  onClickOutside?: () => void
} & TInputSelectAutocomplete

export const GlobalSearch: FunctionComponent<TProps> = ({
  onDropStateChange,
  forwardRef,
  onClickOutside,
  ...props
}) => {
  const [isDropOpen, setIsDropOpen] = useState(false)

  const inputRef = useRef<HTMLInputElement | null>(null)
  const combinedInputRef = useCombinedRefs(forwardRef, inputRef)

  const bodyRef = useRef<HTMLBodyElement>(document.querySelector('body'))
  const containerRef = useRef<HTMLDivElement>(null)
  const dropRef = useRef<HTMLDivElement>(null)

  // We don't want the underlying useEffect to retrigger at every render
  const refsToExclude = useMemo(() => [dropRef, combinedInputRef], [combinedInputRef, dropRef])

  const { clickedOutside } = useClickOutside(containerRef, refsToExclude)

  const focusInput = (): void => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleDropState = (dropState: boolean): void => {
    setIsDropOpen(dropState)

    if (onDropStateChange) {
      onDropStateChange(dropState)
    }
  }

  useEffect(() => {
    if (clickedOutside && onClickOutside) {
      onClickOutside()
    }
  }, [clickedOutside, onClickOutside])

  if (!bodyRef.current) {
    console.warn(
      "The GlobalSearch cannot be display because we didn't find the bodyElement on the document...",
    )
    return <></>
  }

  return createPortal(
    <StyledContainer width={42} onClick={focusInput} isDropOpen={isDropOpen} ref={containerRef}>
      <InputSelectAutocomplete
        variant="no-border"
        prefix={<Icon icon={<MagnifyingGlassIcon />} color="text-light" />}
        textSize="large"
        forwardRef={combinedInputRef}
        onDropStateChange={handleDropState}
        dropRef={dropRef}
        {...props}
      />
    </StyledContainer>,
    bodyRef.current,
  )
}

export type TGlobalSearchProps = TProps

export default GlobalSearch
