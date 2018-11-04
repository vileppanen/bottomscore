const test = require('ava')
const List = require('../src/list')

test('#numberRange - generates a list of numbers by specified range', t => {
  const instance = List.numberRange(0, 5)
  const asArray = instance.collect()
  t.deepEqual(asArray, [0, 1, 2, 3, 4, 5])
})
test('#numberRange - throws error if from argument is not of type "number"', t => {
  t.throws(() => {
    List.numberRange('0', 5)
  })
})
test('#numberRange - throws error if to argument is not of type "number"', t => {
  t.throws(() => {
    List.numberRange(0, null)
  })
})
test('#filter - adds specified filter to pending filters', t => {
  const instance = new List()
  instance
    .filter(item => item !== null)
  t.pass()
})
test('#filter - throws error if passed argumen is not a function', t => {
  const instance = new List()
  t.throws(() => {
    instance
      .filter('foobar')
  })
})
test('#collect - returns array value from the instance', t => {
  const arrayParam = [ { foo: 'bar' }, { bar: 'foo' } ]
  const instance = new List(arrayParam)
  t.deepEqual(instance.collect(), arrayParam)
})
test('#collect - applies pending filters and returns filtered array value from the instance', t => {
  const arrayParam = [ { foo: 'bar', bar: 'foo' }, { foo: 'foo', bar: 'bar' }, { foo: 'foo', bar: 'zoo' } ]
  const instance = new List(arrayParam)
  instance
    .filter(item => item.foo === 'foo')
    .filter(item => item.bar === 'bar')
  t.deepEqual(instance.collect(), [ { foo: 'foo', bar: 'bar' } ])
})

test('#collect - applies pending filters to specified range and returns filtered array value from the instance', t => {
  const arrayParam = [ 'foo', 'bar', 'zoo', 'far' ]
  const instance = new List(arrayParam)
  instance
    .from(1)
    .to(2)
    .filter(item => item === 'far')
  t.deepEqual(instance.collect(), [])
})
test('#collect - does not re-apply filters applied on previous collect', t => {
  const arrayParam = [ { foo: 'bar', bar: 'foo' }, { foo: 'foo', bar: 'bar' }, { foo: 'foo', bar: 'zoo' } ]
  const instance = new List(arrayParam)
  instance
    .filter(item => item.foo === 'foo')
    .filter(item => item.bar === 'bar')
  instance.collect()
  const secondCollection = instance.collect()
  t.deepEqual(secondCollection, arrayParam)
})
test('#from - throws error if passed argument is not a number', t => {
  const instance = new List([1, 2])
  t.throws(() => {
    instance.from('0')
  })
})
test('#to - throws error if passed argument is not a number', t => {
  const instance = new List([1, 2])
  t.throws(() => {
    instance.to('0')
  })
})
