module.exports = {
	"extends": "eslint:recommended",
	"parser": "babel-eslint",
	"parserOptions": {
		"sourceType": "module",
		"ecmaFeatures": {
			"ecmascript": 7,
			"jsx": true
		}
	},
	"plugins": [
		"react"
	],
	"rules": {
		"arrow-parens": ["error", "as-needed"],
		"no-undef": 0,
		"no-unused-vars": ["error", { "argsIgnorePattern": "React" }],
		"react/jsx-uses-react": 1,
		"react/jsx-uses-vars": 1,
		"react/no-unused-prop-types": 2
	}
};