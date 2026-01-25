# known-text-files

> Unified list of plain-text file extensions, filenames and dotfiles

```
npm install known-text-files
```

## Usage

Values are stored in an array of lowercase strings without a leading dot, e.g. `'txt'`, `'dockerfile'`.

For convenience, it also includes dotfiles such as `.gitignore` (stored as `'gitignore'`), giving a comprehensive list of known text files with or without file extension.

```js
const textFileExtensions = require('known-text-files')
```

```js
textFileExtensions.includes('txt') // true
textFileExtensions.includes('pdf') // false
textFileExtensions.includes('dockerfile') // true
```

For faster `O(1)` lookups use a `Set`:

```js
const extensionsSet = new Set(textFileExtensions)
extensionsSet.has('txt') // true
```

See also [is-text-file](https://github.com/holepunchto/is-text-file) for a high-level API.

## License

Apache-2.0
