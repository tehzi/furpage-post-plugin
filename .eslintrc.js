module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 10,
        sourceType: "module",
        jsx: true,
        useJSXTextNode: true,
        ecmaFeatures: {
            jsx: true,
        },
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
    },
    plugins: [
        "import",
        "@typescript-eslint",
        "redux-saga",
        "eslint-comments",
        "promise",
        "unicorn",
        "prettier",
    ],
    settings: {
        "import/parser": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
            "node": {
                "extensions": [".js",".jsx",".ts",".tsx"],
            },
            // typescript: {},
            // webpack: {
            //     config: {
            //         resolve: {
            //             alias: {},
            //             extensions: [".js", ".jsx", ".ts", ".tsx"],
            //         },
            //     },
            // },
        },
        react: {
            version: "detect", // React version, default to the latest React stable release
        },
    },
    env: {
        node: true,
        browser: true,
        es6: true,
        // TODO посмотреть js environment
    },
    extends: [
        "airbnb-typescript",
        // "airbnb-base",
        // "airbnb-typescript/base",
        "airbnb/hooks",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        // Плагин работает крайненестабильно иногда выдает 0 ошибок, иногда их количество
        // будет несколько тысяч, также он не оптимизирован для больших объемов кода
        // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-545849837
        // "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:redux-saga/recommended",
        "plugin:promise/recommended",
        "plugin:unicorn/recommended",
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
    ],
    rules: {
        "@typescript-eslint/quotes": ["error", "double"],
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/default-param-last": "off",
        "promise/always-return": "off",
        "promise/catch-or-return": ["error", {allowFinally: true}],
        "unicorn/filename-case": [
            "warn",
            {
                cases: {
                    pascalCase: true,
                    camelCase: true,
                },
            },
        ],
        "unicorn/regex-shorthand": "off",
        "unicorn/no-reduce": "off",
        "unicorn/better-regex": "warn",
        "unicorn/no-null": "off",
        "unicorn/prevent-abbreviations": "warn",
        "unicorn/prefer-spread": "off",
        "react/prop-types": "off",
        "react/static-property-placement": "off",
        "react/jsx-props-no-spreading": "off",
        "react/no-array-index-key": "off",
        "react/no-unescaped-entities": "error",
        "react-hooks/exhaustive-deps": "off",
        "react/require-default-props": "off",
        "no-empty": "off",
        "no-plusplus": "off",
        "no-console": ["error", {allow: ["warn", "error", "debug"]}],
        "no-param-reassign": "off",
        "no-return-assign": "off",
        "no-continue": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/label-has-associated-control": [
            "error",
            {
                depth: 3,
            },
        ],
        "jsx-a11y/tabindex-no-positive": "off",
        "jsx-a11y/no-noninteractive-tabindex": "off",
        "global-require": "off",
        "consistent-return": "off",
        "import/no-dynamic-require": "off",
        "import/no-mutable-exports": "off",
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": "off",
        "react/destructuring-assignment": "off",
        "react/no-unused-prop-types": "off",
        "unicorn/consistent-destructuring": "off",
        "no-debugger": "error",
        "no-useless-constructor": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never",
                "": "never",
            }
        ],
    },
    ignorePatterns: ["/node_modules/"],
};
