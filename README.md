# @react-corekit/use-where

> React Hook that detects if the javascript is being loaded from a server (SSR) or a web client

[![NPM](https://img.shields.io/npm/v/use-where.svg)](https://www.npmjs.com/package/@react-corekit/use-where) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @react-corekit/use-where
```

```bash
yarn add @react-corekit/use-where
```

## Syntax

```js
const [isBrowser, isNode, isServer] = useWhere();
```

## Returns

**isBrowser**

> A function that detects if the code is being executed in a web browser.

**isServer**

> A function that detects if the code is being executed in a server (SSR - Server side rendering).

**isNode**

> A function that detects if the code is being executed in node environment (SSR - Server side rendering).

## Usage

> Visit: https://react-corekit.github.io/use-where/ for a minimalistic live demo

```jsx
import React from "react";

import { useWhere } from "@react-corekit/use-where";

const App = () => {
  const [isBrowser, isNode, isServer] = useWhere();
  return (
    <div>
      <div>
        Is browser? <strong>{isBrowser() ? "Yes" : "No"}</strong>
      </div>
      <div>
        Is node? <strong>{isNode() ? "Yes" : "No"}</strong>
      </div>
      <div>
        Is server? <strong>{isServer() ? "Yes" : "No"}</strong>
      </div>
    </div>
  );
};
export default App;
```

## Additional documentation

[Node's Globals Documentation](https://nodejs.org/api/globals.html)

[Window Object Reference](https://developer.mozilla.org/en-US/docs/Web/API/Window)

[React's ReactDomServer object Reference](https://reactjs.org/docs/react-dom-server.html)

## License

MIT © [glongh](https://github.com/glongh)
