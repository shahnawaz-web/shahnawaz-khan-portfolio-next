import { FlatCompat } from '@eslint/eslintrc'
const compat = new FlatCompat({ baseDirectory: import.meta.dirname })
export default [
  ...compat.extends('next/core-web-vitals'),
  // The original markup uses plain <img> with fixed Tailwind sizing; kept to preserve appearance exactly.
  { rules: { '@next/next/no-img-element': 'off' } },
  { ignores: ['scripts/migration/**', '.next/**'] },
]
