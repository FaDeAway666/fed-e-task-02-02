const { config } = require('./webpack.common.js')
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new copyWebpackPlugin({
            patterns: [ { from: 'public', to: ''}]
        }),
        new HtmlWebpackPlugin({
            title: 'webpack demo',
            publicPath: './',
            template: './public/index.html'
        })
    ]
});