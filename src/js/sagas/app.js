import { put } from 'redux-saga/effects';

import { TRANSLATION_INIT } from '../actions';

export default function* initApp() {
  yield put({ type: TRANSLATION_INIT });
}
