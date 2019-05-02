import axios from 'axios';
import _ from 'lodash';
import { put, call } from 'redux-saga/effects';
import registry from 'app-registry';

function* translateErrorToAction(error) {
  const errmsg = _.result(error, 'response.errmsg', null);
  const storage = registry.get('storage');
  let notif;
  switch (error.status) {
    case 401:
      yield call(storage.clearAllItems);
      // TODO need to route to login screen
      // yield call(push, `/app?redirectTo=${window.location.pathname}`);
      break;
    case 500:
      notif = {
        type: 'error',
        heading: 'Unexpected server error!',
        content: errmsg || 'Sorry! Looks like something went wrong.',
        timestamp: Date.now()
      };
      yield put({ type: 'SHOW_NOTIFICATION', notification: notif });
      break;
    case 404:
      notif = {
        type: 'error',
        heading: 'Error!',
        content: errmsg || 'Unable to find resource.',
        timestamp: Date.now()
      };
      yield put({ type: 'SHOW_NOTIFICATION', notification: notif });
      break;
    case 409:
      notif = {
        type: 'error',
        heading: 'Error!',
        content: errmsg,
        timestamp: Date.now()
      };
      yield put({ type: 'SHOW_NOTIFICATION', notification: notif });
      break;
    case 999:
      notif = {
        type: 'error',
        heading: 'Network error!',
        content: 'Please check your network connection.',
        timestamp: Date.now()
      };
      yield put({ type: 'SHOW_NOTIFICATION', notification: notif });
      break;
    default:
      notif = {
        type: 'error',
        heading: 'Error!',
        content: errmsg || 'Sorry! Looks like something went wrong.',
        timestamp: Date.now()
      };
      yield put({ type: 'SHOW_NOTIFICATION', notification: notif });
  }
}

export default function* apiCall(payload) { // eslint-disable-line
  const storage = registry.get('storage');
  const { API_CALL, TYPES: [requestType, successType, failureType] } = payload;

  // Attach auth token to request if present
  const authToken = yield call(storage.getItem, 'token');
  if (authToken) {
    _.set(API_CALL, 'headers.Authorization', `Bearer ${authToken}`);
  }

  // Dispatch requestType action, or show global loader
  yield put({ type: requestType || 'LOADER:SHOW' });
  try {
    // Make API call
    const apiResponse = yield call(axios, API_CALL);
    // If API response is a success
    if (successType) yield put({ type: successType, payload: apiResponse.data });
    if (!requestType) yield put({ type: 'LOADER:HIDE' });
    return apiResponse.data;
  } catch (err) { // If API response is a failure
    if (!requestType) yield put({ type: 'LOADER:HIDE' });
    if (err.response) { // Response status is out of the range of 2xx
      const errMessage = _.get(err.response, 'data.message') || _.get(err.response, 'statusText');
      const error = new Error(errMessage);
      error.status = _.get(err.response, 'status');
      error.response = _.get(err.response, 'data');
      if (failureType) {
        yield put({ type: failureType, payload: _.get(err.response, 'data') });
      } else {
        yield call(translateErrorToAction, error);
      }
      return error.response; // Not throwing error would kill the calling saga
    }
    // network errors, DNS failures, etc.
    err.status = 999;
    yield call(translateErrorToAction, err);
  }
}
