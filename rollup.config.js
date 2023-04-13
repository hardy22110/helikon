import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import { readFileSync } from 'fs'

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
      declarationDir: 'dist',
      tsconfig: 'tsconfig.json',
      tsconfigOverride: {
        include: ['src/index.ts'],
        exclude: ['tests/**/*.ts']
      }
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
    json()
  ]
}
