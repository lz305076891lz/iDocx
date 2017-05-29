import { combineReducers } from 'redux'
import actions from 'actions'

const pageTemplatesDefault = {
  searchValue: '',
  list: [],
  page: -1,
  total: 0
}

const pageTemplates = (state = pageTemplatesDefault, action) => {
  switch (action.type) {
    case actions.templates.GET_TEMPLATES: {
      return {
        ...state,
        page: action.payload.page,
        list: action.payload.list.result,
        total: action.payload.total
      }
    }
    default:
      return state
  }
}

export default combineReducers({
  pageTemplates
})