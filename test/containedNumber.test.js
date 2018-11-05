const test = require('ava')
const ContainedNumber = require('../src/containedNumber')

test('returns the specified value if in defined limits', t => {
  const number = ContainedNumber({ value: 3, min: 1, max: 5 })
  t.is(number, 3)
})
test('returns the min value if value is below limits', t => {
  const number = ContainedNumber({ value: 0, min: 1, max: 5 })
  t.is(number, 1)
})
test('returns the max value if value is over limits', t => {
  const number = ContainedNumber({ value: 6, min: 1, max: 5 })
  t.is(number, 5)
})
test('throws error if value is not a number', t => {
  t.throws(() => {
    ContainedNumber({ value: '6', min: 1, max: 5 })
  })
})
test('throws error if min limit is not a number', t => {
  t.throws(() => {
    ContainedNumber({ value: 6, min: '1', max: 5 })
  })
})
test('throws error if max limit is not a number', t => {
  t.throws(() => {
    ContainedNumber({ value: 6, min: 1, max: '5' })
  })
})
