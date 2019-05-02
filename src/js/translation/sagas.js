import { put } from 'redux-saga/effects';
import registry from 'app-registry';
import { updateIntl } from 'react-intl-redux';

import { addLocaleData, getLocaleMessages } from '../translation';
import * as ACTIONS from './actions';

export default function* fetchTranslation(action) {
  let { locale } = action;
  if (!locale) {
    locale = localStorage.getItem('locale');
    if (!locale) {
      locale = 'en';
    }
  }

  localStorage.setItem('locale', locale);

  yield put({ type: ACTIONS.TRANSLATION_FETCH });

  try {
    addLocaleData(locale);
    yield put(updateIntl({
      locale,
      messages: getLocaleMessages(locale)
    }));

    yield put({ type: ACTIONS.TRANSLATION_FETCH_SUCCESS });
  } catch (err) {
    registry.get('logger').error(err);
    yield put({ type: ACTIONS.TRANSLATION_FETCH_FAIL, error: err.message });
  }
}
