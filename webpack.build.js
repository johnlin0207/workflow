const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ETP = new ExtractTextPlugin('./css/[name]_[md5:contenthash:hex:20].bundle.css');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name]_[contenthash].bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.js?$/],
                exclude: /^node_modules$/,
                loader: 'babel-loader'
            },
            {
                test: [/\.sass$/, /\.css$/, /\.scss$/],
                use: ETP.extract(['css-loader', 'sass-loader'])
            },
            {
                test: [/\.(png|jpg|svg)$/],
                exclude: /^node_modules$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]/'
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.scss', '.svg', '.jpg', '.json']
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new HtmlwebpackPlugin({template: './src/index.html'}),
        ETP
    ]
};