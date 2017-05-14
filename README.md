# Shopping Cart Challenge

This is a simple e-commerce application, built using **React** and **Redux**.

The build system is implemented using **Webpack**.

The application has two functionalities:
* Add/Remove to Bag
* Add/Remove to Wishlist

The pagination lists 6 products per page.

The bag in the header is updated with the new quantities and the new total price.

# Dependencies

Before you continue, make sure you have at least version `v6.x.x` of **NodeJS** installed.

If not, you can grab a binary distribution from their website [here](https://nodejs.org/en/). You can also build from [source](https://github.com/nodejs/node/blob/master/BUILDING.md#building-nodejs-on-supported-platforms) or installing it using a [package manager](https://nodejs.org/en/download/package-manager/).


# Installation

To install the project dependencies using **NPM** (the node package manager), you can run:

`$ npm install`

or use the shorter version

`$ npm i`

If you **Yarn** [installed](https://yarnpkg.com/lang/en/docs/install/), you can instead run:

`$ yarn install`

# Run

## Build
To build the project you can run:

`$ npm run build`

If you **Yarn** [installed](https://yarnpkg.com/lang/en/docs/install/), you can instead run:

`$ yarn build`

The distribution files will be located under `dist/` folder.

## Development Server

To launch a local server, you can run:

`npm start`

or

`yarn start`

using **yarn**.

## Lint

To launch the **lint** task you can run:

`npm run lint`

or

`yarn run lint`

## Tests

To launch **unit tests**, you can run:

`npm test`

or

`yarn test`

# TODO

[ ] achieve 100% coverage in unit tests

[ ] increase pagination item numbers in mobile

[ ] minify html

[ ] pagination component should be independent from the business logic, it should not be attached to the products list