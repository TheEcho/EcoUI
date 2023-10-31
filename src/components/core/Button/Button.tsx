import { ComponentProps, ElementType, forwardRef, PropsWithChildren, ReactNode } from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline'

import { SerializedStyles } from '@emotion/react'

import { TColor, TSVGSizeEnum } from '@/index'

import { Box } from '../../core'
import Icon from '../Icon'
import { ContentsContainer, LoaderContainer, StyledButton } from './Button.styled'

type StyledButtonProps = Partial<ComponentProps<typeof StyledButton>>
export type ButtonProps = PropsWithChildren<{
  /**
   * Style variant for the button
   */
  variant?: StyledButtonProps['variant']

  /**
   * Color to use with variants outline and text
   */
  colorVariant?: StyledButtonProps['colorVariant']

  /**
   * Color to use with variants outline and text
   */
  color?: StyledButtonProps['color']

  /**
   * Text color to use with variants outline and text
   */
  textColor?: StyledButtonProps['textColor']

  /**
   * Border color
   */
  borderColor?: StyledButtonProps['borderColor']

  /**
   * This changes the padding inside the button
   */
  buttonSize?: StyledButtonProps['buttonSize']
  disabled?: boolean

  /** Icon to show in the button */
  icon?: ReactNode
  label?: string | ReactNode

  /**
   * Reverse the order of the icon and label (false: icon label, true: label icon)
   */
  reverse?: boolean
  onClick?: StyledButtonProps['onClick']
  css?: SerializedStyles
  type?: 'submit' | 'reset' | 'button' | undefined
  /**
   * Force an HTML tag to be used for this heading
   */

  as?: ElementType<any>
  rounded?: boolean
  loading?: boolean
  title?: string
  tabIndex?: number
  fullWidth?: boolean
  contentWidth?: number
}>

/**
 * Button component
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      /* Icon prop */
      icon,
      label,
      reverse,
      variant = 'primary',
      colorVariant = 'primary',
      color,
      textColor,
      buttonSize = 'regular',
      children,
      css,
      rounded = false,
      loading = false,
      disabled = false,
      tabIndex,
      fullWidth,
      contentWidth,
      ...rest
    },
    ref,
  ) => {
    const first = reverse ? label : icon
    const second = reverse ? icon : label

    let contents
    if (first && second) {
      contents = (
        <Box direction="row" gap="medium" align="center" justify="center" flex={false}>
          {reverse ? (
            <>
              <Box flex={false}>{label}</Box>
              {icon}
            </>
          ) : (
            <>
              {icon}
              <Box flex={false}>{label}</Box>
            </>
          )}
        </Box>
      )
    } else {
      contents = first || second || children
    }

    let loadingContent
    if (loading) {
      let loadingColor: TColor = 'transparent'

      let loadingSize: TSVGSizeEnum = 'small'
      switch (buttonSize) {
        case 'tiny':
          loadingSize = 'small'
          break
        case 'small':
          loadingSize = 'medium'
          break
        case 'regular':
          loadingSize = 'large'
          break
        case 'large':
          loadingSize = 'xlarge'
          break
        case 'larger':
          loadingSize = 'xxlarge'
          break
      }

      loadingContent = (
        <LoaderContainer size={loadingSize}>
          <Icon icon={<ArrowPathIcon />} size={loadingSize} color={loadingColor} spinning />
        </LoaderContainer>
      )
    }

    const buttonProps = {
      variant,
      colorVariant,
      color,
      textColor,
      buttonSize,
    }

    return (
      <StyledButton
        icon={!!icon}
        cssProp={css}
        {...buttonProps}
        {...rest}
        ref={ref}
        rounded={rounded}
        iconOnly={!(label || children)}
        loading={loading || undefined}
        reverse={reverse}
        disabled={loading || disabled}
        tabIndex={tabIndex}
        fullWidth={fullWidth}
      >
        <ContentsContainer loading={loading || undefined} width={contentWidth}>
          {contents}
        </ContentsContainer>
        {loading && loadingContent}
      </StyledButton>
    )
  },
)

Button.displayName = 'Button'

export default Button
