import sources from 'sources'

export const COMPOSE_START = 'COMPOSE_START'
export const COMPOSE_END = 'COMPOSE_END'

export const composeStart = (fileIds, tempId) => dispatch => {
  dispatch({
    type: COMPOSE_START,
    payload: true
  })
  
  return sources.files.postCompose(fileIds, tempId)
    .then(data => {
      dispatch({
        type: COMPOSE_END,
        payload: data
      })
    })
}