import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

const unsetPromiseModal = (wrapper) => {
  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(wrapper)
    wrapper.remove()
  }, 300)
}

const findOrCreateWrapper = (identifyID) => {
  let wrapper = document.getElementById(identifyID)
  if (wrapper === null) {
    wrapper = document.body.appendChild(document.createElement('div'))
    wrapper.id = identifyID
  }
  return wrapper
}

const promisableModal = (Component, options = {}) => {
  const wrapper = findOrCreateWrapper(`promise-modal-wrapper-${Date.now()}`)

  Modal.setAppElement(wrapper)

  return new Promise((resolve, reject) => {
    ReactDOM.render(
      <Component
        {...options}
        resolve={resolve}
        reject={reject}
      />,
      wrapper,
    )
  }).finally(() => {
    unsetPromiseModal(wrapper)
  })
}

export default promisableModal
