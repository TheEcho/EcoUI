import { useCreatePortalRoot } from '@/utils/_hooks/useCreatePortalRoot';
import { FC, PropsWithChildren, useCallback, useMemo, useState } from 'react'
import ReactDOM from 'react-dom'
import { ModalContainer, ModalContainerProps } from '../ModalContainer';

export type ModalComponentProps = Omit<ModalContainerProps, 'toggleModal'>

type HookProps = {
  modalProps: ModalComponentProps
}

type HookResult = {
  Modal: FC<PropsWithChildren>
  isModalOpen: boolean
  toggleModal: () => void
  closeModal: () => void
}

// TODO: add escape key
// TODO: add prevent scroll
export const useModal = ({ modalProps }: HookProps): HookResult => {
  const ref = useCreatePortalRoot({ rootId: 'portalUseModal' })
  const [isModalOpen, setModalOpen] = useState<boolean>(false)

  const toggleModal: HookResult['toggleModal'] = useCallback(() => {
    setModalOpen(isOpen => !isOpen)
  }, [])

  const closeModal = useCallback(() => setModalOpen(false), [])

  const Modal = useMemo<FC<PropsWithChildren>>(
    () =>
      !!ref
        ? ({ children }) =>
            ReactDOM.createPortal(
              <ModalContainer
                {...modalProps}
                toggleModal={toggleModal}
              >{children}</ModalContainer>,
              ref,
            )
        : () => null,
    [
      ref,
      modalProps,
      isModalOpen,
      toggleModal,
      closeModal,
    ],
  )

  return {
    isModalOpen,
    toggleModal,
    closeModal,
    Modal,
  }
}
