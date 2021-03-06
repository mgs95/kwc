# konstellation-web-components

> Components library for Konstellation projects

![Docs][workflow-docs]
![Publish][workflow-publish]

[![NPM][npm-image]][npm-url]
[![JavaScript Style Guide][js-image]][js-url]
[![License][license-image]][license-url]

## Install

```bash
npm install --save konstellation-web-components
```

or

```bash
yarn add konstellation-web-components
```

## Usage

Add styles at the index of your website

```tsx
import 'konstellation-web-components/dist/index.css';
```

You can now import the components directly from the library

```tsx
import React from 'react'

import Button from 'konstellation-web-components'

function Example() {
  render() {
    return <Button />
  }
}
```

## Docz local deployment

In case you want to deploy the documentation site for this project you first need to install the dependencies:

```bash
yarn install
```

or

```bash
npm install
```

And then you can deploy the docs by executing this command:

```bash
yarn docz dev
```

or

```bash
npm run docz dev
```

## License

MIT © [konstellation-io](https://github.com/konstellation-io)

[workflow-docs]: https://github.com/konstellation-io/kwc/workflows/Deploy%20to%20GitHub%20Pages/badge.svg
[workflow-publish]: https://github.com/konstellation-io/kwc/workflows/Publish%20konstellation-web-components%20npm%20library/badge.svg
[npm-image]: https://img.shields.io/npm/v/konstellation-web-components.svg
[npm-url]: https://www.npmjs.com/package/konstellation-web-components
[js-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[js-url]: https://standardjs.com
[license-image]: http://img.shields.io/npm/l/konstellation-web-components.svg
[license-url]: LICENSE
