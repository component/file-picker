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
 * Already bound
 */

var bound = false;

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

  // listen to change event (unbind old one if already listening)
  if (bound) event.unbind(input, 'change', bound);
  event.bind(input, 'change', onchange);
  bound = onchange;

  function onchange(e) {
    fn(input.files, e, input);
    event.unbind(input, 'change', onchange);
    bound = false;
  }

  // reset the form
  form.reset();

  // trigger input dialog
  input.click();
}
