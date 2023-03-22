import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'umd',
      name: 'appToolkit'
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
      name: 'appToolkit',
      sourcemap: false
    }
  ],
  plugins: [
    typescript({
      declarationDir: 'dist',
      tsconfig: 'tsconfig.json',
      tsconfigOverride: {
        include: ['src/**/*.ts'],
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
    commonjs()
  ]
}
