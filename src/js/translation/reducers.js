import { intlReducer } from 'react-intl-redux';
import { languages } from './languages';

const defaultState = {
  locale: 'en',
  messages: {},
  languages: [...languages]
};

export default (state = defaultState, action) =>
  intlReducer(state, action);
