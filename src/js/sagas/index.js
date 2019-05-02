import { takeEvery } from 'redux-saga';

import initApp from './app';
import { fetchTranslation } from '../translation';

import * as actions from '../actions';

const sagas = [
  // All root sagas needs to go in here
  // TODO - Write App reducer and saga
  [takeEvery, 'APP:INIT', initApp],

  // Translation
  [takeEvery, actions.TRANSLATION_INIT, fetchTranslation]

];

function* rootSaga() {
  yield [
    sagas.map(saga =>
      function* () {
        yield saga[0](saga[1], saga[2]);
      }
    ).map(saga => saga.call())
  ];
}

export default rootSaga;
