'use strict';

const path = require('path');

const baseApiUrl = 'http://localhost:9000/';

module.exports = {
  folders: {
    build: path.join(__dirname, '../dist')
  },
  server: {
    port: 8090
  },
  webpack: {
    logDispatcher: true
  },
  uglify: {
    beautify: true,
    global: false,
    sourcemap: true,
    mangle: false,
    compress: false
  },
  clientConfig: {
    logger: {
      level: 6 // LEVEL_INFO
    },
    baseApiUrl,
    login: {
      redirectUrl: {
        defaultSuccess: '/',
        defaultCancel: '/'
      },
      maxInactiveTime: 1000 * 60 * 15, // in milliseconds, 15 minutes
      token: {
        httpHeader: 'X-AUTH-${PROJECT}',
        storage: {
          key: 'auth-pp'
        },
        expire: 1000 * 60 * 14// in milliseconds, 14 minutes
      }
    }
  }
};
