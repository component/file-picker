
/**
 * Module exports.
 */

module.exports = filePicker;

/**
 * Reference to last `<input>` used.
 */

var last;

/**
 * Opens a file picker dialog.
 *
 * @param {Object} options (optional)
 * @param {Function} fn callback function
 * @api public
 */

function filePicker(opts, fn){
  if (last && last.parentNode) {
    last.parentNode.removeChild(last);
  }

  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }
  opts = opts || {};

  // inject input element
  var input = document.createElement('input');
  input.type = 'file';
  input.style.top = '-100px';
  input.style.position = 'absolute';
  last = input;

  // multiple files support
  if (opts.multiple) input.multiple = true;
  if (opts.directory) input.webkitdirectory = input.mozdirectory = input.directory = true;

  // listen change event
  input.addEventListener('change', function(ev){
    fn(input.files, ev, input);
  });

  // inject
  document.body.appendChild(input);

  setTimeout(open, 0);

  // open
  function open(){
    input.dispatchEvent(click());
  }
}

function click() {
  var evt = document.createEvent('MouseEvents');
  evt.initEvent( 'click', true, true );
  return evt;
}
