import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

const ConfirmBox = (props) => {
  const {
    color,
    title,
    description,
    onConfirm,
    onCancel,
    confirmText,
    cancelText,
  } = props

  const [isOpen, setIsOpen] = useState(true)

  const onClickConfirm = () => {
    setIsOpen(false)
    onConfirm()
  }

  const onClickCancel = () => {
    setIsOpen(false)
    onCancel()
  }

  return (
    <Modal
      overlayClassName='promise-modal-overlay'
      className='confirm-box'
      isOpen={isOpen}
      onRequestClose={onClickCancel}
      shouldReturnFocusAfterClose={false}
    >
     <div className={`modal-container color-${color}`}>

      <div className='modal-header'>
        <h3>{ title }</h3>
        <button
          type='button'
          className='close-btn'
          onClick={onClickCancel}
        >
          X
        </button>
      </div>

      <div className='modal-content'>
        <p>{ description }</p>
        <div className='button-list'>
          <button
            type='button'
            className='cancel'
            onClick={onClickCancel}
          >
            { cancelText }
          </button>
          <button
            type='button'
            className='confirm'
            onClick={() => onClickConfirm()}
          >
            { confirmText }
          </button>
        </div>
      </div>
     </div> 
    </Modal>
  )
}

ConfirmBox.propTypes = {
  color: PropTypes.oneOf(['primary', 'info', 'danger']),
  title: PropTypes.string,
  description: PropTypes.string,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
}

ConfirmBox.defaultProps = {
  color: 'primary',
  title: 'Title',
  description: 'Description',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  onConfirm: () => {},
  onCancel: () => {},
}

export default ConfirmBox
