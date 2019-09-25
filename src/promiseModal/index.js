import './style.scss' // base modal overlay csss

import promisableModal from './promisableModal'

import ConfirmBox from './components/ConfirmBox'
import FormBox from './components/FormBox'

const confirmBox = props => promisableModal(ConfirmBox, props)
const formBox = props => promisableModal(FormBox, props)

export {
  promisableModal,
  confirmBox,
  formBox,
}
