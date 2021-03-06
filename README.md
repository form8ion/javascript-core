# javascript-core

core logic for form8ion tools related to JavaScript, like
[javascript-scaffolder](https://github.com/travi/javascript-scaffolder) and
[lift-javascript](https://github.com/form8ion/lift-javascript)

<!--status-badges start -->

[![Node CI Workflow Status][github-actions-ci-badge]][github-actions-ci-link]

<!--status-badges end -->

## Table of Contents

* [Usage](#usage)
  * [Installation](#installation)
  * [Example](#example)
    * [Import](#import)
    * [Execute](#execute)
  * [API](#api)
    * [`scaffoldChoice`](#scaffoldchoice)
      * [`choices` __object__ (_required_)](#choices-object-required)
      * [`choice` __string__ (_required_)](#choice-string-required)
      * [`options` __object__ (_optional_)](#options-object-optional)
    * [`scaffoldUnitTesting`](#scaffoldunittesting)
      * [`projectRoot` __string__ (_required_)](#projectroot-string-required)
      * [`frameworks` __object__ (_required_)](#frameworks-object-required)
      * [`decisions` __object__ (_optional_)](#decisions-object-optional)
      * [`visibility` __string__ (_required_)](#visibility-string-required)
      * [`vcs` __object__ (_required_)](#vcs-object-required)
    * [`unitTestFrameworksSchema`](#unittestframeworksschema)
    * [`installDependencies`](#installdependencies)
      * [`dependencies` __list of strings__ (_required_)](#dependencies-list-of-strings-required)
      * [`dependenciesType` __string__ (_required_)](#dependenciestype-string-required)
        * [Dependency-types Constants](#dependency-types-constants)
    * [`questionNames`](#questionnames)
    * [`projectTypes`](#projecttypes)
    * [`packageManagers`](#packagemanagers)
    * [`projectTypeShouldBePublished`](#projecttypeshouldbepublished)
      * [`projectType` __string__ (_required_)](#projecttype-string-required)
    * [`coverageShouldBeReported`](#coverageshouldbereported)
      * [`visibility` __string__ (_required_)](#visibility-string-required-1)
      * [`tests` __object__ (_required_)](#tests-object-required)
* [Contributing](#contributing)
  * [Dependencies](#dependencies)
  * [Verification](#verification)

## Usage

<!--consumer-badges start -->

[![MIT license][license-badge]][license-link]
[![npm][npm-badge]][npm-link]
![node][node-badge]
[![Try @form8ion/javascript-core on RunKit][runkit-badge]][runkit-link]

<!--consumer-badges end -->

### Installation

```sh
$ npm install @form8ion/javascript-core --save-prod
```

### Example

#### Import

```javascript
import {scaffoldUnitTesting, scaffoldChoice, installDependencies, PROD_DEPENDENCY_TYPE} from '@form8ion/javascript-core';
```

#### Execute

```javascript
(async () => {
  await scaffoldUnitTesting({
    projectRoot: process.cwd(),
    frameworks: {
      Mocha: {scaffolder: () => undefined},
      Jest: {scaffolder: () => undefined}
    },
    visibility: 'Public',
    vcs: {host: 'GitHub', owner: 'foo', name: 'bar'}
  });

  await scaffoldChoice(
    {foo: {scaffolder: options => options}},
    'foo',
    {bar: 'baz'}
  );

  await installDependencies(['foo', 'bar'], PROD_DEPENDENCY_TYPE);
})();
```

### API

#### `scaffoldChoice`

A generic function that executes the `scaffolder` function from a provided map
of options based on the chosen option name.

Takes three unnamed arguments:

##### `choices` __object__ (_required_)

* keys: __string__ Name of the choice
* values: __object__
  * `scaffolder`: __function__ (_required_) scaffolds the choice options

##### `choice` __string__ (_required_)

Name of the choice. SHOULD match a key from the [`choices` object](#choices-object-required).

##### `options` __object__ (_optional_)

options object to be passed as the only argument to the chosen scaffolder

#### `scaffoldUnitTesting`

Scaffolder for enabling unit-testing in a project with the ability to choose a
desired framework from provided options.

Takes a single options object as an argument, containing:

##### `projectRoot` __string__ (_required_)

path to the root of the project

##### `frameworks` __object__ (_required_)

A [`choices` object](#choices-object-required) for defining
[unit-testing framework options](https://github.com/form8ion/awesome#unit-testing-frameworks)

##### `decisions` __object__ (_optional_)

Answers for prompt questions so that the prompt is skipped at execution time

* keys: __string__ Name of the prompt question
* values: Hard-coded answer for the prompt question

##### `visibility` __string__ (_required_)

visibility of the project (`Public` or `Private`)

##### `vcs` __object__ (_required_)

* `host` __string__ (_required_)
  VCS hosting service
* `owner` __string__ (_required_)
  account name on the host service for the repository
* `name` __string__ (_required_)
  repository name

#### `unitTestFrameworksSchema`

[joi](https://hapi.dev/module/joi/) schema for the choices required for the
[unit-testing scaffolder](#scaffoldunittesting)

#### `installDependencies`

A function that installs the provided package dependencies.

Takes four unnamed arguments:

##### `dependencies` __list of strings__ (_required_)

The list of package names to be installed.

##### `dependenciesType` __string__ (_required_)

Defines if the provided list of package names should be installed as prod or
dev dependencies. If "dev" is provided, the list will be installed with the
`--save-exact` flag.

##### `projectRoot` __string__ (_optional_)

Filesystem path to the root of the project

##### `packageManger` __string__ (_optional_)

Specifies the name of the package manager to be used for dependency
installation. Defaults to `npm`

###### Dependency-types Constants

Constants to define the valid options for [`dependenciesType`](#dependenciestype-string-required)

* `PROD_DEPENDENCY_TYPE`
* `DEV_DEPENDENCY_TYPE`

#### `questionNames`

Constants defining the question names for the prompts implemented in this
package

#### `projectTypes`

Constants defining the types of possible JavaScript projects

* `APPLICATION`
* `PACKAGE`
* `CLI`

#### `packageManagers`

Constants defining the available package managers

* `NPM`
* `YARN`

#### `projectTypeShouldBePublished`

Predicate function to determine if the [project-type](#projecttypes) is one
that should be published

Takes one argument:

##### `projectType` __string__ (_required_)

Should be one of the [project-type](#projecttypes) options

#### `coverageShouldBeReported`

Predicate function to determine if coverage should be reported

Takes two arguments:

##### `visibility` __string__ (_required_)

visibility of the project (`Public` or `Private`)

##### `tests` __object__ (_required_)

* `unit` __boolean__ (_optional_)
  Whether the project will be unit-tested

## Contributing

<!--contribution-badges start -->

[![PRs Welcome][PRs-badge]][PRs-link]
[![Conventional Commits][commit-convention-badge]][commit-convention-link]
[![Commitizen friendly][commitizen-badge]][commitizen-link]
[![semantic-release][semantic-release-badge]][semantic-release-link]
[![Renovate][renovate-badge]][renovate-link]

<!--contribution-badges end -->

### Dependencies

```sh
$ nvm install
$ npm install
```

### Verification

```sh
$ npm test
```

[PRs-link]: http://makeapullrequest.com

[PRs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg

[node-badge]: https://img.shields.io/node/v/@travi/javascript-scaffolder.svg

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[semantic-release-link]: https://github.com/semantic-release/semantic-release

[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg

[renovate-link]: https://renovatebot.com

[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNjkgMzY5Ij48Y2lyY2xlIGN4PSIxODkuOSIgY3k9IjE5MC4yIiByPSIxODQuNSIgZmlsbD0iI2ZmZTQyZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUgLTYpIi8+PHBhdGggZmlsbD0iIzhiYjViNSIgZD0iTTI1MSAyNTZsLTM4LTM4YTE3IDE3IDAgMDEwLTI0bDU2LTU2YzItMiAyLTYgMC03bC0yMC0yMWE1IDUgMCAwMC03IDBsLTEzIDEyLTktOCAxMy0xM2ExNyAxNyAwIDAxMjQgMGwyMSAyMWM3IDcgNyAxNyAwIDI0bC01NiA1N2E1IDUgMCAwMDAgN2wzOCAzOHoiLz48cGF0aCBmaWxsPSIjZDk1NjEyIiBkPSJNMzAwIDI4OGwtOCA4Yy00IDQtMTEgNC0xNiAwbC00Ni00NmMtNS01LTUtMTIgMC0xNmw4LThjNC00IDExLTQgMTUgMGw0NyA0N2M0IDQgNCAxMSAwIDE1eiIvPjxwYXRoIGZpbGw9IiMyNGJmYmUiIGQ9Ik04MSAxODVsMTgtMTggMTggMTgtMTggMTh6Ii8+PHBhdGggZmlsbD0iIzI1YzRjMyIgZD0iTTIyMCAxMDBsMjMgMjNjNCA0IDQgMTEgMCAxNkwxNDIgMjQwYy00IDQtMTEgNC0xNSAwbC0yNC0yNGMtNC00LTQtMTEgMC0xNWwxMDEtMTAxYzUtNSAxMi01IDE2IDB6Ii8+PHBhdGggZmlsbD0iIzFkZGVkZCIgZD0iTTk5IDE2N2wxOC0xOCAxOCAxOC0xOCAxOHoiLz48cGF0aCBmaWxsPSIjMDBhZmIzIiBkPSJNMjMwIDExMGwxMyAxM2M0IDQgNCAxMSAwIDE2TDE0MiAyNDBjLTQgNC0xMSA0LTE1IDBsLTEzLTEzYzQgNCAxMSA0IDE1IDBsMTAxLTEwMWM1LTUgNS0xMSAwLTE2eiIvPjxwYXRoIGZpbGw9IiMyNGJmYmUiIGQ9Ik0xMTYgMTQ5bDE4LTE4IDE4IDE4LTE4IDE4eiIvPjxwYXRoIGZpbGw9IiMxZGRlZGQiIGQ9Ik0xMzQgMTMxbDE4LTE4IDE4IDE4LTE4IDE4eiIvPjxwYXRoIGZpbGw9IiMxYmNmY2UiIGQ9Ik0xNTIgMTEzbDE4LTE4IDE4IDE4LTE4IDE4eiIvPjxwYXRoIGZpbGw9IiMyNGJmYmUiIGQ9Ik0xNzAgOTVsMTgtMTggMTggMTgtMTggMTh6Ii8+PHBhdGggZmlsbD0iIzFiY2ZjZSIgZD0iTTYzIDE2N2wxOC0xOCAxOCAxOC0xOCAxOHpNOTggMTMxbDE4LTE4IDE4IDE4LTE4IDE4eiIvPjxwYXRoIGZpbGw9IiMzNGVkZWIiIGQ9Ik0xMzQgOTVsMTgtMTggMTggMTgtMTggMTh6Ii8+PHBhdGggZmlsbD0iIzFiY2ZjZSIgZD0iTTE1MyA3OGwxOC0xOCAxOCAxOC0xOCAxOHoiLz48cGF0aCBmaWxsPSIjMzRlZGViIiBkPSJNODAgMTEzbDE4LTE3IDE4IDE3LTE4IDE4ek0xMzUgNjBsMTgtMTggMTggMTgtMTggMTh6Ii8+PHBhdGggZmlsbD0iIzk4ZWRlYiIgZD0iTTI3IDEzMWwxOC0xOCAxOCAxOC0xOCAxOHoiLz48cGF0aCBmaWxsPSIjYjUzZTAyIiBkPSJNMjg1IDI1OGw3IDdjNCA0IDQgMTEgMCAxNWwtOCA4Yy00IDQtMTEgNC0xNiAwbC02LTdjNCA1IDExIDUgMTUgMGw4LTdjNC01IDQtMTIgMC0xNnoiLz48cGF0aCBmaWxsPSIjOThlZGViIiBkPSJNODEgNzhsMTgtMTggMTggMTgtMTggMTh6Ii8+PHBhdGggZmlsbD0iIzAwYTNhMiIgZD0iTTIzNSAxMTVsOCA4YzQgNCA0IDExIDAgMTZMMTQyIDI0MGMtNCA0LTExIDQtMTUgMGwtOS05YzUgNSAxMiA1IDE2IDBsMTAxLTEwMWM0LTQgNC0xMSAwLTE1eiIvPjxwYXRoIGZpbGw9IiMzOWQ5ZDgiIGQ9Ik0yMjggMTA4bC04LThjLTQtNS0xMS01LTE2IDBMMTAzIDIwMWMtNCA0LTQgMTEgMCAxNWw4IDhjLTQtNC00LTExIDAtMTVsMTAxLTEwMWM1LTQgMTItNCAxNiAweiIvPjxwYXRoIGZpbGw9IiNhMzM5MDQiIGQ9Ik0yOTEgMjY0bDggOGM0IDQgNCAxMSAwIDE2bC04IDdjLTQgNS0xMSA1LTE1IDBsLTktOGM1IDUgMTIgNSAxNiAwbDgtOGM0LTQgNC0xMSAwLTE1eiIvPjxwYXRoIGZpbGw9IiNlYjZlMmQiIGQ9Ik0yNjAgMjMzbC00LTRjLTYtNi0xNy02LTIzIDAtNyA3LTcgMTcgMCAyNGw0IDRjLTQtNS00LTExIDAtMTZsOC04YzQtNCAxMS00IDE1IDB6Ii8+PHBhdGggZmlsbD0iIzEzYWNiZCIgZD0iTTEzNCAyNDhjLTQgMC04LTItMTEtNWwtMjMtMjNhMTYgMTYgMCAwMTAtMjNMMjAxIDk2YTE2IDE2IDAgMDEyMiAwbDI0IDI0YzYgNiA2IDE2IDAgMjJMMTQ2IDI0M2MtMyAzLTcgNS0xMiA1em03OC0xNDdsLTQgMi0xMDEgMTAxYTYgNiAwIDAwMCA5bDIzIDIzYTYgNiAwIDAwOSAwbDEwMS0xMDFhNiA2IDAgMDAwLTlsLTI0LTIzLTQtMnoiLz48cGF0aCBmaWxsPSIjYmY0NDA0IiBkPSJNMjg0IDMwNGMtNCAwLTgtMS0xMS00bC00Ny00N2MtNi02LTYtMTYgMC0yMmw4LThjNi02IDE2LTYgMjIgMGw0NyA0NmM2IDcgNiAxNyAwIDIzbC04IDhjLTMgMy03IDQtMTEgNHptLTM5LTc2Yy0xIDAtMyAwLTQgMmwtOCA3Yy0yIDMtMiA3IDAgOWw0NyA0N2E2IDYgMCAwMDkgMGw3LThjMy0yIDMtNiAwLTlsLTQ2LTQ2Yy0yLTItMy0yLTUtMnoiLz48L3N2Zz4=

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/form8ion/javascript-core.svg

[npm-link]: https://www.npmjs.com/package/@form8ion/javascript-core

[npm-badge]: https://img.shields.io/npm/v/@form8ion/javascript-core.svg

[runkit-link]: https://npm.runkit.com/@form8ion/javascript-core

[runkit-badge]: https://badge.runkitcdn.com/@form8ion/javascript-core.svg

[github-actions-ci-link]: https://github.com/form8ion/javascript-core/actions?query=workflow%3A%22Node.js+CI%22+branch%3Amaster

[github-actions-ci-badge]: https://github.com/form8ion/javascript-core/workflows/Node.js%20CI/badge.svg
