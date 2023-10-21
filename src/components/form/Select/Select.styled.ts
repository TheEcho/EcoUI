import { TColor, TTextSize } from '@/index'
import styled from '@emotion/styled'

import { defaultTextStyle } from '../../../utils/textStyles'
import { Box } from '../../core/Box'
import { Icon } from '../../core/Icon'

export type StyledSelectProps = {
  ref?: React.Ref<HTMLSelectElement>
  size?: TTextSize
  color?: TColor
}

export const StyledContainer = styled(Box)(({ theme }) => {
  return {
    backgroundColor: theme.color['background-lighter'],
    border: `${theme.border.size.xsmall} solid ${theme.color['background-darker']}`,
    '&:focus-within': {
      outline: `${theme.border.size.small} solid ${theme.color['secondary']}`,
      borderRadius: theme.border.radius.medium,
    },
  }
})

export const StyledSelect = styled.select<StyledSelectProps>`
  ${props => defaultTextStyle(props)};
  background-color: transparent;

  font-size: ${props => props.theme.text.size['regular'].size};
  line-height: ${props => props.theme.text.size['regular'].height};

  text-overflow: ellipsis;
  width: 100%;
  cursor: pointer;
  z-index: 1;

  padding: 0.8rem 2.4rem 0.8rem 1.2rem;
  border: 0;

  -webkit-appearance: none;
  -moz-appearance: none;

  &::-ms-expand {
    display: none;
  }

  &:disabled {
    cursor: default;
  }
`

export const StyledIcon = styled(Icon)(({ theme }) => {
  return {
    position: 'absolute',
    right: `${theme.spacing.margin.small}`,
  }
})
