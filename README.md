# CA Reconcile App #

Standalone CA Reconcile App User Interface from test

The UI is built using:

 * react: https://facebook.github.io/react/
 * redux: https://github.com/reactjs/redux
 * redux-saga: https://github.com/yelouafi/redux-saga
 * react-router: https://github.com/reactjs/react-router
 * immutable: https://facebook.github.io/immutable-js
 * electron: https://github.com/electron/electron


## Development/Local running

To start developing this UI you there are some prerequisites:

* node.js ~ 6.5
* npm ~ 3.10
* gulp 3.9
* webpack ~ 2
They all need to be installed globally (i.e. with `npm install -g`)

To develop/run the ui locally execute the following steps:

1. Install the prereqs mentioned above.
2. Check out the project from Bitbucket by copying the git end point from [react-boilerplate](https://bitbucket.org/react-boilerplate)
3. Run `npm install`
4. To run the local server (in dev mode) run `npm run serve`
5. To run as an electron app start `npm run electron-app-start`

### NPM Tasks

- `npm test` runs tests with Jest
- `npm run eslint` runs `eslint`
- `npm run tests` runs `eslint` followed by tests with Jest
- `npm run storybook` creates a storybook in `./dist`
- `npm run clean` cleans the `./dist` directory
- `npm run build-production` builds production in `./dist/
- `npm run electron-app-start` builds and starts an electron app
- `npm run prep-translations` prepares translations
- `npm run check-translations` checks translations
- `npm run serve` runs a development server on port 8090
- `npm run serve-mock` runs a development server on port 8090 and a mock backend on port 8099
- `npm run e2e-local` runs end to end tests against `http://localhost:8080`
- `npm run e2e-local-with-mock` spawns a mock server and a webpack dev server and runs end to end tests against `http://localhost:8090`

### Precommit Hooks

`npm run tests` is run as a precommit hook

See [here](docs/DEVELOPMENT.md) for more development related info.
See [here](docs/TRANSLATION.md) for more translation related info.
See [here](docs/GUIDELINES.md) for general guidelines.

## Deployment

Deployment can be done as a Web App or as a Desktop App.

### Deployment as Web App

We use docker containers for deployment. The docker container can be created by running `build.sh` from the build folder. `start.sh` and `stop.sh` can be used for starting and stopping the docker container.

Note

> The port to which the docker needs to bind and the url for the backend services can be defined in the `start.sh` file.
