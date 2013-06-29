/**
 * Module Dependencies
 */

var event = require('event');

/**
 * Expose `FilePicker`
 */

module.exports = FilePicker;

/**
 * Input template
 */

var form = document.createElement('form');
form.innerHTML = '<input type="file" style="top: -1000px; position: absolute">';
document.body.appendChild(form);
var input = form.children[0];

/**
 * Opens a file picker dialog.
 *
 * @param {Object} options (optional)
 * @param {Function} fn callback function
 * @api public
 */

function FilePicker(opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }
  opts = opts || {};

  // multiple files support
  input.multiple = !!opts.multiple;
  input.webkitdirectory = input.mozdirectory = input.directory = !!opts.directory;

  // listen change event
  event.bind(input, 'change', function onchange(ev){
    fn(input.files, ev, input);
    form.reset();
    event.unbind(input, 'change', onchange);
  });

  // trigger input dialog
  input.click();
}
