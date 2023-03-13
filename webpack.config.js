const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BUILD_DIR = path.resolve(__dirname, 'build');
const SRC_DIR = path.resolve(__dirname, 'src');
module.exports = {
    entry: {
        index: [`${SRC_DIR}/index`]
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js',
        pathinfo: false,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './img/[name].[hash].[ext]',
                            outputPath: './public/img',
                        },
                    },
                ],
            },
            {
                test: /\.css/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/public/',
                        },
                    },
                    'css-loader',
                ],
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin(
            {
                patterns: [
                    {from: './public/img', to: 'img'},
                    {from: './scss/style.scss', to: 'style.scss' }
                ]
            },
            { copyUnmodified: false },
        )
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            scss: path.resolve(__dirname, './scss/style.scss')
        }
    }
}
