import { css, SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

import { ITheme } from '@/index'

import { Box } from '../Box'

type ToastWithTheme = {
  theme: ITheme
} & Toast

type Toast = {
  type?: 'info' | 'success' | 'error'
}

const StyledToastSuccess = (props: ToastWithTheme): SerializedStyles => css`
  background-color: ${props.theme.color['text-dark']};
`

const StyledToastInfo = (props: ToastWithTheme): SerializedStyles => css`
  background-color: ${props.theme.color['text-dark']};
`

const StyledToastError = (props: ToastWithTheme): SerializedStyles => css`
  background-color: ${props.theme.color['primary-dark']};
`

export const StyledToast = styled(Box)<Toast>`
  padding: 2.2rem 3.2rem 2.2rem 4rem;
  border-radius: ${(props) => props.theme.border.radius.medium};
  max-width: 100%;

  ${(props) => props.type === 'success' && StyledToastSuccess(props)}
  ${(props) => props.type === 'info' && StyledToastInfo(props)}
  ${(props) => props.type === 'error' && StyledToastError(props)}

  margin-bottom: ${(props) => props.theme.spacing.margin.medium};
`
