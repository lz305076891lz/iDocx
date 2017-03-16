import { combineReducers } from 'redux'

function first(state = 0, action) {
  return state
}

const combinedReducer = combineReducers({
  first
})

export default combinedReducer