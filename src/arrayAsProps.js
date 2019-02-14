/**
 * Returns object having each value of the provided array as indexed property, using specified property name prefix.
 *
 * By default, indexes the properties by order number.
 *
 * If indexPropertyName argument is provided, uses corresponding property value as index value.
 *
 * Duplicate properties are bundled into an array as value.
 *
 * @example
 * // result === { 'propPrefix[0]': 'foo', 'propPrefix[1]': 'bar' }
 * const result = arrayAsProps(['foo', 'bar'], 'propPrefix')
 *
 * @example
 * // result === { 'propPrefix[wilbur]': { foo: 'object', bar: 'wilbur' }, 'propPrefix[smith]': { foo: 'anotherObject', bar: 'smith' } }
 * const result = arrayAsProps([{ foo: 'object', bar: 'wilbur' }, { foo: 'anotherObject', bar: 'smith' }], 'propPrefix', 'bar')
 *
 * @example
 * // result === { 'propPrefix[wilbur]': [{ foo: 'object', bar: 'wilbur' }, { foo: 'anotherObject', bar: 'wilbur' }] }
 * const result = arrayAsProps([{ foo: 'object', bar: 'wilbur' }, { foo: 'anotherObject', bar: 'wilbur' }], 'propPrefix', 'bar')
 *
 * @param {*} array Array to convert to object properties
 * @param {string} propPrefix Property name prefix to use
 * @param {string} indexPropertyName Specified property which value will be used as index
 * @returns {object} Array presented as object with indexed properties
 */
const arrayAsProps = (array, propPrefix, indexPropertyName) => {
  if (!propPrefix) {
    throw new Error('Property name prefix not provided')
  }
  if (!array) {
    return {}
  }
  if (indexPropertyName) {
    return byIndexPropName(array, propPrefix, indexPropertyName)
  }
  return byOrderNumber(array, propPrefix)
}
const byIndexPropName = (array, propPrefix, indexPropertyName) => {
  return array && array
    .reduce((prevVal, curVal) => {
      const indexProperty = `${propPrefix}[${curVal[indexPropertyName]}]`

      if (prevVal[indexProperty]) {
        return {
          ...prevVal,
          [indexProperty]: [ prevVal[indexProperty], curVal ]
        }
      }
      return {
        ...prevVal,
        [indexProperty]: curVal
      }
    }, {})
}
const byOrderNumber = (array, propPrefix) => {
  return array && array
    .reduce((prevVal, curVal, curIndex) => {
      return {
        ...prevVal,
        [`${propPrefix}[${curIndex}]`]: curVal
      }
    }, {})
}

module.exports = arrayAsProps
