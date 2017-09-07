import { combineReducers } from 'redux';

import entities from '../reducers/entities';
import ui from '../reducers/ui';

export default combineReducers({
  entities,
  ui,
});
