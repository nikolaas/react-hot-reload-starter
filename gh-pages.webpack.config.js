const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackConfig = require('./webpack.config');

/** Context path on which the application is deployed. Must be specified without trailing slash! */
const APP_BASE_URL = process.env.APP_BASE_URL || '';

function generatePage(filename) {
    return new HtmlWebpackPlugin({
        filename,
        template: path.resolve(__dirname, 'public', 'index.html'),
        favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
        baseUrl: `${APP_BASE_URL}/`,
    });
}

webpackConfig.plugins.push(generatePage('get-started.html'));
webpackConfig.plugins.push(generatePage('sync-counter.html'));
webpackConfig.plugins.push(generatePage('async-computer.html'));

module.exports = webpackConfig;
