/**
 * Module Dependencies
 */

var domify = require('domify');
var event = require('event');
var form = domify(require('./template'));

 /**
  * Expose `Picker`
  */

module.exports = Picker;

/**
 * Initialize `Picker`
 *
 * @return {Picker}
 * @api public
 */

function Picker() {
  if (!(this instanceof Picker)) return new Picker;
  this.fn = function() {};
  this.form = form.cloneNode(true);
  this.input = this.form.children[0];
  document.body.appendChild(this.form);
  this.change = this.onchange.bind(this);
  event.bind(this.input, 'change', this.change);
}

/**
 * Allow multiple files to be selected
 *
 * @param {Boolean} multiple
 * @return {Picker}
 * @api public
 */

Picker.prototype.multiple = function(multiple) {
  multiple = (multiple === undefined) ? true : multiple;
  this.input.multiple = multiple;
  return this;
};

/**
 * Directory
 *
 * @param {Boolean} directory
 * @return {Picker}
 * @api public
 */

Picker.prototype.directory = function(directory) {
  directory = (directory === undefined) ? true : directory;
  this.input.webkitdirectory = this.input.mozdirectory = this.input.directory = directory;
  return this;
};

/**
 * Choose
 *
 * @param {Function} fn
 * @return {Picker}
 * @api public
 */

Picker.prototype.choose = function(fn) {
  var self = this;
  this.form.reset();
  this.fn = fn;
  this.input.click();
};

/**
 * Handle on change events
 *
 * @param {Event} e
 * @return {Picker}
 * @api private
 */

Picker.prototype.onchange = function(e) {
  this.fn(this.input.files, e);
  this.form.reset();
  return this;
};

/**
 * Remove the input[file] element
 */

Picker.prototype.remove = function() {
  document.body.removeChild(this.input);
  return this;
};

/**
 * Destroy the picker
 *
 * @return {Picker}
 * @api public
 */

Picker.prototype.destroy = function() {
  event.unbind(this.input, 'change', this.change);
  this.remove();
  return this;
};
