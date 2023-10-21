import React, { FunctionComponent } from 'react'

import { Button } from '../../core'
import { StyledLoadMore } from './LoadMore.styled'

type LoadMoreProps = {
  onClick?: () => void | undefined
  buttonIsLink?: boolean
  buttonTitle: string
}
export const LoadMore: FunctionComponent<LoadMoreProps> = ({
  onClick,
  buttonTitle,
  buttonIsLink = false,
}) => {
  return (
    <StyledLoadMore margin="medium" direction="row" justify="between" buttonIsLink={buttonIsLink}>
      <Button variant="secondary" onClick={onClick}>
        {buttonTitle}
      </Button>
    </StyledLoadMore>
  )
}
