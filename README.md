# Angular Storybook

> CLI for creating reusable & modern component library using angular and storybook

[![NPM](https://img.shields.io/npm/v/create-react-library.svg)](https://www.npmjs.com/package/create-react-library) [![Build Status](https://travis-ci.com/transitive-bullshit/create-react-library.svg?branch=master)](https://travis-ci.com/transitive-bullshit/create-react-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Features

- Simple installation
- Bundle of all mordern reusable component
- Handles all modern JS features
- Supports complicated peer-dependencies
- Supports SCSS modules

## Contents
* [1 Project structure](#1)
* [2 Required open-source project](#2)
* [3 Testing](#3)
* [4 Building](#4)
* [5 Publishing](#5)
* [6 Installation](#6)
* [7 What it is important to know](#7)
* [8 Inlining of templates and stylesheets](#8)
* [Versions](#previous-versions)

## <a name="1"></a>1 Project structure
- Library:
    - **src** folder for the classes
    - **public_api.ts** entry point for all public APIs of the package
    - **package.json** _npm_ options
- Testing:
    - **tests** folder for unit & integration tests
    - **karma.conf.js** _Karma_ configuration that uses _webpack_ to build the tests
- Extra:
    - **tslint.json**  _Angular TSLint Preset_ (_TypeScript_ linter rules with _Codelyzer_)

## <a name="2"></a>2 Required open-source project
  | Name | Description |
  | ---- | ----------- |
  | [Visual Studio Code](https://github.com/angular/angular-cli) | Latest Version |
  | [Angular CLI](https://github.com/angular/angular-cli) | Angular CLI >= version 11.0.5 |
  | [Yarn](https://classic.yarnpkg.com/en/docs/install) | Latest Version |
  | [Node JS](https://nodejs.org/en/download/) | Latest Version |

## <a name="3"></a>3 Testing
The following command runs unit & integration tests that are in the `tests` folder (you can change the folder in `spec.bundle.js` file): 
```Shell
npm test 
```
or in watch mode:
```Shell
npm run test:watch
```
## <a name="4"></a>4 Building
The following command:
```Shell
npm run build
```
- starts _TSLint_ with _Codelyzer_ using _Angular TSLint Preset_
- starts _AoT compilation_ using _ngc_ compiler
- creates `dist` folder with all the files of distribution, following _Angular Package Format (APF)_:
```
└── dist
    ├── bundles
    |   ├── my-library.umd.js
    |   ├── my-library.umd.js.map
    |   ├── my-library.umd.min.js
    |   └── my-library.umd.min.js.map
    ├── esm5
    |   ├── **/*.js
    |   └── **/*.js.map
    ├── esm2015
    |   ├── **/*.js
    |   └── **/*.js.map
    ├── fesm5
    |   ├── my-library.js
    |   └── my-library.js.map
    ├── fesm2015
    |   ├── my-library.js
    |   └── my-library.js.map
    ├── src
    |   └── **/*.d.ts
    ├── my-library.d.ts
    ├── my-library.metadata.json
    ├── LICENSE
    ├── package.json
    ├── public_api.d.ts
    └── README
```
To test locally the npm package before publishing:
```Shell
npm run pack:lib
```
Then you can install it in an app to test it:
```Shell
npm install [path]@test/dogma-{version}.tgz
```
## <a name="5"></a>5 Publishing
Before publishing the first time:
- you can must have to create project on git repository.
- After creating project have to create access token
- you must have a user on the _npm_ registry: [Publishing npm packages](https://docs.npmjs.com/getting-started/publishing-npm-packages)

```Shell
npm run publish:lib
```

### Step to set up

* Clone this repository
* Copy all folders & file from cloned repo to your project folder
* Open your project folder on your respective IDE ([Visual Studio Code](https://github.com/angular/angular-cli))

### Installation

This project use number of open-source project to work properly

| Name | Description |
| ---- | ----------- |
| [Visual Studio Code](https://github.com/angular/angular-cli) | Latest Version |
| [Angular CLI](https://github.com/angular/angular-cli) | Angular CLI >= version 11.0.5 |
| [Yarn](https://classic.yarnpkg.com/en/docs/install) | Latest Version |
| [Node JS](https://nodejs.org/en/download/) | Latest Version |

##### After installing all above things follow below steps
* Open `src/environments/environment.local.ts` file and change baseUrl path.
* Here in this project firebased is used you can give any of base url.
* Open CMD project folder run `npm install` or `yarn install` if you have yarn installed.
* After completing installation project is ready to run.

### Development server

* Run `ng serve` for a dev server. 
* Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
