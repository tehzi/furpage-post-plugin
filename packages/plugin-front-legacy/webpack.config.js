import CopyWebpackPlugin from "copy-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HappyPack from "happypack";
import { compact } from "lodash-es";
import FileManager from "filemanager-webpack-plugin";
import HtmlPlugin from "html-webpack-plugin";
import Dotenv from "dotenv-webpack";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const packageJson = JSON.parse(await readFile("./package.json"));
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default (environment, { mode }) => ({
    devtool: isDevelopment(mode) && "inline-source-map",
    // optimization: {
    //     namedModules: true, // NamedModulesPlugin()
    //     noEmitOnErrors: true, // NoEmitOnErrorsPlugin
    // },
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
            // {
            //     test: /\.[jt]sx?/,
            //     exclude: /node_modules/,
            //     loader: "happypack/loader?id=ts",
            // },
            // {
            //     test: /.*\.(ttf|eot|svg|css|woff|woff2|png|ico|jpg|jpeg|gif)$/i,
            //     use: [
            //         {
            //             loader: "file-loader",
            //             options: {
            //                 name: "[name].[ext]",
            //                 outputPath: "./",
            //                 useRelativePath: false,
            //             },
            //         },
            //     ],
            // },
        ],
    },
    plugins: compact([
        // new CleanWebpackPlugin({}),
        // new Dotenv({
        //     path: `./.env.${isDevelopment ? "local" : "prod"}`,
        //     safe: true,
        // }),
        // new CopyWebpackPlugin([
        //     {
        //         from: "./src/json/**/*",
        //         to: "./",
        //         flatten: true,
        //         // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        //         transform(content, path) {
        //             if (path.match(/manifest\.json$/)) {
        //                 return content
        //                     .toString()
        //                     .replace("%%VERSION%%", packageJson.version);
        //             }
        //             return content;
        //         },
        //     },
        // ]),
        // new HappyPack({
        //     id: "ts",
        //     threads: 4,
        //     loaders: compact([
        //         {
        //             path: "babel-loader",
        //             exclude: [/node_modules/],
        //         },
        //         !isDevelopment(mode) && "eslint-loader",
        //     ]),
        // }),
        // new HtmlPlugin(config.html),
        // new HtmlPlugin(config.popup),
        // !isDevelopment(mode) &&
        //     new FileManager({
        //         onEnd: [
        //             {
        //                 mkdir: ["./release"],
        //             },
        //             {
        //                 archive: [
        //                     {
        //                         source: config.path,
        //                         destination: `${__dirname}/release/${packageJson.name}-${packageJson.version}.zip`,
        //                     },
        //                 ],
        //             },
        //         ],
        //     }),
    ]),
});
