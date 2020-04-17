import { createSelector } from 'reselect';

const selectmenu = state => state.menu;

export const selectmenuSections = createSelector(
  [selectmenu],
  menu => menu.lists
);