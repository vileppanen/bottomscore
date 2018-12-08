/**
 * Bundles all matching property values from an object into an array
 *
 * @example
 * // result === ['foo', 'bar']
 * const result = propstToArray({ 'foo[0]': 'foo', 'foo[1]': 'bar' }, 'foo\\[[0-9]+\\]')
 *
 * @param {object} obj Target object
 * @param {string} propertyNameMatcher Regexp clause to use for matching property names
 * @returns {array} Matching property values as array
 */
const propsToArray = (obj, propertyNameMatcher) => {
  if (!propertyNameMatcher) {
    throw new Error('Property name matcher not provided')
  }
  if (!obj) {
    return []
  }
  const matchRegexp = new RegExp(propertyNameMatcher)
  return Object.keys(obj)
    .map(propertyName => {
      if (matchRegexp.test(propertyName)) {
        return obj[propertyName]
      }
    })
    .filter(nonNull => nonNull)
}

module.exports = propsToArray
