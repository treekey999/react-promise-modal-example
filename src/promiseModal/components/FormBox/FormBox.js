import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

const FormBox = (props) => {
  const {
    color,
    title,
    description,
    confirmText,
    cancelText,
    initForm, // for useState init value
    renderForm, // function for custom render component
    resolve,
    // reject,
  } = props

  const [isOpen, setIsOpen] = useState(true)
  const [form, setForm] = useState(initForm)

  const onClickConfirm = () => {
    setIsOpen(false)
    resolve({ result: true, form }) // pass form result & form value
  }

  const onClickCancel = () => {
    setIsOpen(false)
    resolve({ result: false, form }) // pass form result & form value
  }

  return (
    <Modal
      overlayClassName='promise-modal-overlay'
      className='formbox-box'
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
        <p>{ renderForm(form, setForm) }</p>
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

FormBox.propTypes = {
  color: PropTypes.oneOf(['primary', 'info', 'danger', 'orange']),
  title: PropTypes.string,
  description: PropTypes.string,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  initForm: PropTypes.object,
  resolve: PropTypes.func, // from promisable HOC
  // reject: PropTypes.func, // from promisable HOC
}

FormBox.defaultProps = {
  color: 'primary',
  title: 'Title',
  description: 'Description',
  confirmText: 'Confirm',
  initForm: {},
  renderForm: () => {},
  cancelText: 'Cancel',
  resolve: () => {},
  // reject: () => {},
}

export default FormBox
