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
   * Executes the specified function if the wrapped value is null
   * Returns the wrapped value if it's not null
   *
   * @example
   * // Console logs 'foo' and returns the wrapped value
   * const instance = new Optional('foo')
   * const value = instance.ifPresent(value => console.log(value)).orElse(() => console.log('bar'))
   *
   * // Console logs 'bar', and returns null
   * const instance = new Optional()
   * const value = instance.ifPresent(value => console.log('foo')).orElse(() => console.log('bar'))
   *
   * @param {*} fn function to be executed if the wrapped value is null, function takes no arguments
   * @returns {*} the wrapped value
   */
  orElse (fn) {
    if (this.valuePresent === false) {
      fn()
      return null
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
