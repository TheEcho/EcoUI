import React, { FunctionComponent, PropsWithChildren } from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

import { Box, Icon, Text } from '../../core'
import { TextProps } from '../../core/Text'
import { StyledIconWrapper } from './FormGroup.styled'

type FormErrorProps = PropsWithChildren<{
  withIcon?: boolean
}> & TextProps

export const FormError: FunctionComponent<FormErrorProps> = ({ withIcon = true, children, ...props }) => {
  return (
    <Box direction="row" align="start" gap="medium" flex={false}>
      {withIcon && (
        <StyledIconWrapper flex={false}>
          <Icon icon={<ExclamationCircleIcon />} color="primary-light" />
        </StyledIconWrapper>
      )}
      <Text color="primary" {...props}>
        {children}
      </Text>
    </Box>
  )
}

export default FormError
