const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const { enableInProd, enablePluginInProd } = require('./helpers/switchers');
const { extractProdCss, extractDevCss } = require('./helpers/exctact-css');
const getVersion = require('./helpers/get-version');

/** Контекстный путь, на котором развернуто приложение. Должен указываться без завершающего слэша! */
const APP_BASE_URL = process.env.APP_BASE_URL || '';
/** Тип сборки: production или development */
const NODE_ENV = process.env.NODE_ENV || 'development';
/** Версия приложения */
const VERSION = getVersion();

const jsOutputFilename = enableInProd(`js/[name].js?hash=${VERSION}`, 'js/[name].js?hash=[hash]');
const cssOutputFilename = enableInProd(`css/[name].css?hash=${VERSION}`, 'css/[name].js?hash=[contenthash]');

const vendorsCssExtractor = new ExtractTextPlugin(cssOutputFilename);
const appCssExtractor = new ExtractTextPlugin(cssOutputFilename);
const extractVendorCss = enableInProd(extractProdCss(vendorsCssExtractor), extractDevCss);
const extractAppCss = enableInProd(extractProdCss(appCssExtractor), extractDevCss);

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
        filename: jsOutputFilename,
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
                use: extractVendorCss([
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: false,
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
            favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
            baseUrl: `${APP_BASE_URL}/`
        }),
        ...enablePluginInProd(vendorsCssExtractor),
        ...enablePluginInProd(appCssExtractor),
    ],
    devtool: enableInProd('source-map', 'cheap-module-eval-source-map'),
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        historyApiFallback: true,
    }
};
