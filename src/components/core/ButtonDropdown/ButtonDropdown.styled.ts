import styled from '@emotion/styled'

import { ITheme } from '@/index'

import Button from '../Button'
import { TButtonVariant } from '../Button/Button.styled'
import { Box } from './../Box/Box'

type StyledButtonDropdownProps = {
  variant: TButtonVariant
}

type StyledButtonDropdownPropsWithTheme = {
  theme: ITheme
} & StyledButtonDropdownProps

const applyVariant = (props: StyledButtonDropdownPropsWithTheme): string => {
  switch (props.variant) {
    case 'primary':
      return 'white'
    case 'secondary':
      return props.theme.color['text']
    case 'outline':
      return props.theme.color['text']
    case 'ghost':
      return props.theme.color['text']
    case 'text':
      return props.theme.color['text']
    default:
      return props.theme.color['text']
  }
}

export const StyledButtonDropdown = styled(Button)`
  padding: 0;
`

export const StyledIconContainer = styled(Box)`
  width: 1.8rem;
  border-left: 1px solid ${(props) => props.theme.color.border};
`

export const StyledIcon = styled.div<StyledButtonDropdownProps>`
  width: 0;
  height: 0;
  border-left: 0.3rem solid transparent;
  border-right: 0.3rem solid transparent;
  border-top: 0.3rem solid ${(props) => applyVariant(props)};
`
