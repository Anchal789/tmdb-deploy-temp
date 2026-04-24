import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

export default [
	js.configs.recommended,
	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				ecmaFeatures: { jsx: true },
			},
		},
		plugins: {
			"@typescript-eslint": tsPlugin,
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
		},
	},

	pluginReact.configs.flat.recommended,

	{
		files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
		plugins: {
			import: pluginImport,
			"react-hooks": reactHooks,
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.es2021,
			},
		},
		rules: {
			"no-undef": "error",
			"react/jsx-no-undef": ["error", { allowGlobals: false }],

			"import/no-unresolved": "error",
			"import/named": "error",

			"react/react-in-jsx-scope": "off",
			"react/jsx-use-react": "off",
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",

			"no-unused-vars": [
				"warn",
				{
					vars: "all",
					args: "after-used",
					ignoreRestSiblings: true,
				},
			],
			"prefer-const": "error",
			"no-console": "warn",
			eqeqeq: ["error", "always"],
			"react/prop-types": "off",
		},
		settings: {
			"import/resolver": {
				node: {
					extensions: [".js", ".jsx", ".ts", ".tsx"],
				},
				typescript: {
					project: "./tsconfig.json",
				},
			},
		},
	},
];
