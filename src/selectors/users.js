import {createSelector} from 'reselect';

export const getCurrentUserObj = state => state.users.current;
export const getCurrentUserName = createSelector(
  getCurrentUserObj,
  user => user.username,
);
export const getCurrentUserAvatar = createSelector(
  getCurrentUserObj,
  user => user.avatar_path,
);
