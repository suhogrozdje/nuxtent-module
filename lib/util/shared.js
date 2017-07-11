const { join } = require('path')

/**
 * Serialize permalink to file key.
 *
 * @example
 *  static:  /2017/slug/ -> content/2017.slug.json
 *  dynamic: /2017/slug/ -> 2017/slug/
 */
export function serialize (permalink, options) {
  const removeFirstSlash = /^\//g
  const removeAllButFirstSlash = /(?!^\/)(\/)/g

  const fileName = options.isStatic
    ? permalink.replace(removeAllButFirstSlash, '.')
    : permalink.replace(removeFirstSlash, '')

  return options.isStatic
    ? join(options.srcDir + '/', fileName) + '.json'
    : fileName
}