const appRoot = require('app-root-path')

module.exports = {
	files: ['*.ts', '*.tsx'],
	plugins: ['@typescript-eslint', 'react', 'jest', 'unused-imports'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['tsconfig.json'],
		tsconfigRootDir: appRoot
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx']
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true
			}
		}
	},
	env: {
		jest: true
	},
	extends: ['airbnb', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
	rules: {
		// typescript
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/restrict-plus-operands': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/unbound-method': 'off',
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/no-misused-promises': 'off', // drain performance
		'@typescript-eslint/await-thenable': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/prefer-regexp-exec': 'off',
		'@typescript-eslint/no-unused-expressions': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
		'@typescript-eslint/require-await': 'off',

		semi: [2, 'never'],
		indent: [2, 'tab'],
		quotes: [2, 'single', 'avoid-escape'],

		'max-len': 'off',
		'no-tabs': 'off',
		'comma-dangle': 'off',

		'space-before-blocks': [2],
		'space-in-parens': [2, 'never'],
		'space-infix-ops': [2],

		// react

		'react/jsx-uses-react': 'off', // React 17
		'react/react-in-jsx-scope': 'off', // React 17
		'react/jsx-one-expression-per-line': 'off', // disable airbnb

		'react/prop-types': [0],
		'react/require-default-props': [0],
		'react/forbid-prop-types': [0],
		'react/default-props-match-prop-types': [0],
		'react/prefer-stateless-function': [1],
		'react/jsx-no-target-blank': [1],
		'react/jsx-no-bind': [1],
		'react/no-did-mount-set-state': [1],
		'react/no-did-update-set-state': [1],
		'react/no-multi-comp': [0],
		'react/no-unescaped-entities': [1],
		'react/no-array-index-key': [0],
		'react/jsx-key': [2],
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.js', '.jsx']
			}
		],
		'react/jsx-indent': [0, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-closing-tag-location': [0],
		'react/no-unused-state': [1],
		'react/no-unused-prop-types': [1],
		'react/sort-comp': [
			2,
			{
				order: [
					'static-variables',
					'static-methods',
					'state',
					'instance-variables',
					'/.*(formState|FormState).*/',
					'init',
					'lifecycle',
					'/^build.+$/',
					'/^on.+$/',
					'/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
					'everything-else',
					'/^render.+$/',
					'render'
				]
			}
		],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'off',
		'react/jsx-curly-brace-presence': 'off',
		'react/jsx-no-duplicate-props': [1, { ignoreCase: false }],

		// import
		'import/no-extraneous-dependencies': [0],
		'import/first': [0],
		'import/no-unresolved': [0],
		'import/extensions': [0],
		'import/prefer-default-export': [0],
		'import/no-mutable-exports': [0],
		'import/no-dynamic-require': [0],
		'import/order': ['error', {
			pathGroups: [
				{
					pattern: 'react',
					group: 'external',
					position: 'before'
				},
				{
					pattern: 'react-native',
					group: 'external',
					position: 'before'
				},
				{
					pattern: 'types/**',
					group: 'internal',
					position: 'after'
				},
				{
					pattern: 'utils/**',
					group: 'internal',
					position: 'after'
				},
				{
					pattern: 'pages/**',
					group: 'internal',
					position: 'after'
				},
				{
					pattern: 'components/**',
					group: 'internal',
					position: 'after'
				},
				{
					pattern: 'assets/**',
					group: 'internal',
					position: 'after'
				},
				{
					pattern: 'styles/**',
					group: 'internal',
					position: 'after'
				}
			],
			groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
			'newlines-between': 'always',
			alphabetize: {
				order: 'asc',
				caseInsensitive: true
			},
			pathGroupsExcludedImportTypes: ['react'],
		}],

		// jsx-a11y
		'jsx-a11y/anchor-is-valid': [0],
		'jsx-a11y/click-events-have-key-events': [0],
		'jsx-a11y/no-static-element-interactions': [0],
		'jsx-a11y/alt-text': [1],
		'jsx-a11y/anchor-has-content': [0],
		'jsx-a11y/iframe-has-title': [1],
		'jsx-a11y/no-noninteractive-element-interactions': [0],
		'jsx-a11y/label-has-associated-control': [1],
		'jsx-a11y/label-has-for': [0],
		'jsx-a11y/no-autofocus': [0],

		// other
		'no-unused-vars': [2, { args: 'none' }],
		'dot-notation': [0],
		'space-before-function-paren': [0],
		'no-underscore-dangle': [0],
		'no-param-reassign': [0],
		'global-require': [0],
		'no-confusing-arrow': [0],
		'no-shadow': [0],
		'consistent-return': [0],
		'prefer-destructuring': [0],
		'no-use-before-define': [0],
		'no-return-assign': [0],
		'no-console': [2],
		'object-shorthand': [0],
		'func-names': [0],
		'no-restricted-properties': [1],
		'no-plusplus': [0],
		'no-mixed-operators': [0],
		'class-methods-use-this': [0],
		'default-case': [0],
		'no-lone-blocks': [0],
		'no-unused-expressions': [0],
		'no-restricted-globals': [0],
		'no-restricted-syntax': [0],
		'function-paren-newline': [0],
		'arrow-parens': [2, 'as-needed'],
		'one-var': [0],
		'prefer-promise-reject-errors': [0],
		'no-sequences': [0],
		'no-nested-ternary': [0],
		'array-callback-return': [0],
		'no-empty-function': [0],
		'no-continue': [0],
		'guard-for-in': [0],
		'no-new': [0],
		'no-buffer-constructor': [0],
		'no-proto': [0],
		'no-new-func': [0],
		'operator-assignment': [0],
		'object-curly-newline': [0],
		'quote-props': [0],
		'no-alert': [0],
		'no-mixed-spaces-and-tabs': [0],
		'wrap-iife': [0],
		'semi-style': [0],
		'no-extra-semi': [0],
		'generator-star-spacing': [0],

		// all block must have {..}
		'curly': [2],
		'dot-location': [2, 'property'],
		'eqeqeq': [1, 'smart'],
		'no-eval': [2],
		'no-extend-native': [2],
		'no-implied-eval': [2],
		'no-multi-spaces': [1],
		'radix': [2],
		'strict': [2, 'global'],
		'no-useless-escape': [1],

		// style
		'array-bracket-spacing': [2],
		'block-spacing': [2, 'never'],
		'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
		'camelcase': [2, { 'properties': 'never' }],
		'comma-spacing': [2, { 'before': false, 'after': true }],
		'comma-style': [2, 'last'],
		'computed-property-spacing': [2, 'never'],
		'eol-last': [2],
		'key-spacing': [2, { 'beforeColon': false, 'afterColon': true, 'mode': 'minimum' }],
		'new-cap': [2, { 'capIsNewExceptionPattern': '^Immutable.\\w' }],
		'lines-around-comment': [2],
		'no-lonely-if': [2],
		'no-trailing-spaces': [2, { 'skipBlankLines': true }],
		'keyword-spacing': [2, {
			'overrides': {
				'if': { 'before': true, 'after': false },
				'else': { 'before': true, 'after': true },
				'try': { 'before': false, 'after': true },
				'catch': { 'before': true, 'after': false },
				'for': { 'after': false },
				'switch': { 'after': false },
				'while': { 'after': false },
				'function': { 'before': false, 'after': false }
			}
		}],
		'no-unmodified-loop-condition': [2],
		'no-whitespace-before-property': [2],
		'no-else-return': [1],

		// es6
		'arrow-spacing': [2],
		'no-class-assign': [2],
		'no-dupe-class-members': [2],
		'no-var': [1],
		'prefer-arrow-callback': [1, { 'allowNamedFunctions': true }],
		'prefer-spread': [2],
		'prefer-rest-params': [2],
		'prefer-const': [1, { 'destructuring': 'any', 'ignoreReadBeforeAssign': false }],
		'no-cond-assign': [1],
		'no-new-symbol': [2],
		'no-useless-constructor': [1],
		'no-duplicate-imports': [1],
		'object-curly-spacing': [1, 'always', { 'arraysInObjects': false }],
	}
}
