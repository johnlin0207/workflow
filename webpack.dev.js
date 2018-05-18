//const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.js?$/],
                exclude: /^node_modules$/,
                loader: 'babel-loader'
            },
            {
                test: [/\.sass?$/, /\.css?$/, /\.scss?$/],
                loaders: ['style-loader', 'css-loader', 'sass-loader']
                //css-loader用于解析，而style-loader则将解析后的样式嵌入js代码
            },
            {
                test: [/\.(png|jpg|svg)$/],
                exclude: /^node_modules$/,
                //loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 51200
                    }

                }]
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.scss', '.svg', '.jpg', '.json']
    },
    plugins: [
        /*new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),*/
        new HtmlwebpackPlugin({template: './src/index.html'})
    ]
};