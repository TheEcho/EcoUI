import { FunctionComponent, PropsWithChildren } from 'react'

import { StyledParagraph, TStyledParagraphProps } from './Paragraph.styled'

export type ParagraphProps = PropsWithChildren<{
  /**
  * @description Token : fontSize / lineHeight
   - **xsmall** : 1rem / 1.2rem
    - **small** : 1.2rem / 1.6rem
    - **regular** : 1.4rem / 2rem
    - **large** : 1.6rem / 2rem
    - **xlarge** : 1.8rem / 2.8rem
    - **xxlarge** : 3.2rem / 4rem
  */
  size?: TStyledParagraphProps['size']
  color?: TStyledParagraphProps['color']
  font?: TStyledParagraphProps['font']
  weight?: TStyledParagraphProps['weight']
  textAlign?: TStyledParagraphProps['textAlign']
  decoration?: TStyledParagraphProps['decoration']
  ellipsis?: boolean
  whiteSpace?: TStyledParagraphProps['whiteSpace']
}>

export const Paragraph: FunctionComponent<ParagraphProps> = ({ textAlign = 'start', ...rest }) => {
  return <StyledParagraph textAlign={textAlign} {...rest} />
}

export default Paragraph
