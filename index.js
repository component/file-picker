
/**
 * Module dependencies
 */

var dom = require('dom');
var domtrigger = require('trigger-event');

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
  var input = dom('<input>')
  .attr('type', 'file')
  .css({ display: 'none', position: 'absolute', top: -100 })
  .addClass('file-picker')
  .appendTo('body');

  if (opts.multiple) {
    input.attr('multiple', 'multiple');
  }

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
    domtrigger(input.els[0], 'click');
    input.remove();
  }

  // listen change event
  input.on('change', fn);
}
