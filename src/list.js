/**
 * Wrapper class for array manipulation.
 * Provides functional interfaces for handling arrays
 */
class List {
  constructor (fromArray = []) {
    this.array = [...fromArray]
    this.fromIndex = 0
    this.toIndex = this.array.length
    this.filters = []
  }
  /**
   * Generates a list of range by specified range
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
   * Executes all pending filters and returns result as new array
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
   * Defines a range starting index.
   * Range starting index is used in Stream functions
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
   * Defines a range ending index.
   * Range ending index is used in Stream functions
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
   * Adds filter function to pending filters
   * Does not execute the filter yet
   * @type filter
   * @param {fn} filterFn
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
