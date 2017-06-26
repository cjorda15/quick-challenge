import { combineReducers } from 'redux'
import bitValue from './bitValue.js'
import paymentHistory from './paymentHistory.js'

const rootReducer = combineReducers({
  bitValue,
  paymentHistory
})

export default rootReducer
