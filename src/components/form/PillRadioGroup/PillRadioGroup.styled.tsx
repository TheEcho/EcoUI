import styled from '@emotion/styled'

import { Box } from '../../core/Box'

export const StyledPillRadioGroup = styled(Box)`
  & > * {
    &:first-of-type {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:last-of-type {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`

type StyledPillRadioItemProps = {
  active?: boolean
  isLastItem?: boolean
}

export const StyledPillRadioItem = styled(Box)<StyledPillRadioItemProps>`
  text-align: center;
  ${(props) => !props.active && 'cursor: pointer;'}
  ${(props) => !props.active && !props.isLastItem && 'border-right: none;'}
`
