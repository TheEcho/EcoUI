import React, { ChangeEvent, FunctionComponent, useCallback, useRef, useState } from 'react'

import { useSmallMediaQuery } from '../../../utils/_hooks/useMediaQuery'
import { Box, Button, Text } from '../../core'
import { BoxProps } from '../../core/Box'

type FileUploadProps = {
  /**
   * name of the hidden input (type: file)
   */
  name: string
  /**
   * url displayed by the underlying component
   */
  value?: string | null
  /**
   * callback called when a file has been selected from the dialog
   */
  onChange?: (file: File) => void
  /**
   * callback called when the user has clicked on "Supprimer"
   */
  onDelete?: (value: string) => void
  /**
   * whether the buttons are loading or not
   */
  loading?: boolean
  /**
   * error to display instead of the ones handled by the component itself
   */
  error?: string
  /**
   * list of types that you want to handle (ex: ['png', 'jpg'])
   * @default ['png', 'jpg', 'gif']
   */
  accept?: string[]
  /**
   * maximum size in ko of the selected image
   * @default 800
   */
  maxSizeKo?: number
  /**
   * button label when no file has been added
   */
  addLabel?: string
  /**
   * button label when a file has been added
   */
  updateLabel?: string
  /**
   * button label to delete the file
   */
  deleteLabel?: string
} & BoxProps

const getHintText = (accept: string[], maxSizeKo: number) => {
  const typesString = accept.reduce((acc, type, index) => {
    const isFirstItem = index === 0
    const isLastItem = index === accept.length - 1
    if (isFirstItem) {
      return type.toUpperCase()
    }
    return `${acc}${isLastItem ? ' ou ' : ', '} ${type.toUpperCase()}`
  }, '')

  const maxSizeString = maxSizeKo > 1000 ? `${(maxSizeKo / 1000).toFixed(0)} Mo` : `${maxSizeKo} Ko`

  return `${typesString}. Max ${maxSizeString}.`
}

export const FileUpload: FunctionComponent<FileUploadProps> = ({
  name,
  value,
  loading = false,
  accept = ['png', 'jpg', 'gif'],
  maxSizeKo = 800,
  onChange,
  onDelete,
  error,
  addLabel = 'Ajouter un fichier',
  updateLabel = 'Modifier le fichier',
  deleteLabel = 'Supprimer',
  children,
  ...rest
}) => {
  const inputFile = useRef<HTMLInputElement>(null)

  const isSmallScreen = useSmallMediaQuery()

  const [localError, setLocalError] = useState<string | null>(null)

  const handleClickChooseFile = useCallback(() => {
    if (inputFile.current) {
      inputFile.current.click()
    }
  }, [])

  const handleClickDelete = useCallback(() => {
    if (value) {
      onDelete?.(value)
    }
  }, [value, onDelete])

  const handleChooseFile = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setLocalError(null)
      const file = event?.target?.files?.[0]

      if (file?.size && file.size / 1000 >= maxSizeKo) {
        const maxSizeString =
          maxSizeKo > 1000 ? `${(maxSizeKo / 1000).toFixed(0)} Mo` : `${maxSizeKo} Ko`
        setLocalError(
          `Veuillez vous assurez que la taille du fichier ne dépasse pas ${maxSizeString}.`,
        )
      } else if (file) {
        onChange?.(file)
      }
    },
    [maxSizeKo, onChange],
  )

  const hasError = Boolean(error || localError)

  return (
    <Box
      direction={isSmallScreen ? 'column' : 'row'}
      align="center"
      justify="start"
      gap="large"
      {...rest}
    >
      {children && children}
      <input
        type="file"
        id="file"
        name={name}
        accept={accept.reduce((acc, type) => `${acc}.${type}, `, '')}
        ref={inputFile}
        style={{ display: 'none' }}
        onChange={handleChooseFile}
      />
      <Button
        loading={loading}
        onClick={handleClickChooseFile}
        fullWidth={isSmallScreen}
        type="button"
      >
        {value ? updateLabel : addLabel}
      </Button>
      {Boolean(value && onDelete) && (
        <Button
          loading={loading}
          onClick={handleClickDelete}
          fullWidth={isSmallScreen}
          type="button"
          variant="secondary"
        >
          {deleteLabel}
        </Button>
      )}
      {!value && !hasError && (
        <Text size="small" color="text-light">
          {getHintText(accept, maxSizeKo)}
        </Text>
      )}
      {hasError && (
        <Text size="small" color="critical">
          {error || localError}
        </Text>
      )}
    </Box>
  )
}
