/**
 * Wrapper class for handling values that may be null or undefined
 *
 * Mimics functionality of Java 8 Optionals
 *
 */
class Optional {
  constructor (value) {
    /**
     * The wrapped value
     */
    this.value = value
  }

  /**
 * Returns new Optional with value expected to be not null or undefined
 *
 * Throws error if null or undefined is passed as argument
 *
 * @param {*} value Non-null value to be wrapped
 */
  static of (value) {
    if (!value) {
      throw new Error('Non-null value expected')
    }
    return new Optional(value)
  }
  /**
   * Executes the specified function, if value is not null or undefined.
   *
   * Can be chained with .orElse(() => somefunctionbody) to handle cases where value is null or undefined
   *
   * @example
   * // Console logs 'foo'
   * const instance = new Optional('foo')
   * instance.ifPresent(value => console.log(value))
   *
   * @param {function} fn function to be executed, gets wrapped value as an argument
   */
  ifPresent (fn) {
    if (this.value) {
      fn(this.value)
      this.valuePresent = true
    } else {
      this.valuePresent = false
    }
    return this
  }

  /**
   * Replaces the wrapped value with the result of the expression function
   * Handy if need to access complex object property, and there might be nulls along the chain
   *
   * @example
   * // value === 'jar'
   * const instance = new Optional({ foo: { bar: { zoo: 'jar' } } })
   * const value = instance.if(val => val.foo.bar.zoo).orElse('defaultval')
   *
   * // value === 'defaultval'
   * const instance = new Optional({ foo: 'bar' })
   * const value = instance.if(val => val.foo.bar.zoo).orElse('defaultval')
   *
   * @param {fn} expression Gets the wrapped value as argument, and replaces the wrapped value with result
   */
  if (expression) {
    try {
      const resultValue = expression(this.value)
      this.valuePresent = true
      this.value = resultValue
      return this
    } catch (err) {
      this.valuePresent = false
      return this
    }
  }
  /**
   * Returns the specified value if wrapped value is not present.
   * Returns the wrapped value if it's present.
   *
   * @example
   * // value === 'foo'
   * const value = new Optional('foo').orElse('bar')
   *
   * // value === 'bar'
   * const value = new Optional().orElse('bar')
   *
   * @param {*} defaultValue value to be returned, if the wrapped value is null
   * @returns {*} the wrapped value if it is not null, otherwise returns the defaultValue
   */
  orElse (defaultValue) {
    if (this.valuePresent === false) {
      return defaultValue
    } else {
      return this.value
    }
  }
  /**
   * Throws specified error if wrapped value is not present.
   * Returns the wrapped value if it's present.
   *
   * @example
   * // throws error with message 'fail'
   * const value = new Optional().ifPresent(value => { console.log('was present') }).orElseThrow(new Error('fail'))
   *
   * // value === 'bar'
   * const value = new Optional('bar').orElseThrow(new Error('fail'))
   *
   * @param {Error} error error to be thrown, if the wrapped value is null
   * @returns {*} the wrapped value if it is not null
   */
  orElseThrow (error) {
    if (this.valuePresent === false) {
      throw error
    } else {
      return this.value
    }
  }
  /**
   * Returns boolean whether the wrapped value is null or not
   *
   * @returns {boolean} true if wrapped value is not null or undefined
   */
  isPresent () {
    return !!this.value
  }
}

module.exports = Optional
