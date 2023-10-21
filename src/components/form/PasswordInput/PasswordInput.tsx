import React, { FunctionComponent, useState } from 'react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

import { Box, Icon } from '../../core'
import { Input, InputProps } from '../Input'

export type PasswordInputProps = {
  withDisplayButton?: boolean
} & InputProps

export const PasswordInput: FunctionComponent<PasswordInputProps> = ({
  withDisplayButton = true,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const inputType = isVisible ? 'text' : 'password'
  const inputIcon = isVisible ? <EyeSlashIcon /> : <EyeIcon />

  const onClick = () => {
    setIsVisible(!isVisible)
  }

  return (
    <Input
      type={inputType}
      {...props}
      suffix={
        withDisplayButton ? (
          <Box onClick={onClick}>
            <Icon size="medium" icon={inputIcon} />
          </Box>
        ) : undefined
      }
    />
  )
}
