mosule.exports = {
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
        "babel-plugin-styled-components",
        "@babel/plugin-proposal-class-properties",
    ],
};