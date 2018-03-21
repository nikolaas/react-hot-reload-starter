const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
const { enableInProd, enablePluginInProd } = require('./helpers/switchers');
const getVersion = require('./helpers/get-version');

/** Контекстный путь, на котором развернуто приложение. Должен указываться без завершающего слэша! */
const APP_BASE_URL = process.env.APP_BASE_URL || '';
/** Тип сборки: production или development */
const NODE_ENV = process.env.NODE_ENV || 'development';
/** Версия приложения */
const VERSION = getVersion();

const jsOutput = enableInProd(`js/[name].js?v=${VERSION}`, 'js/[name].js?hash=[hash]');
const cssOutput = enableInProd(`css/[name].css?v=${VERSION}`, 'css/[name].js?hash=[chunkhash]');
const cssChunkOutput = enableInProd(`css/[id].css?v=${VERSION}`, 'css/[id].js?hash=[chunkhash]');

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
            './src/index.js'
        ],
    },
    output: {
        filename: jsOutput,
        path: path.resolve(__dirname, 'dist'),
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
                        emitWarning: NODE_ENV !== 'production',
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
                use: [
                    enableInProd(MiniCssExtractPlugin.loader, { loader: 'style-loader', options: { hmr: false, } }),
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                ]
            },
            {
                test: /\.scss/,
                include: path.join(__dirname, 'src'),
                use: [
                    enableInProd(MiniCssExtractPlugin.loader, { loader: 'style-loader', options: { sourceMap: true } }),
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
                ]
            },
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
            favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
            baseUrl: `${APP_BASE_URL}/`
        }),
        ...enablePluginInProd(new MiniCssExtractPlugin({ filename: cssOutput, chunkFilename: cssChunkOutput })),
    ],
    devtool: enableInProd('source-map', 'cheap-module-eval-source-map'),
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        historyApiFallback: true,
    }
};
