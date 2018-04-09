const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const { isProd, inProdOrElse, enablePluginInProd } = require('./helpers/switchers');
const getVersion = require('./helpers/get-version');

/** Context path on which the application is deployed. Must be specified without trailing slash! */
const APP_BASE_URL = process.env.APP_BASE_URL || '';
/** Build type: production or development */
const NODE_ENV = process.env.NODE_ENV || 'development';
/** Application version */
const VERSION = getVersion();
/** Indicates whether to minify the code */
const MINIMIZE = process.env.MIN === 'false' ? false : isProd();

const globalConstants = {
    'process.env.NODE_ENV': `"${NODE_ENV}"`,
    'process.env.VERSION': `"${VERSION}"`,
    'process.env.APP_BASE_URL': `"${APP_BASE_URL}"`,
};

module.exports = {
    mode: NODE_ENV,
    entry: {
        app: [
            'babel-polyfill',
            './src/index.js',
        ],
    },
    output: {
        filename: 'js/[name].js?hash=[hash]',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loader: {
                    loader: 'eslint-loader',
                    options: {
                        emitWarning: NODE_ENV !== 'production',
                        emitError: NODE_ENV === 'production',
                        failOnWarning: NODE_ENV === 'production',
                        failOnError: NODE_ENV === 'production',
                    },
                },
            },
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.css/,
                include: /node_modules/,
                use: [
                    inProdOrElse(MiniCssExtractPlugin.loader, { loader: 'style-loader', options: { hmr: false } }),
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.scss/,
                include: path.join(__dirname, 'src'),
                use: [
                    inProdOrElse(MiniCssExtractPlugin.loader, { loader: 'style-loader', options: { sourceMap: true } }),
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            minimize: MINIMIZE,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: [
                                autoprefixer,
                            ],
                        },
                    },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },
            {
                test: /\.(jpeg|jpg|png|gif|svg)/,
                include: path.join(__dirname, 'src'),
                exclude: /\.dynamic\.svg/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]?hash=[hash]',
                    },
                },
            },
            {
                test: /\.dynamic\.svg/,
                include: path.join(__dirname, 'src'),
                use: 'react-svg-loader',
            },
        ],
    },
    optimization: {
        minimize: MINIMIZE,
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        ...enablePluginInProd(new CleanWebpackPlugin(['dist'])),
        ...enablePluginInProd(new webpack.NoEmitOnErrorsPlugin()),
        new webpack.DefinePlugin(globalConstants),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
            baseUrl: `${APP_BASE_URL}/`,
        }),
        ...enablePluginInProd(new MiniCssExtractPlugin({
            filename: 'css/[name].css?hash=[chunkhash]',
            chunkFilename: 'css/[id].css?hash=[chunkhash]',
        })),
    ],
    devtool: inProdOrElse('source-map', 'cheap-module-eval-source-map'),
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },
};
