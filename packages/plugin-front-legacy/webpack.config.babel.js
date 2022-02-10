import CopyWebpackPlugin from "copy-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import FileManager from "filemanager-webpack-plugin";
import HtmlPlugin from "html-webpack-plugin";
import Dotenv from "dotenv-webpack";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import packageJson from "./package.json";

const isDevelopment = mode => mode === "development";

const config = {
    path: `${__dirname}/dist`,
    clean: {
        root: __dirname,
        verbose: true,
        dry: false,
    },
    html: {
        filename: "background.html",
        inject: false,
        template: `${__dirname}/src/html/background.html`,
    },
    popup: {
        filename: "popup.html",
        inject: false,
        template: `${__dirname}/src/html/popup.html`,
    },
};

export default (_, { mode }) => ({
    devtool: isDevelopment(mode) && "inline-source-map",
    entry: {
        "furpage-bundle": "./src/js/pages/bundle.tsx",
        background: "./src/js/pages/background.tsx",
        popup: "./src/js/pages/popup.tsx",
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
        plugins: [new TsconfigPathsPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /.*\.(ttf|eot|svg|css|woff|woff2|png|ico|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "./",
                            useRelativePath: false,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new Dotenv({
            path: `./.env.${isDevelopment ? "local" : "prod"}`,
            safe: true,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/json/**/*",
                    to: "[name][ext]",
                    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                    transform(content, path) {
                        if (path.match(/manifest\.json$/)) {
                            return content
                                .toString()
                                .replace("%%VERSION%%", packageJson.version);
                        }
                        return content;
                    },
                },
            ],
        }),
        new HtmlPlugin(config.html),
        new HtmlPlugin(config.popup),
        !isDevelopment(mode) &&
            new FileManager({
                onEnd: [
                    {
                        mkdir: ["./release"],
                    },
                    {
                        archive: [
                            {
                                source: config.path,
                                destination: `${__dirname}/release/${packageJson.name}-${packageJson.version}.zip`,
                            },
                        ],
                    },
                ],
            }),
    ].filter(Boolean),
});
