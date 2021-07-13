import * as React from 'react'
import { createPortal } from 'react-dom'
import { StyledWrapper, StyledModal } from './Modal.styled'

const modalClick = (event) => {
  // to prevent wrapper click
  event.stopPropagation()
}

const Modal = ({
  isVisible,
  hideModal,
  hideOnClickOutside = true,
  maxWidth = '100%',
  maxHeight = '100%',
  width = '550px',
  height = '680px',
  children,
  className,
}) => {
  return isVisible
    ? createPortal(
        <>
          <StyledWrapper onClick={hideOnClickOutside ? hideModal : undefined}>
            <StyledModal
              className={className}
              maxWidth={maxWidth}
              maxHeight={maxHeight}
              width={width}
              height={height}
              onClick={modalClick}>
              {children}
            </StyledModal>
          </StyledWrapper>
        </>,
        document.body
      )
    : null
}

export default Modal
