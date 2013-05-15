# File Picker

  Opens a file picker dialog upon being called. Doesn't need a DOM
  element or pre-existing `<input type="file">`.

## Installation

    $ component install component/file-picker

## Usage

```js
// Upload a single file
$('single-link').click(function() {
  require('file-picker')(function(files){});
});

// Upload multiple files
$('multiple-link').click(function() {
  require('file-picker')({ multiple: true }, function(files){});
});
```

## API

### filePicker(opts, fn)

  Valid options:

  - `multiple` (Boolean) whether the user can select multiple files
    if the UA supports it (defaults to `false`).

  The callback `fn` will only be invoked if the underlying `<input>`
  fires a `change` event. It will receive the following parameters:

  - The `files` array from the `<input>`.
  - The change `event` object.
  - The underlying `<input>` element reference (detached from DOM).

## Browser support

 - Internet Explorer 6+
 - Firefox
 - Chrome
 - Opera
 - Safari
 - Mobile Safari

## License

  MIT
