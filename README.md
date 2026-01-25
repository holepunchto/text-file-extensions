# known-text-files

> List of common plain-text file extensions

```
npm install known-text-files
```

## Usage

Values are stored in an array of lowercase strings without a leading dot, e.g. `txt`.

For convenience, it also includes dotfiles such as `.gitignore` (stored as `gitignore`).

```js
const textFileExtensions = require('known-text-files')
```

```js
textFileExtensions.includes('txt') // true
textFileExtensions.includes('pdf') // false
```

For faster `O(1)` lookups use a `Set`:

```js
const extensionsSet = new Set(textFileExtensions)
extensionsSet.has('txt') // true
extensionsSet.has('pdf') // false
```

See also [is-text-file](https://github.com/holepunchto/is-text-file) for a high-level API.

## License

Apache-2.0
