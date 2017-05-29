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

const pageUploadDefault = {
  chosenTemplateId: '',
  fileList: []
}

const pageUpload = (state = pageUploadDefault, action) => {
  switch (action.type) {
    case actions.ui.CHANGE_CHOSEN_TEMPLATE: {
      return {
        ...state,
        chosenTemplateId: action.payload
      }
    }
    case actions.ui.CHANGE_UPLOAD_FILE_LIST: {
      return {
        ...state,
        fileList: action.payload
      }
    }
    default:
      return state
  }
}

const pageDownloadDefault = {
  isLoading: false,
  fishList: []
}

const pageDownload = (state = pageDownloadDefault, action) => {
  switch (action.type) {
    case actions.fishes.COMPOSE_START: {
      return {
        ...state,
        isLoading: true
      }
    }
    case actions.fishes.COMPOSE_END: {
      return {
        ...state,
        isLoading: false,
        fishList: action.payload.result
      }
    }
    default:
      return state
  }
}

export default combineReducers({
  pageTemplates,
  pageUpload,
  pageDownload
})