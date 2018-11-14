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
test('#orElse - returns the default value if wrapped value is null', t => {
  const instance = new Optional()
  let foo = 'bar'
  const value = instance.ifPresent(value => { foo = 'wasPresent' }).orElse('notPresent')
  t.is(foo, 'bar')
  t.is(value, 'notPresent')
})
test('#orElse - returns the wrapped value if it is not null', t => {
  const instance = new Optional('foo')
  let foo = 'bar'
  const value = instance.ifPresent(value => { foo = 'wasPresent' }).orElse('notPresent')
  t.is(foo, 'wasPresent')
  t.is(value, 'foo')
})
test('#orElseThrow - throws specified error if wrapped value is null', t => {
  const instance = new Optional()
  t.throws(() => {
    instance.ifPresent(value => { console.log(value) }).orElseThrow(new Error('value was null'))
  })
})
test('#orElseThrow - returns wrapped value if it is present', t => {
  const instance = new Optional({ foo: { bar: 'zoo' } })
  const value = instance.if(val => val.foo.bar).orElseThrow(new Error('value was null'))
  t.is(value, 'zoo')
})
test('.value - returns the value', t => {
  const instance = new Optional('foo')
  let value = instance.value
  t.is(value, 'foo')
  value = 'bar'
  value = instance.ifPresent(val => val).value
  t.is(value, 'foo')
})
test('#if - returns the result of argument function', t => {
  const instance = new Optional({ foo: { bar: { zoo: 'jar' } } })
  const value = instance.if(val => val.foo.bar.zoo).orElse('defaultval')
  t.is(value, 'jar')
})
test('#if - returns the default value if expression results in null exception', t => {
  const instance = new Optional({ foo: 'bar' })
  const value = instance.if(val => val.foo.bar.zoo).orElse('defaultval')
  t.is(value, 'defaultval')
})
test('#if - can be chained with ifPresent', t => {
  const instance = new Optional({ foo: 'bar' })
  let wrappedValue = ''
  const value = instance.if(val => val.foo).ifPresent(val => { wrappedValue = val }).orElse('defaultval')
  t.is(wrappedValue, 'bar')
  t.is(value, 'bar')
})
