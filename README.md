# import-esm-sync
This package can `import` ESModules **_synchronously_** by calling Node.js event loop.  
Of course, this can also `import` CommonJS, but I recommend using the `require` function.

## Usage
### import a ESModule
```js
const importSync = require('import-esm-sync');
const { default: fetch } = importSync('node-fetch');
```

### import a local ESM JavaScript file
```js
const importSync = require('import-esm-sync');
const abc = importSync('./abc.mjs');
```
