import type { Extractor } from 'unocss'

// https://github.com/unocss/unocss/pull/2485
const extract_base64: Extractor = {
  name: 'unocss-preset-useful-extractor-includes-base64',
  order: 0,
  extract({ code }) {
    return [...new Set(code.split(/[\\:]?[\s'"`{}]|;(?!base64)+/g))]
  },
}

export const extractors = [extract_base64]
