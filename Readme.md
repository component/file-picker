# File Picker

  Opens a file picker dialog upon being called. Doesn't need a DOM
  element or pre-existing `<input type="file">`.

  __Note:__ This component inserts the element when required, so the body element needs to be loaded beforehand.
  
  __Note:__ For security reasons, `file-picker` must be triggered by an original DOM event (`click`, `touchstart`, `keyup`, etc.). It cannot be called `onload` or in a timeout.

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

// Accept only image files or .psd files
$('image-link').click(function() {
  filePicker({ accept: [ 'image/*', '.psd' ] }, function(files){});
});
```

## API

### filePicker(opts, fn)

  Valid options:

  - `multiple` (Boolean) whether the user can select multiple files
    if the UA supports it (defaults to `false`).
  - `directory` (Boolean) whether the user can select a directory
    if the UA supports it (defaults to `false`).
  - `accept` (String) tell the browser to only allow selecting files
    of this type. If several types, you may pass in an array of types. [Some examples](http://stackoverflow.com/questions/181214/file-input-accept-attribute-is-it-useful/10503561#10503561).

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
