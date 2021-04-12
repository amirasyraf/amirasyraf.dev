let mix = require('laravel-mix');
const crypto = require('crypto');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin')

const rand = Math.random.toString() + new Date().getTime().toString();
const hash = crypto.createHash('md5').update(rand).digest('hex');

mix.sass('src/scss/app.scss', `dist/app.css?${hash}`);

mix.webpackConfig({
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            inject: false
        }),
        new HtmlReplaceWebpackPlugin([
            {
                pattern: '@HASH@',
                replacement: hash
            },
        ])
    ],
});