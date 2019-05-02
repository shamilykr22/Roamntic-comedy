import { addLocaleData as addLocaleDataIntl } from 'react-intl';
import nl from 'react-intl/locale-data/nl';
import fr from 'react-intl/locale-data/fr';
import es from 'react-intl/locale-data/es';
import de from 'react-intl/locale-data/de';
import en from 'react-intl/locale-data/en';

import nlMessages from './locales/nl.json';
import frMessages from './locales/fr.json';
import deMessages from './locales/de.json';
import esMessages from './locales/es.json';
import enMessages from './locales/en.json';


export reducers from './reducers';
export fetchTranslation from './sagas';

const localeData = { nl, fr, es, de, en };

const localeMessages = {
  nl: nlMessages,
  fr: frMessages,
  de: deMessages,
  es: esMessages,
  en: enMessages };

export function getLocaleData(locale) {
  return localeData[locale];
}

export function getLocaleMessages(locale) {
  return localeMessages[locale];
}

export function addLocaleData(locale) {
  addLocaleDataIntl(getLocaleData(locale));
}
