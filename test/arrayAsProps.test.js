const test = require('ava')
const arrayAsProps = require('../src/arrayAsProps')

test('#arrayAsProps - returns object with indexed properties using values from array', t => {
  const array = [ 'value1', 'value2', 'value3' ]
  const result = arrayAsProps(array, 'foo')
  t.deepEqual(result, {
    'foo[0]': 'value1',
    'foo[1]': 'value2',
    'foo[2]': 'value3'
  })
})
test('#arrayAsProps - throws error if no property name prefix is provided', t => {
  const array = [ 'value1', 'value2', 'value3' ]
  t.throws(() => {
    arrayAsProps(array)
  })
})

test('#arrayAsProps - returns empty object if array is undefined', t => {
  const array = null
  const result = arrayAsProps(array, 'foo')
  t.deepEqual(result, {})
})
