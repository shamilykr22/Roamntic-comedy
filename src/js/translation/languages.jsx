import React from 'react';
import { FormattedMessage } from 'react-intl';

export const languages = [
  {
    name: <FormattedMessage
      id="Language.dutch"
      description="Dutch"
      defaultMessage="Dutch"
    />,
    locale: 'nl'
  },
  {
    name: <FormattedMessage
      id="Language.english"
      description="English"
      defaultMessage="English"
    />,
    locale: 'en'
  },
  {
    name: <FormattedMessage
      id="Language.french"
      description="French"
      defaultMessage="French"
    />,
    locale: 'fr'
  },
  {
    name: <FormattedMessage
      id="Language.german"
      description="German"
      defaultMessage="German"
    />,
    locale: 'de'
  },
  {
    name: <FormattedMessage
      id="Language.spanish"
      description="Spanish"
      defaultMessage="Spanish"
    />,
    locale: 'es'
  }
];
