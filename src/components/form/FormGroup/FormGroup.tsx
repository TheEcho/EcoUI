import { FunctionComponent, ReactElement } from 'react'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

import { BoxProps } from '@/index'

import { Box, Icon, IconProps, Text, Tooltip } from '../../core'
import { FormLabel } from '../FormLabel/FormLabel'
import { FormError } from './FormError'
import { StyledFormErrorWrapper } from './FormGroup.styled'

type FieldError = {
  message?: string
}

export type FormGroupProps = {
  /**
   * Title of the form group
   */
  title?: string
  /**
   * Subtitle to display more info
   */
  subtitle?: string
  /**
   * Optional indicator
   */
  optional?: boolean
  /**
   * Like a subtitle, but on the right side.
   * Use it to specify if a field is optional for instance.
   */
  sideTitle?: string | ReactElement
  /**
   * Info
   * Use it to specify info for the field.
   */
  infoTooltip?: string

  /**
   * Icon before title of the form group
   */
  iconTitle?: IconProps['icon']

  /**
   * Error to show for this field
   */
  error?: string | boolean | FieldError
  /**
   * Input field data
   */
  input?: {
    /**
     * Used to link the field label to the input
     */
    id: string
  }
} & BoxProps

/**
 * Component which manage the display of form fields (input, select, radio...):
 * Title, subtitle, optional indicator, error, hint...
 */
export const FormGroup: FunctionComponent<FormGroupProps> = ({
  input,
  title,
  subtitle,
  optional,
  error,
  children,
  infoTooltip,
  iconTitle,
  ...rest
}) => {
  const sideTitle = (optional && 'Optionnel') || rest.sideTitle || undefined
  const titleContent = (
    <Box gap="medium" align="center" direction="row" flex={false}>
      {iconTitle && <Icon icon={iconTitle} color="text-light" size="sm-medium" />}
      <FormLabel name={input?.id}>{title}</FormLabel>
      {!!sideTitle && <Text color="text-light">{sideTitle}</Text>}
    </Box>
  )

  const titleElement = (
    <Box direction="column" flex={false} gap="medium">
      <Box>
        {titleContent}
        {!!infoTooltip && (
          <Tooltip label={infoTooltip} flex={false} marginLeft="small">
            <Icon icon={<InformationCircleIcon />} size="small" color="text-light" />
          </Tooltip>
        )}
      </Box>
      {!!subtitle && <Text color="text-light">{subtitle}</Text>}
    </Box>
  )

  const errorMessage: string | undefined = (() => {
    if (typeof error === 'string') {
      return error
    }
    if (typeof error === 'object') {
      return error.message
    }
    return undefined
  })()

  return (
    <Box {...rest} direction="column" gap="medium">
      {(!!title || !!subtitle) && titleElement}
      {children}
      {!!errorMessage && (
        <StyledFormErrorWrapper marginTop="small">
          <FormError>{errorMessage}</FormError>
        </StyledFormErrorWrapper>
      )}
    </Box>
  )
}

export default FormGroup
