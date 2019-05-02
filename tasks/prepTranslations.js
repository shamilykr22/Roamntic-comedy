'use strict';

/**
 * Prepare Translations File
 */

const babelCore = require('babel-core');
const reactIntl = require('babel-plugin-react-intl');
const gutil = require('gulp-util');

let translations = [];

module.exports = (gulp) => {
  const tasks = {
    prepTranslations: {
      fn: prepTranslations,
      description: 'Create translation files'
    }
  };

  return tasks;

  function prepTranslationForFile() {
    const through = require('through2');
    return through.obj((file, enc, cb) => {
      if (file.isBuffer()) {
        const transformedData = babelCore.transform(file.contents, {
          presets: [
            'es2015',
            'react',
            'stage-0'
          ],
          plugins: reactIntl.default
        });

        const messages = transformedData.metadata['react-intl'].messages;
        if (messages && messages.length > 0) {
          translations = translations.concat(messages);
        }
      }
      cb(null, file);
    });
  }

  function stringToFile(filename, string) {
    const src = require('stream').Readable({ objectMode: true });
    /* eslint-disable no-underscore-dangle */
    src._read = function () {
      this.push(new gutil.File({
        cwd: '',
        base: '',
        path: filename,
        contents: new Buffer(string)
      }));
      this.push(null);
    };
    return src;
  }

  function prepTranslations() {
    gulp.src(['src/**/*.jsx'])
      .pipe(prepTranslationForFile())
      .pipe(gutil.buffer((err) => {
        if (err) {
          /* eslint-disable no-console */
          console.log(`Error occured while preparing Translation:  ${err}`);
        }
        const messagesFolder = 'src/js/translation/messages';

        if (translations.length > 0) {
          stringToFile('messages.json', JSON.stringify(translations, null, 2))
            .pipe(gulp.dest(messagesFolder));
          /* eslint-disable no-console */
          console.log(`Translations written to ${messagesFolder}`);
        }
      }));
  }
};
