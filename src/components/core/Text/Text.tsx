import { ElementType, FunctionComponent } from 'react'

import { StyledText, StyledTextProps } from './Text.styled'
import { WithChildren } from '@/types/WithChildren'

export type TextProps = {
  /**
  * @description Token : fontSize / lineHeight
   - **xsmall** : 1rem / 1.2rem
    - **small** : 1.2rem / 1.6rem
    - **regular** : 1.4rem / 2rem
    - **large** : 1.6rem / 2rem
    - **xlarge** : 1.8rem / 2.8rem
    - **xxlarge** : 3.2rem / 4rem
  */
  size?: StyledTextProps['size']
  color?: StyledTextProps['color']
  font?: StyledTextProps['font']
  textAlign?: StyledTextProps['textAlign']
  /**
   * @description
   - **regular** : 400
   - **medium** : 600
   - **bold** : 700

   */
  weight?: StyledTextProps['weight']
  ellipsis?: boolean | number
  noWrap?: boolean
  breakSpaces?: boolean
  /**
   * Allows to change the HTML tag element of the component
   */
  as?: ElementType<any>
  decoration?: StyledTextProps['decoration']
  title?: string
  notSelectable?: boolean
  className?: string
} & WithChildren

export const Text: FunctionComponent<TextProps> = ({ size, color, ...rest }) => {
  return <StyledText size={size} color={color} {...rest} />
}

export default Text
