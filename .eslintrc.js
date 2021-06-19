module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
        'jest/globals': true,
        jest: true
    },
    globals: {
        MyGlobal: true
    },
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'prettier/react',
    ],
    plugins: [
        'react-hooks',
    ],
    rules: {
        'semi': [2, 'never'],
        // 'max-len': 'off',
        // 'no-tabs': 'off',
        // 'comma-dangle': 'off',
        // indent: 'off',
        'quotes': [2, 'single', 'avoid-escape'],
    },
};