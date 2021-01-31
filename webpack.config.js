const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {  
    entry: './src/index.js', 
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js']
    },
    module: { 
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/',
                    publicPath: 'assets/',
                    emitFile: true,
                    esModule: false
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }
        ),
        new CopyWebpackPlugin({
            patterns: [{
                from: './src/styles/styles.css',
                to: ''
            }],
        })
    ]
}