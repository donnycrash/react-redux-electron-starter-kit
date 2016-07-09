React Redux Electron Starter Kit
================================

This starter kit is an integration of Dave Zuko's amazing v2.0.0 [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit/tree/new-project-v2) and [Electron](http://electron.atom.io/) to get up and running in no time.

Why v2.0.0 and Not V3.0.0?
--------------------------
So we all know that Redux and React both are maturing at a drastic pace, I feel every three months I start a project its as if I have to re-learn everything due to new folder layouts with fancy names `fractal structure` etc. Im not sure if you're similar but I really need to get stuff done, quickly. So I guess this is a highly opinionated structure and usage based kit but hey its tried and tested and is easily manageable.

Requirements
------------

* node `^4.2.0`
* npm `^3.0.0`

Features
--------

* [React](https://github.com/facebook/react) (`^15.0.0`)
* [Redux](https://github.com/rackt/redux) (`^3.0.0`)
  * react-redux (`^4.0.0`)
  * redux-devtools
  * redux-thunk middleware
* [react-router](https://github.com/rackt/react-router) (`^2.0.0`)
* [react-router-redux](https://github.com/rackt/react-router-redux) (`^4.0.0`)
* [Webpack](https://github.com/webpack/webpack)
  * Bundle splitting and CSS extraction
  * Sass w/ CSS modules, autoprefixer, and minification
* [Koa](https://github.com/koajs/koa) (`^2.0.0-alpha`)
* [Karma](https://github.com/karma-runner/karma)
  * Mocha w/ chai, sinon-chai, and chai-as-promised, and [chai-enzyme](https://github.com/producthunt/chai-enzyme)
  * PhantomJS
  * Code coverage reports/instrumentation with [isparta](https://github.com/deepsweet/isparta-loader)
* [Flow](http://flowtype.org/) (`^0.22.0`)
* [Babel](https://github.com/babel/babel) (`^6.3.0`)
  * [react-transform-hmr](https://github.com/gaearon/react-transform-hmr) hot reloading for React components
  * [redbox-react](https://github.com/KeywordBrain/redbox-react) visible error reporting for React components
  * [babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime) so transforms aren't inlined
  * [babel-plugin-transform-react-constant-elements](https://babeljs.io/docs/plugins/transform-react-constant-elements/) save some memory allocation
  * [babel-plugin-transform-react-remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types) remove `PropTypes`
* [ESLint](http://eslint.org)
  * Uses [Standard Style](https://github.com/feross/standard) by default, but you're welcome to change this.

Getting Started
---------------

Just clone the repo and install the necessary node modules:

```shell
$ git clone https://github.com/donnycrash/react-redux-electron-starter-kit.git
$ cd react-redux-electron-starter-kit
$ npm install                   # Install Node modules listed in ./package.json (may take a while the first time)
$ npm start                     # Compile and launch the redux project

We could use concurrently but easiest to open a new tab in bash and run:

$ npm run start-app-hot         # Run electron hot

```

Usage
-----

|`npm run...`|Description|
|---|---|
|`start`|Spins up Koa server to serve your app at `localhost:3000`. HMR will be enabled in development.|
|`start-app-hot`| Starts up an Electron instance pointing to `localhost:3000`. HMR will be enabled in development.|
|`start-app`| Starts up an Electron instance pointing to `localhost:3000`. HMR will be enabled in development.|
|`dev`|Same as `npm start`, but enables nodemon to automatically restart the server when server-related code is changed.|
|`dev:nw`|Same as `npm run dev`, but opens the redux devtools in a new window.|
|`dev:no-debug`|Same as `npm run dev` but disables redux devtools.|
|`test`|Runs unit tests with Karma and generates a coverage report.|
|`test:dev`|Runs Karma and watches for changes to re-run tests; does not generate coverage reports.|
|`flow:check`|Analyzes the project for type errors.|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).|
|`compile:dev` |Compiles code to app/dist with `NODE_ENV` as "development".|
|`compile:prod` |Compiles code to app/dist with `NODE_ENV` as "production".|
|`compile-prepare` |Prepares app folder with its package.json and node_modules.|
|`compile-app` |Compiles app's web code (react and redux).|
|`compile-electron` |Compiles app's electron code (from /electron).|
|`pack` |Builds unpacked app for testing. `NODE_ENV` is "development".|
|`dist` |Builds app for distribution on /release.|
|`dist:linux` |Builds a linux app.|
|`dist:mac` |Builds a mac app.|
|`dist:win32` |Builds a win 32 app.|


Structure
---------

```
.
├── app                      # Dist files for the electron packaging
├── app_build                # Your apps icons
├── bin                      # Build/Start scripts
├── blueprints               # Blueprint files for redux-cli
├── build                    # All build-related configuration
│   └── webpack              # Environment-specific configuration files for webpack
├── config                   # Project configuration settings
├── electron                 # Electron code (ipc coming soon)
├── interfaces               # Type declarations for Flow
├── release                  # Packaged apps will make their way here
├── server                   # Koa application (uses webpack middleware)
│   └── main.js              # Server application entry point
├── src                      # Application source code
│   ├── components           # Generic React Components (generally Dumb components)
│   ├── containers           # Components that provide context (e.g. Redux Provider)
│   ├── layouts              # Components that dictate major page structure
│   ├── redux                # Redux-specific pieces
│   │   ├── modules          # Collections of reducers/constants/actions
│   │   └── utils            # Redux-specific helpers
│   ├── routes               # Application route definitions
│   ├── static               # Static assets (not imported anywhere in source code)
│   ├── styles               # Application-wide styles (generally settings)
│   ├── views                # Components that live at a route
│   └── main.js              # Application bootstrap and rendering
├── main.js                  # Electron main entry point
└── tests                    # Unit tests
```
