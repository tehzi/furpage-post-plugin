const coreJsVersion = require("core-js/package.json").version;

module.exports = (api) => {
    const mode = process.env.NODE_ENV ?? "production";

    api.cache.using(() => mode);

    return {
        presets: [
            [
                "@babel/preset-env",
                {
                    useBuiltIns: "usage",
                    corejs: coreJsVersion,
                },
            ],
            "@babel/preset-react",
            "@babel/preset-typescript",
        ],
        plugins: [
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-proposal-export-namespace-from",
            "@babel/plugin-proposal-throw-expressions",
            "@babel/proposal-object-rest-spread",
            "babel-plugin-styled-components",
            mode !== "production" && "react-refresh/babel",
        ].filter(Boolean),
    };
};
