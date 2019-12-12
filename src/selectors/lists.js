import { createSelector } from 'reselect';

const getLists = state => state.lists.lists;

const getFilteredLists = createSelector(
  [getLists],
  (lists) => {
    return lists;
  },
);

export { getFilteredLists }
