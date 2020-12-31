const { config } = require('./webpack.common.js')
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
    mode: 'development',
    target: "web",
    devServer: {
        contentBase: './public',
        host: 'localhost',
        hot: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'eslint-loader',
                },
                enforce: 'pre'
            }
        ],
    },
    devtool: 'eval-cheap-module-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack demo',
            publicPath: '/',
            template: './public/index.html'
        })
    ]
})
