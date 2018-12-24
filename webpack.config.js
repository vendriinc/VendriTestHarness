const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, '/dist')
    },
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    plugins: [
        new HtmlWebPackPlugin({
            hash: true,
            filename: path.join(__dirname, '/dist/index.html'),  //target html
            template: path.join(__dirname, '/src/index.html') //source html
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['babel-preset-react']
                }
            }
        }, {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: path.join(__dirname, '/dist/styles.css')
                    }   
                },
                'css-loader'
            ]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader'
                }
            ]
        }]
    }
}