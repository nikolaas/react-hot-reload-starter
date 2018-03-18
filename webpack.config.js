const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const { enableInProd, enablePluginInProd } = require('./helpers/switchers');
const { extractProdCss, extractDevCss } = require('./helpers/exctact-css');

const vendorsCssExtractor = new ExtractTextPlugin('[name].[contenthash].css');
const appCssExtractor = new ExtractTextPlugin('[name].[contenthash].css');
const extractVendorCss = enableInProd(extractProdCss(vendorsCssExtractor), extractDevCss);
const extractAppCss = enableInProd(extractProdCss(appCssExtractor), extractDevCss);

const NODE_ENV = process.env.NODE_ENV || 'development';

const globalConstants = {
    'process.env.NODE_ENV': `"${NODE_ENV}"`,
};

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
            {
                test: /\.css/,
                include: /node_modules/,
                use: extractVendorCss([
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true,
                            hmr: false,
                        }
                    },
                    { loader: 'css-loader', options: { sourceMap: true } },
                ])
            },
            {
                test: /\.scss/,
                include: path.join(__dirname, 'src'),
                use: extractAppCss([
                    { loader: 'style-loader', options: { sourceMap: true } },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            minimize: NODE_ENV === 'production',
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: [
                                autoprefixer,
                            ]
                        }
                    },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ])
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    plugins: [
        ...enablePluginInProd(new CleanWebpackPlugin(['dist'])),
        ...enablePluginInProd(new webpack.NoEmitOnErrorsPlugin()),
        new webpack.DefinePlugin(globalConstants),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        ...enablePluginInProd(vendorsCssExtractor),
        ...enablePluginInProd(appCssExtractor),
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};
