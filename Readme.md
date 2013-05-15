# File Picker

  File picker component

## Installation

    $ component install component/file-picker

## API

```js
// Upload a single file
$('single-link').click(function() {
  require('file-picker')(function(ev){ ... });
});

// Upload multiple files
$('multiple-link').click(function() {
  require('file-picker')({ multiple: true }, function(ev){ ... });
});
```

## Cross-browser support

 - Internet Explorer >= 6
 - FireFox
 - Chrome
 - Opera
 - Safari

## License

  MIT
