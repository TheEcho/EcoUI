import React, { FunctionComponent, ReactNode } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import { Box } from '../Box'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { StyledToast } from './Toast.styled'

type ToastProps = {
  type?: 'info' | 'success' | 'error'
  message: ReactNode
  close: () => void
}

export const Toast: FunctionComponent<ToastProps> = ({ type, message, close }) => (
  <StyledToast direction="row" gap="lg-medium" align="center" type={type} flex={false}>
    <Text color="text-lighter" size="large">
      {message}
    </Text>
    <Box flex={false} onClick={() => close()}>
      <Icon icon={<XMarkIcon />} color="text-lighter" />
    </Box>
  </StyledToast>
)
