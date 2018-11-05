/**
 * Wrapper for numbers.
 * Defines boundaries for a number which it cannot cross (= always keeps the number between specified minimum and maximum values).
 * @example
 * const passedInValue = ContainedNumber({ value: 2, min: 1, max: 3}) // 2
 * const minimumValue = ContainedNumber({ value: 1, min: 2, max: 3}) // 2
 * const maximumValue = ContainedNumber({ value: 3, min: 1, max: 2}) // 2
 * @param {object} args { value, min, max } All properties need to be numbers
 * @returns {number} the passed in value, if it is in range. If passed in value is less than specified minimum, returns the minimum value. If passed in value is greater than the specified maximum value, returns the maximum value.
 */
const ContainedNumber = (args) => {
  if (typeof args.value !== 'number' || typeof args.min !== 'number' || typeof args.max !== 'number') {
    throw new Error('Provided arguments must be numbers')
  }
  if (args.value < args.min) {
    return args.min
  } else if (args.value > args.max) {
    return args.max
  } else {
    return args.value
  }
}

module.exports = ContainedNumber
