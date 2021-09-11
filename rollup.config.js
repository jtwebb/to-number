import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './index.js',
  output: [
    {
      file: 'build/bundles/bundle.esm.js',
      format: 'esm',
      sourcemap: true,
      globals: { 'uuid': 'uuid' }
    },
    {
      file: 'build/bundles/bundle.esm.min.js',
      format: 'esm',
      plugins: [terser()],
      sourcemap: true,
      globals: { 'uuid': 'uuid' }
    },
    {
      file: 'build/bundles/bundle.umd.js',
      format: 'umd',
      name: 'is-numeric',
      sourcemap: true,
      globals: { 'uuid': 'uuid' }
    },
    {
      file: 'build/bundles/bundle.umd.min.js',
      format: 'umd',
      plugins: [terser()],
      name: 'is-numeric',
      sourcemap: true,
      globals: { 'uuid': 'uuid' }
    }
  ],
  plugins: [
    resolve({ extensions: ['.js'] }),
    babel({ babelHelpers: 'bundled', include: ['./index.js'], extensions: ['.js'], exclude: './node_modules/**' })
  ]
};
