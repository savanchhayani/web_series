import {
  FETCH_WEB_SERIES_REQUESTED,
  FETCH_WEB_SERIES_SUCCESS,
  FETCH_WEB_SERIES_FAILED
} from "../constants/actionsTypes";

const fetchWebSeriesRequested = () => ({
  type: FETCH_WEB_SERIES_REQUESTED
});

const fetchWebSeriesSuccess = payload => ({
  type: FETCH_WEB_SERIES_SUCCESS,
  payload
});

const fetchWebSeriesFailed = () => ({
  type: FETCH_WEB_SERIES_FAILED,
});

export {
  fetchWebSeriesRequested,
  fetchWebSeriesSuccess,
  fetchWebSeriesFailed,
};
