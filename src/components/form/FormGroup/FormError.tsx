import React, { FunctionComponent } from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

import { Box, Icon, Text } from '../../core'
import { TextProps } from '../../core/Text'
import { StyledIconWrapper } from './FormGroup.styled'

type FormErrorProps = {
  withIcon?: boolean
} & TextProps

export const FormError: FunctionComponent<FormErrorProps> = ({ withIcon, children, ...props }) => {
  return (
    <Box direction="row" align="start" gap="medium" flex={false}>
      {withIcon && (
        <StyledIconWrapper flex={false}>
          <Icon icon={<ExclamationCircleIcon />} color="primary" />
        </StyledIconWrapper>
      )}
      <Text color="primary" {...props}>
        {children}
      </Text>
    </Box>
  )
}

FormError.defaultProps = {
  withIcon: true,
}

export default FormError
