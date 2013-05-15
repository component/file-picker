
/**
 * Module exports.
 */

module.exports = filePicker;

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

  // inject input element
  var input = document.createElement('input');
  input.type = 'file';
  input.style.top = -100;
  input.style.position = 'absolute';

  // multiple files support
  if (opts.multiple) input.multiple = true;

  // listen change event
  input.addEventListener('change', fn);

  // inject
  document.body.appendChild(input);

  // open dialog
  if (window.opera) {
    // opera hack
    setTimeout(open, 0);
  } else {
    open();
  }

  // open
  function open(){
    input.click();

    // this will be deferred after the blocking
    // file dialog is closed
    setTimeout(function(){
      input.parentNode.removeChild(input);
    }, 200);
  }
}
