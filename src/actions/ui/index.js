export const CHANGE_CHOSEN_TEMPLATE = 'CHANGE_CHOSEN_TEMPLATE'

export const CHANGE_TEMPLATES_PAGE = 'CHANGE_TEMPLATES_PAGE'
export const CHANGE_TEMPLATES_SEARCH = 'CHANGE_TEMPLATES_SEARCH'

export const changeChosenTemplate = id => ({
  type: CHANGE_CHOSEN_TEMPLATE,
  payload: id
})

export const changeTemplatesPage = nextPage => ({
  type: CHANGE_TEMPLATES_PAGE,
  payload: nextPage
})

export const changeTemplatesSearch = value => ({
  type: CHANGE_TEMPLATES_SEARCH,
  payload: value
})