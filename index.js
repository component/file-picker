
/**
 * Module exports.
 */

module.exports = filePicker;

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

function filePicker(opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }
  opts = opts || {};

  // multiple files support
  if (opts.multiple) input.multiple = true;
  if (opts.directory) input.webkitdirectory = input.mozdirectory = input.directory = true;

  // listen change event
  input.addEventListener('change', function onchange(ev){
    fn(input.files, ev, input);
    form.reset();
    input.removeEventListener('change', onchange);
  });

  // trigger input dialog
  input.click();
}
