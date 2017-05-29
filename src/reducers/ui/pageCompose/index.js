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
        total: action.payload.total,
        searchValue: action.payload.search
      }
    }
    case actions.ui.CHANGE_TEMPLATES_PAGE: {
      return {
        ...state,
        page: action.payload
      }
    }
    case actions.ui.CHANGE_TEMPLATES_SEARCH: {
      return {
        ...state,
        searchValue: action.payload
      }
    }
    default:
      return state
  }
}

export default combineReducers({
  pageTemplates
})