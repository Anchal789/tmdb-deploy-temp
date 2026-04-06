import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import";

export default [
	js.configs.recommended,
	pluginReact.configs.flat.recommended, // Recommended config comes FIRST
	{
		files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"], // Added TS/TSX just in case
		plugins: {
			import: pluginImport, // 2. Register the plugin
			"react-hooks": reactHooks,
		},
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.es2021,
			},
		},
		rules: {
			// --- THE FIX FOR YOUR ISSUE ---
			"no-undef": "error",
			"react/jsx-no-undef": ["error", { allowGlobals: false }],

			// --- Import/Path Validation ---
			"import/no-unresolved": "error",
			"import/named": "error",

			// --- React / Hooks ---
			"react/react-in-jsx-scope": "off",
			"react/jsx-use-react": "off",
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",

			// --- General Cleanup ---
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
				"typescript": {
			      "project": "./tsconfig.json"
			    }
			},
		},
	},
];
