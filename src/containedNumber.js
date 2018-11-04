/**
 * Wrapper for numbers
 * Defines boundaries for a number which it cannot cross (= always keeps the number between specified minimum and maximum values)
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
