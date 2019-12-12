import { createSelector } from 'reselect';

const getLists = state => state.lists.lists;
const getSearchedSeries = state => state.lists.searchedSeriesText;

const getFilteredLists = createSelector(
  [getLists, getSearchedSeries],
  (lists, searchedSeriesText) => {
    if (searchedSeriesText.trim() === '') { return lists; }
    return lists.filter(item => item.name.trim().includes(searchedSeriesText.trim()));
  },
);

const getNoSearchResultMessage = createSelector(
  [getFilteredLists, getSearchedSeries],
  (lists, searchedSeriesText) => {
    if (searchedSeriesText.trim() !== '' && lists.length === 0) {
      return `No web series found match with ${searchedSeriesText}`;
    }
    return '';
  },
)

export {
  getFilteredLists,
  getSearchedSeries,
  getNoSearchResultMessage,
}
