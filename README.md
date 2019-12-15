# use-where

> Detects if the javascript is being loaded from a server (SSR) or a web client

[![NPM](https://img.shields.io/npm/v/use-where.svg)](https://www.npmjs.com/package/use-where) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-where
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyHook } from 'use-where'

const Example = () => {
  const example = useMyHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [glongh](https://github.com/glongh)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
