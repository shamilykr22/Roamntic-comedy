'use strict';

/**
 * Check Translations
 */

module.exports = () => {
  const tasks = {
    checkTranslations: {
      fn: checkTranslations,
      description: 'Check if all required translations are available'
    }
  };

  return tasks;

  function checkTranslations() {
    const manageTranslations = require('react-intl-translations-manager');
    return manageTranslations.default({
      messagesDirectory: 'src/js/translation/messages',
      translationsDirectory: 'src/js/translation/locales/',
      languages: ['nl', 'fr', 'de', 'es', 'en'] // any language you need
    });
  }
};
