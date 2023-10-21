import React, { FunctionComponent } from 'react'

import { Box, Button } from '../../../../core'

type TProps = {
  isSubmitBtnDisabled?: boolean
  onCancelClick: () => void
  onSubmit: () => void
  onResetClick?: () => void
  isResetBtnDisplayed?: boolean
}

export const ActionFooter: FunctionComponent<TProps> = ({
  isSubmitBtnDisabled,
  isResetBtnDisplayed,
  onCancelClick,
  onSubmit,
  onResetClick,
}) => {
  return (
    <Box justify="end" gap="medium" direction="row">
      <Button buttonSize="small" variant="secondary" onClick={onCancelClick}>
        Annuler
      </Button>
      {isResetBtnDisplayed ? (
        <Button buttonSize="small" variant="primary" onClick={onResetClick}>
          Réinitialiser
        </Button>
      ) : (
        <Button
          buttonSize="small"
          variant="primary"
          colorVariant="secondary"
          disabled={isSubmitBtnDisabled}
          onClick={onSubmit}
        >
          Filtrer
        </Button>
      )}
    </Box>
  )
}
