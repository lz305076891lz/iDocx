import { createSelector } from 'reselect';

export const getFish = (state, { fishId }) => state.entities.fishes[fishId];
export const getTemplates = state => state.entities.templates;
export const getFullFishObjFromId = createSelector([
  getFish, getTemplates,
], (fish, templates) => ({
  ...fish,
  template: templates[fish.template],
}));
