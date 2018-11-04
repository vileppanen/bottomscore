import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'

const plugins = [
  resolve({
    jsnext: true,
    main: true
  }),
  commonjs()
]

export default [
  // browser-friendly UMD build
  {
    input: 'index.js',
    output: {
      name: 'bottomscore',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: plugins
  },
  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: 'index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: plugins
  }
]
