/**
 * Returns object having each value of the provided array as indexed property, using specified property name prefix
 *
 * @example
 * // result === { 'propPrefix[0]': 'foo', 'propPrefix[1]': 'bar' }
 * const result = arrayAsProps(['foo', 'bar'], 'propPrefix')
 *
 * @param {*} array Array to convert to object properties
 * @param {*} propPrefix Property name prefix to use
 * @returns {object} Array presented as object with indexed properties
 */
const arrayAsProps = (array, propPrefix) => {
  if (!propPrefix) {
    throw new Error('Property name prefix not provided')
  }
  const asProps = {}
  array && array.forEach((item, index) => {
    asProps[`${propPrefix}[${index}]`] = item
  })
  return asProps
}

module.exports = arrayAsProps
