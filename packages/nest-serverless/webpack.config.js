/* eslint-disable unicorn/prefer-module */
const path = require("path");
const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: slsw.lib.entries,
    target: "node",
    devtool: "source-map",
    mode: slsw.lib.webpack.isLocal ? "development" : "production",
    optimization: {
        minimize: false,
    },
    performance: {
        hints: false,
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
    },
    output: {
        filename: "./[name].js",
        path: path.resolve(__dirname, ".webpack"),
        // chunkFormat: "commonjs",
        libraryTarget: "commonjs",
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
};
