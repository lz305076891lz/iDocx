import { getFullFishObjFromId } from './fishes';

export const getComposeRecordList = state => state.usercenter.composeRecordList;

export const getFullComposeRecordList = (state) => {
  const list = getComposeRecordList(state);
  return list.map(fishId => getFullFishObjFromId(state, { fishId }));
};
