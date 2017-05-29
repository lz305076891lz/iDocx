import { combineReducers } from 'redux'

const pageTemplatesDefault = {
  searchValue: '',
  list: [1,2,3,4,5,6,7,8]
}

const pageTemplates = (state = pageTemplatesDefault, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const pageCompose = combineReducers({
  pageTemplates
})

export default combineReducers({
  pageCompose
})