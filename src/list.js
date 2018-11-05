/**
 * Wrapper class for array manipulation
 *
 * Provides functional interface for handling arrays
 */
class List {
  /**
   * Constructor, that takes in an array to be wrapped
   * @param {array} fromArray
   */
  constructor (fromArray = []) {
    this.array = [...fromArray]
    this.fromIndex = 0
    this.toIndex = this.array.length
    this.filters = []
  }
  /**
   * Generates a list of numbers from specified range
   * @param {number} from Starting from number
   * @param {number} to Ending to number
   */
  static numberRange (from, to) {
    if (typeof from !== 'number' || typeof to !== 'number') {
      throw new Error('Generate function requires both arguments to be Number')
    }
    let array = []
    for (let i = from; i <= to; i++) {
      array.push(i)
    }
    return new List(array)
  }
  /**
   * Executes all pending filters and returns filtered results as new array
   * @type collector
   * @returns {array} Filtered list as array
   */
  collect () {
    const targetRange = this.array.slice(this.fromIndex, this.toIndex)
    if (this.filters.length > 0) {
      let filteredArray = [...targetRange]
      this.filters.forEach(filterFn => {
        filteredArray = filteredArray.filter(filterFn)
      })
      this.filters = []
      return filteredArray
    }
    return targetRange
  }
  /**
   * Defines a range starting index
   *
   * Range starting index is used in collector functions, where it narrows down the collecting to a subset of underlying array
   * @example
   * // Collects all items starting from index 1, from underlying array
   * list.from(1).collect()
   * @type specifier
   * @param {number} index
   */
  from (index) {
    if (typeof index !== 'number') {
      throw new Error('Argument must be number')
    }
    this.fromIndex = index
    return this
  }
  /**
   * Defines a range ending index
   *
   * Range ending index is used in collector functions, where it narrows down the collecting to a subset of underlying array
   * @example
   * // Collects all items from 0 to 2, from underlying array
   * list.to(2).collect()
   * @type specifier
   * @param {number} index
   */
  to (index) {
    if (typeof index !== 'number') {
      throw new Error('Argument must be number')
    }
    this.toIndex = index
    return this
  }
  /**
   * Adds filter function to pending filters, but does not execute the filter yet
   *
   * Can be chained
   * @example
   * // Includes items with foo === 'foo', and then out of that subset, filters out everything except items with bar === 'bar'
   * list.filter(item => item.foo === 'foo').filter(item => item.bar === 'bar').collect()
   * @type filter
   * @param {fn} filterFn Gets passed in single element from underlying array, and needs to return boolean specifying if the element should be excluded from results
   */
  filter (filterFn) {
    if (typeof filterFn !== 'function') {
      throw new Error('Argument is not a function')
    }
    this.filters.push(filterFn)
    return this
  }
}

module.exports = List
