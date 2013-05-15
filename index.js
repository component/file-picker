
/**
 * Expose `filePicker`.
 */

exports = module.exports = FilePicker;

/**
 * filePicker
 *
 * @param {Function} fn callback function
 * @api public
 */

function FilePicker(opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }
  opts = opts || {};

  // inject input element
  var input = document.createElement('input');
  input.style.top = -100;
  input.style.position = 'absolute';
  input.setAttribute('type', 'file');

  if (opts.multiple) {
    input.setAttribute('multiple', 'multiple');
  }

  document.body.appendChild(input);

  // open dialog
  if (window.opera) {
    // opera hack
    setTimeout(open, 0);
  } else {
    open();
  }

  /**
   * Open file input dialog
   * @api private
   */

  function open(){
    input.click();
    input.parentNode.removeChild(input);
  }

  // listen change event
  input.addEventListener('change', fn);
}
