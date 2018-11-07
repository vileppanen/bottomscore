const test = require('ava')
const Optional = require('../src/optional')

test('#of - returns new Optional with provided value', t => {
  const instance = Optional.of('foo')
  t.is(instance.value, 'foo')
})
test('#of - throws error if provided value is null', t => {
  t.throws(() => {
    Optional.of()
  })
})
test('#isPresent - returns true if value is not null', t => {
  const instance = new Optional('foo')
  t.true(instance.isPresent())
})
test('#isPresent - returns false if value is null', t => {
  const instance = new Optional()
  t.false(instance.isPresent())
})
test('#ifPresent - executes defined function on non null value', t => {
  const instance = new Optional('foo')
  let foo = 'bar'
  instance.ifPresent(value => { foo = value })
  t.is(foo, 'foo')
})
test('#ifPresent - returns the value when chained with orElse without executing the orElse function if the value is non-null', t => {
  const instance = new Optional('foo')
  let foo = 'bar'
  const value = instance.ifPresent(value => { foo = value }).orElse(() => { foo = 'orElse' })
  t.is(foo, 'foo')
  t.is(value, 'foo')
})
test('#orElse - executes the function if value is null, and returns null', t => {
  const instance = new Optional()
  let foo = 'bar'
  const value = instance.ifPresent(value => { foo = 'wasPresent' }).orElse(() => { foo = 'notPresent' })
  t.is(foo, 'notPresent')
  t.is(value, null)
})
test('.value - returns the value', t => {
  const instance = new Optional('foo')
  let value = instance.value
  t.is(value, 'foo')

  value = 'bar'
  value = instance.ifPresent(val => val).value
  t.is(value, 'foo')
})
