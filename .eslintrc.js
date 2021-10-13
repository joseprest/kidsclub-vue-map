module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'camelcase': 'off',
    'vue/require-v-for-key': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/no-async-in-computed-properties': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['eslint-plugin-html']
}
