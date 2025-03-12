import { FunctionComponent } from 'react'

import { useSmallMediaQuery } from '../../../utils/_hooks/useMediaQuery'
import { Avatar, Box } from '../../core'
import { AvatarProps } from '../../core/Avatar'
import { BoxProps } from '../../core/Box'
import { FileUpload } from '../../form/FileUpload'

type AvatarUploadProps = {
  /**
   * name of the hidden input (type: file)
   */
  name: string
  /**
   * url displayed by the underlying Avatar component
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
   * props that you want to pass to the underlying Avatar component
   */
  avatarProps?: Partial<AvatarProps>
} & BoxProps

export const AvatarUpload: FunctionComponent<AvatarUploadProps> = ({
  name,
  value,
  avatarProps,
  loading = false,
  onChange,
  onDelete,
  error,
  ...rest
}) => {
  const isSmallScreen = useSmallMediaQuery()

  return (
    <Box
      direction={isSmallScreen ? 'column' : 'row'}
      align="center"
      justify="start"
      gap="large"
      {...rest}
    >
      <Box flex={false} {...(!isSmallScreen && { paddingRight: 'small' })}>
        <Avatar
          {...(value && { src: value })}
          width={72}
          height={72}
          textSize="xlarge"
          {...avatarProps}
        />
      </Box>
      <FileUpload
        error={error}
        loading={loading}
        onDelete={onDelete}
        onChange={onChange}
        name={name}
        value={value}
        accept={['png', 'jpg']}
        addLabel="Ajouter une photo"
        updateLabel="Modifier la photo"
      />
    </Box>
  )
}
