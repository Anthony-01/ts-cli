const path = require('path');
const htmlwebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['css-loader']
            },
            {
                test: /\.tsx?$/,
                use: ['ts-loader']
            }
        ]
    },
    plugins: [
        new htmlwebpackPlugin({
            title: 'proxy'
        })
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    }
};