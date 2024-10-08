coverageShouldBeReported# javascript-core

core logic for form8ion tools related to JavaScript, like
[javascript-scaffolder](https://github.com/travi/javascript-scaffolder) and
[lift-javascript](https://github.com/form8ion/lift-javascript)

<!--status-badges start -->

[![Node CI Workflow Status][github-actions-ci-badge]][github-actions-ci-link]
[![Codecov][coverage-badge]][coverage-link]
![SLSA Level 2][slsa-badge]
[![OpenSSF Scorecard][ossfScorecard-badge]][ossfScorecard-link]

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
    * [`installDependencies`](#installdependencies)
      * [`dependencies` __list of strings__ (_required_)](#dependencies-list-of-strings-required)
      * [`dependenciesType` __string__ (_required_)](#dependenciestype-string-required)
      * [`projectRoot` __string__ (_optional_)](#projectroot-string-optional)
      * [`packageManger` __string__ (_optional_)](#packagemanger-string-optional)
        * [Dependency-types Constants](#dependency-types-constants)
    * [`projectTypes`](#projecttypes)
    * [`packageManagers`](#packagemanagers)
    * [`dialects`](#dialects)
    * [`projectTypeShouldBePublished`](#projecttypeshouldbepublished)
      * [`projectType` __string__ (_required_)](#projecttype-string-required)
    * [`coverageShouldBeReported`](#coverageshouldbereported)
      * [`visibility` __string__ (_required_)](#visibility-string-required)
      * [`tests` __object__ (_required_)](#tests-object-required)
    * [`writePackageJson`](#writepackagejson)
      * [`projectRoot` __string__ (_required_)](#projectroot-string-required)
      * [`config` __object__ (_required_)](#config-object-required)
    * [`mergeIntoExistingPackageJson`](#mergeintoexistingpackagejson)
      * [`projectRoot` __string__ (_required_)](#projectroot-string-required-1)
      * [`config` __object__ (_required_)](#config-object-required-1)
    * [Node version categories](#node-version-categories)
      * [`determineLtsNodeMajorVersions`](#determineltsnodemajorversions)
        * [`withinRange` __string__ (_optional_)](#withinrange-string-optional)
      * [`determineSupportedNodeMajorVersions`](#determinesupportednodemajorversions)
        * [`withinRange` __string__ (_optional_)](#withinrange-string-optional-1)
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
const {scaffoldChoice} = require('@form8ion/javascript-core');
```

#### Execute

```javascript
(async () => {
  await scaffoldChoice(
    {foo: {scaffold: options => options}},
    'foo',
    {bar: 'baz'}
  );
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

#### `projectTypes`

Constants defining the types of possible JavaScript projects

* `APPLICATION`
* `PACKAGE`
* `CLI`

#### `packageManagers`

Constants defining the available package managers

* `NPM`
* `YARN`

#### `dialects`

Constants defining the available JavaScript source dialects

* `COMMON_JS`
* `BABEL`
* `ESM`
* `TYPESCRIPT`

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

#### `writePackageJson`

Writes the provided config to the `package.json` for the project

Accepts an options object as the only argument, with the following properties:

##### `projectRoot` __string__ (_required_)

Filesystem path to the root of the project

##### `config` __object__ (_required_)

The config to be written to the `package.json` as the entire contents of the
file

#### `mergeIntoExistingPackageJson`

Merges the provided config into the existing `package.json` for the project

Accepts an options object as the only argument, with the following properties:

##### `projectRoot` __string__ (_required_)

Filesystem path to the root of the project

##### `config` __object__ (_required_)

The config to be merged with the existing contents of the `package.json`

#### Node version categories

Helpers for determining supported node.js versions in categories defined by
[package support guidelines](https://github.com/nodejs/package-maintenance/blob/a2d9417cc8345a21016a1b62109ae64f9de7f06d/docs/PACKAGE-SUPPORT.md#node-namespace).
Refer to the [release schedule](https://nodejs.org/en/about/releases/) for
current statuses.

##### `determineLtsNodeMajorVersions`

Returns a list of the major LTS versions currently in _active_ or _maintenance_
status, optionally filtered by a provided semver range.

Accepts an options object as the only argument, with the following properties:

###### `withinRange` __string__ (_optional_)

A semver range, compatible with [node-semver](https://www.npmjs.com/package/semver),
to filter the list of active major LTS versions by.

##### `determineSupportedNodeMajorVersions`

Returns a list of the major versions currently not in end-of-life status,
optionally filtered by a provided semver range.

Accepts an options object as the only argument, with the following properties:

###### `withinRange` __string__ (_optional_)

A semver range, compatible with [node-semver](https://www.npmjs.com/package/semver),
to filter the list of active major LTS versions by.

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

[node-badge]: https://img.shields.io/node/v/@form8ion/javascript-core?logo=node.js

[commit-convention-link]: https://conventionalcommits.org

[commit-convention-badge]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg

[commitizen-link]: http://commitizen.github.io/cz-cli/

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg

[semantic-release-link]: https://github.com/semantic-release/semantic-release

[semantic-release-badge]: https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release

[renovate-link]: https://renovatebot.com

[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovatebot

[license-link]: LICENSE

[license-badge]: https://img.shields.io/github/license/form8ion/javascript-core.svg?logo=opensourceinitiative

[npm-link]: https://www.npmjs.com/package/@form8ion/javascript-core

[npm-badge]: https://img.shields.io/npm/v/@form8ion/javascript-core?logo=npm

[runkit-link]: https://npm.runkit.com/@form8ion/javascript-core

[runkit-badge]: https://badge.runkitcdn.com/@form8ion/javascript-core.svg

[github-actions-ci-link]: https://github.com/form8ion/javascript-core/actions?query=workflow%3A%22Node.js+CI%22+branch%3Amaster

[github-actions-ci-badge]: https://img.shields.io/github/actions/workflow/status/form8ion/javascript-core/node-ci.yml.svg?branch=master&logo=github

[coverage-link]: https://codecov.io/github/form8ion/javascript-core

[coverage-badge]: https://img.shields.io/codecov/c/github/form8ion/javascript-core?logo=codecov

[slsa-badge]: https://slsa.dev/images/gh-badge-level2.svg

[ossfScorecard-link]: https://securityscorecards.dev/viewer/?uri=github.com/form8ion/javascript-core

[ossfScorecard-badge]: https://api.securityscorecards.dev/projects/github.com/form8ion/javascript-core/badge
