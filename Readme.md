# file-picker

  Opens a file picker dialog upon being called. Doesn't need a DOM
  element or pre-existing `<input type="file">`.

## Installation

    $ component install component/file-picker

## Usage

```js
var picker = FilePicker();

// single file upload on click

link.onclick = function() {
  picker.choose(function(files) {
    // ...
  });
}

// upload multiple files (on supported web browsers)

picker.multiple()
link.onclick = function() {
  picker.choose(function(files) {
    // ...
  });
}
```

## API

### FilePicker()

Initialize a `FilePicker` instance. Defaults to a single file upload.

### picker#multiple(multiple)

Upload multiple files (on supported browsers). Defaults to `false`.

```js
picker.multiple()
picker.choose(fn)
```

### picker#directory(directory)

Upload an entire directory (on supported browsers). Defaults to `false`

```js
picker.directory()
picker.choose(fn)
```

### picker#choose(fn)

Open the file dialog. Call `fn` upon file selection. If the user cancels the dialog without uploading a file, `fn` is not called.

```js
picker.choose(function(files, e) {
  // ...
})
```

### picker#destroy()

Remove the picker from the DOM and unbind any events

## Browser support

 - Internet Explorer 9+
 - Firefox
 - Chrome
 - Opera
 - Safari
 - Mobile Safari
 - Chrome (Android)

## License

  MIT
