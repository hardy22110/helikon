## Introduction

This library contains a set of JavaScript functions that are commonly used in various projects. These functions are wrapped for convenient use, making it easy to implement them into your project.

Our library is designed to simplify the development process by providing a range of reusable and flexible functions. Whether you're building a website or a complex application, our library can help you streamline your development process and save you time.

All of the functions included in this library have been thoroughly tested and optimized for performance, ensuring that they are reliable and efficient. Additionally, we strive to maintain a clean and easy-to-use codebase that is well-documented and easy to understand.

## Installation

- Using npm:

```shell
npm install helikon
```

- Using CDN

```html
<script src="https://cdn.jsdelivr.net/npm/helikon"></script>
```

## Usage

- Once the package is installed, you can import the library using import:

```typescript
import { getVersion } from 'helikon'

console.log('helikon version ', getVersion())

```

-  Using CDN (ES5 UMD browser module):

```html
<script>
  console.log('appToolkit', appToolkit.getVersion())
</script>
```

<!-- ## Example
- Is it a number that you're entering? (Using React.js)
```tsx
import React, { useState } from 'react'
import { numberUtils } from 'helikon'

function App() {
  const [value, setValue] = useState<string>('')
  // Is the current value a number
  const valueNumberStatus = numberUtils.isNumber(value) ? 'is a number' : 'not a number'
  return (
    <>
      <input
        value={value}
        onInput={
          (e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)
        }
      />
      {value && valueNumberStatus}
    </>
  )
}

export default App
``` -->

## documentation

[helikon website](https://hardy22110.github.io/helikon/)

## License

This package is licensed under the MIT license. See [LICENSE](https://github.com/hardy22110/helikon/blob/main/LICENSE) for more information.
