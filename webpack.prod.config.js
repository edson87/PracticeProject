const webpack = require('webpack');
const path = require('path');
const colors = require('colors');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
      'ns-website': path.resolve(__dirname, "./src/index.tsx")
    },

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "public/"),
		publicPath: "/"
    },

    module: {

        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                include: [
                    path.resolve(__dirname, "src"),
                    path.resolve(__dirname, "examples")
                ]
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?importLoaders=1'
                ],
                include: [
                    path.resolve(__dirname, "src"),
                    path.resolve(__dirname, "examples")
                ]
            }
        ],
    },

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    performance: {
        hints: "warning",
        maxAssetSize: 2000000,
        maxEntrypointSize: 4000000,
        assetFilter: function(assetFilename) {
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    },

    devtool: "cheap-module-source-map",
    stats: "verbose",

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: 'ns_',
            template: 'public/index.ejs'
        }),

        new CopyWebpackPlugin([
            {
                context: 'public',
                from: '**/*'
            },
        ]),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),

        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: true
        }),
    ],

    cache: true,
    watch: false
};