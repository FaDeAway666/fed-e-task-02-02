const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
console.log(process.env.NODE_ENV)
const config = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        // filename: 'bundle.js',
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                        // limit: 10 * 1024
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}

exports.config = config;