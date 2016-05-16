var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var loaders = [{
    "test": /\.js?$/,
    "exclude": /node_modules/,
    "loader": "babel",
    "query": {
        "presets": [],
        "plugins": []
    }
}];

module.exports = {
    devtool: 'eval-source-map',
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.tpl.html'),
        inject: 'body',
        filename: 'index.html'
      })
    ],
    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }]
    }
};
