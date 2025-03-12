import { FunctionComponent, PropsWithChildren } from 'react'

import { svgSizes } from '../../../shared/tokens/svg'
import { StyledIconContainer, TStyledSvgIconProps } from './Icon.styled'

export type IconProps = PropsWithChildren<{
  icon?: JSX.Element
  url?: string
  /**
  * @description Token
   - **atomic** : 0.7rem 
    - **tiny** : 1rem 
    - **xxsmall** : 1.1rem
    - **xsmall** : 1.2rem
    - **small** : 1.4rem
    - **sm-medium** : 1.6rem 
    - **medium** : 2rem 
    - **large** : 2.4rem 
    - **xlarge** : 2.8rem 
    - **xxlarge** : 3.2rem 
    - **huge** : 4.8rem 
  */
  size?: TStyledSvgIconProps['size']
  color?: TStyledSvgIconProps['color']
  rotate?: number
  spinning?: boolean
}>

export const Icon: FunctionComponent<IconProps> = ({
  icon,
  url,
  size = 'large',
  color = 'text',
  children,
  ...rest
}) => {
  if (children) {
    return <StyledIconContainer>{children}</StyledIconContainer>
  }

  if (!icon && !url) {
    console.warn(`Icon components must be used with an icon props, children or url`)
    return null
  }

  if (!!icon) {
    return (
      <StyledIconContainer size={size} color={color} {...rest}>
        {icon}
      </StyledIconContainer>
    )
  }

  return (
    <StyledIconContainer size={size} color={color} {...rest}>
      <img src={url} style={{ width: svgSizes[size] }} />
    </StyledIconContainer>
  )
}

export default Icon
