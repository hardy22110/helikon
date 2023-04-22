import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { readFileSync } from 'fs'
import replace from '@rollup/plugin-replace'

// Read package.json file
const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'))

// build banner
const banner = `
/**
 * @license
 * author: ${pkg.author}
 * ${pkg.name} v${pkg.version}
 * Released under the ${pkg.license} license.
 */
`

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'umd',
      name: 'helikon',
      banner
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
      name: 'helikon',
      banner
    }
  ],
  plugins: [
    typescript({
      exclude: ['**/*.test.ts']
    }),
    babel({
      extensions: ['.js', '.ts'],
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-typescript']
    }),
    terser(),
    resolve(),
    commonjs(),
    replace({
      preventAssignment: true,
      __VERSION__: JSON.stringify(pkg.version)
    })
  ]
}
