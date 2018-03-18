const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const onlyProd = require('./helpers/onlyProd');

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    mode: NODE_ENV,
    entry: {
        vendors: [
            'react',
            'react-dom',
            'react-hot-loader',
        ],
        app: [
            './src/index.js'
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loader: {
                    loader: 'eslint-loader',
                    options: {
                        emitWarning: NODE_ENV === 'development',
                        emitError: NODE_ENV === 'production',
                        failOnWarning: NODE_ENV === 'production',
                        failOnError: NODE_ENV === 'production',
                    },
                }
            },
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                }
            },
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    plugins: [
        ...onlyProd(new CleanWebpackPlugin(['dist'])),
        ...onlyProd(new webpack.NoEmitOnErrorsPlugin()),
        // new webpack.optimize.CommonsChunkPlugin({names: ['vendors'], minChunks: Infinity}),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};
