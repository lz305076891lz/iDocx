import sources from 'sources'

export const GET_TEMPLATES = 'GET_TEMPLATES'

export const getTemplates = (page, search) => dispatch => {
  return sources.templates.getTemplates(page, search)
    .then(data => {
      dispatch({
        type: GET_TEMPLATES,
        payload: data
      })
    })
}