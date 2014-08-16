/*!
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

'use strict';

var _ = require('lodash');

/**
 * Join any number of args, using the last arg as
 * the seperator.
 *
 * **Examples:**
 *
 * Join strings:
 *
 * ```js
 * join('a', 'b', '-');
 *
 * //=> 'a-b'
 * ```
 * Join arrays:
 *
 * ```js
 * join(['a', 'b'], '_');
 *
 * //=> 'a_b'
 * ```
 * Mixed:
 *
 * ```js
 * join(['a', 'b'], ['c', 'd'], 'e', '|');
 *
 * //=> 'a|b|c|d|e'
 * ```
 *
 * @param {Array|String} `arguments`
 * @param {String} `separator`
 * @return {String}
 * @api public
 */

module.exports = function (/*args, separator*/) {
  var args = [].slice.call(arguments);
  var initial = _.flatten(_.initial(args));
  var sep = _.last(args);

  return [].concat.apply(initial).join(sep);
};
