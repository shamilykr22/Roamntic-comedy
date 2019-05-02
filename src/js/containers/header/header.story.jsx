import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import { storiesOf } from '@kadira/storybook';
import registry from 'app-registry';

import { store } from '../../store';

import theme from '../../themes';
import { Header } from './header';

if (!registry.exists('theme')) {
  registry.register('theme', theme);
}

storiesOf('Header', module)
  .addDecorator(story => (
    <Provider store={store}>
      <IntlProvider>
        {story()}
      </IntlProvider>
    </Provider>
  ))
  .add('Empty Header', () =>
    (<Header store={store} />));
