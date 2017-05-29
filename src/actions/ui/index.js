export const CHANGE_TEMPLATES_PAGE = 'CHANGE_TEMPLATES_PAGE'
export const CHANGE_TEMPLATES_SEARCH = 'CHANGE_TEMPLATES_SEARCH'

export const changeTemplatesPage = nextPage => ({
  type: CHANGE_TEMPLATES_PAGE,
  payload: nextPage
})

export const changeTemplatesSearch = value => ({
  type: CHANGE_TEMPLATES_SEARCH,
  payload: value
})