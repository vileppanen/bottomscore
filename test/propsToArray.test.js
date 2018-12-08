const test = require('ava')
const propsToArray = require('../src/propsToArray')

test('#propsToArray - bundles all matching properties\' values of an object into an array', t => {
  const obj = {
    'foo[0]': 'foo',
    'foo[1]': 'bar',
    'foo[A]': 'skip me',
    'bar': 'skip me too'
  }
  const result = propsToArray(obj, 'foo\\[[0-9]+\\]')
  t.deepEqual(result, ['foo', 'bar'])
})
test('#propsToArray - matches simple property name', t => {
  const obj = {
    'foo[0]': 'foo',
    'foo[1]': 'bar',
    'foo[A]': 'skip me',
    'bar': 'include me'
  }
  const result = propsToArray(obj, 'bar')
  t.deepEqual(result, ['include me'])
})
test('#propsToArray - throws error if no property matcher is provided', t => {
  const obj = {}
  t.throws(() => {
    propsToArray(obj)
  })
})
test('#propsToArray - throws error if invalid regexp is provided', t => {
  const obj = { foo: 'bar' }
  t.throws(() => {
    propsToArray(obj, 'foo[')
  })
})

test('#propsToArray - returns empty array if undefined is provided as object', t => {
  const obj = null
  const result = propsToArray(obj, 'foo\\[[0-9]+\\]')
  t.deepEqual(result, [])
})
