const coreJsVersion = require("core-js/package.json").version;

module.exports = (api) => {
    const mode = process.env.NODE_ENV ?? "production";

    api.cache.using(() => mode);

    return {
        presets: [
            [
                "@babel/preset-env",
                {
                    targets: {node: "16.13"},
                    useBuiltIns: "usage",
                    corejs: coreJsVersion,
                    loose: true,
                    modules: false,
                },
            ],
            "@babel/preset-react",
            "@babel/preset-typescript",
        ],
        plugins: [
            // "decorator-metadata-typescript",
            "babel-plugin-transform-typescript-metadata",
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            ["@babel/plugin-proposal-class-properties", { "loose": true }],
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-export-namespace-from",
            "@babel/plugin-proposal-throw-expressions",
            "@babel/proposal-object-rest-spread",
        ].filter(Boolean),
    };
};
