module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		browser: true,
		node: true,
		commonjs: true,
		jest: true,
	},
	globals: {
		MyGlobal: true,
	},
	extends: [
		'airbnb',
		'eslint:recommended',
	],
	plugins: ['react', 'jest', 'react-hooks'],
	rules: {
		semi: [2, 'never'],
		indent: [2, 'tab'],
		quotes: [2, 'single', 'avoid-escape'],

		'max-len': 'off',
		'no-tabs': 'off',
		'comma-dangle': 'off',

		'space-before-blocks': [2],
		'space-before-function-paren': [2, 'never'],
		'space-in-parens': [2, 'never'],
		'space-infix-ops': [2],

		'react/jsx-indent': [0, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],

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
					pattern: 'widgets/**',
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

	},
}
