var webpack = require("webpack");
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');


module.exports = {
    entry: {
        app: path.resolve(APP_PATH, 'index.js')
    },
    devtool: 'eval-source-map',
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },

    //enable dev server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    //babel重要的loader在这里
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: APP_PATH

            },
            {
                test: /\.css?$/,
                loaders: 'style!css'
            },{
                test: /\.less$/,
                loaders: 'style!css!less'
            },
            {
                test:/\.(png|jpg)$/,
                loader: 'url?limit=50000'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        //new ExtractTextPlugin("src/css/sb-admin.css")
    ],

};
