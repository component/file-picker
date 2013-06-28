# File Picker

  Opens a file picker dialog upon being called. Doesn't need a DOM
  element or pre-existing `<input type="file">`.

  __Note:__ The file picker function _MUST_ be invoked from a user-generated DOM
  event. The most common example is a `"click"` event.

## Installation

    $ component install component/file-picker

## Usage

```js
var filePicker = require('file-picker');

// Upload a single file
$('single-link').click(function() {
  filePicker(function(files){});
});

// Upload multiple files (on supported web browsers)
$('multiple-link').click(function() {
  filePicker({ multiple: true }, function(files){});
});

// Upload a directory (on supported web browsers)
$('directory-link').click(function() {
  filePicker({ directory: true }, function(files){});
});
```

## API

### filePicker(opts, fn)

  Valid options:

  - `multiple` (Boolean) whether the user can select multiple files
    if the UA supports it (defaults to `false`).
  - `directory` (Boolean) whether the user can select a directory
    if the UA supports it (defaults to `false`).

  The callback `fn` will only be invoked if the underlying `<input>`
  fires a `change` event. It will receive the following parameters:

  - The `files` array from the `<input>` (not available on IE9).
  - The change `event` object.
  - The underlying `<input>` element reference (detached from DOM).

## Browser support

 - Internet Explorer 9+
 - Firefox
 - Chrome
 - Opera
 - Safari
 - Mobile Safari
 - Android Browser

## License

  MIT
