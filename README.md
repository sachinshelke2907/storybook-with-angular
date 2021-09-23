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
* [7 How to use?](#7)
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
## <a name="6"></a>6 Installation
### Installing
```Shell
npm install my-library --save 
```
## <a name="7"></a>7 How to use?
- pending

## <a name="previous-versions"></a>Previous versions
- **@[test/dogma 0.0.1](https://github.com/robisim74/angular-library-starter/tree/angular_v8)**

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

![alt text](https://github.com/sachinshelke2907/storybook-with-angular/blob/package-creation/Capture.PNG)
