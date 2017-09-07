import { normalize } from 'normalizr';
import { fishes } from './schemas';

export const COMPOSE_START = 'COMPOSE_START';
export const COMPOSE_END = 'COMPOSE_END';

export const composeStart = (fileIds, tempId) => (dispatch) => {
  dispatch({
    type: COMPOSE_START,
    payload: true,
  });

  const fetchArr = fileIds.map(fileId => (
    fetch(`/apiword/index.php/api/compose/${fileId}/${tempId}`)
      .then(data => data.json())
  ));

  return Promise.all(fetchArr)
    .then(data => normalize(data, fishes))
    .then((data) => {
      dispatch({
        type: COMPOSE_END,
        payload: data,
      });
    });
};
