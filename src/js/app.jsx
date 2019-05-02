import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import { IntlProvider } from 'react-intl-redux';
import registry from 'app-registry';

import { store } from './store';
import routes from './routes';

import storage from './services/storage';
import logger from './services/logger';

import theme from './themes';

import '../styles.scss';

registry.register('storage', storage);
registry.register('logger', logger);
registry.register('store', store);
registry.register('theme', theme);

/* eslint-disable no-undef */
if (typeof appConfig !== 'undefined') {
  const config = appConfig || {};
  registry.register('config', config);
  if (config.logger && config.logger.level) {
    logger.setLevel(config.logger.level);
  }
} else {
  registry.get('logger').warning('WARNING: the config is not defined');
}
/* eslint-enable no-undef */

store.dispatch({ type: 'APP:INIT' });

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <Router>
        {routes}
      </Router>
    </IntlProvider>
  </Provider>
  , document.getElementById('app')
);
