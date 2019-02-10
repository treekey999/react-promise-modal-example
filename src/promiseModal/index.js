import './style.scss' // base modal overlay csss

import promisableModal from './promisableModal'

import ConfirmBox from './components/ConfirmBox'

const confirmBox = props => promisableModal(ConfirmBox, props)

export {
  promisableModal,
  confirmBox,
}
