const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge             = require('webpack-merge');
const parts             = require('./webpack.parts');
const glob              = require('glob');

const paths = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'dist')
};

const common = merge([
    {
        bail: true,
        entry: {
            app: paths.app
        },
        output: {
            path: paths.build,
            filename: '[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'app/index.html',
                filename: 'index.html',
                inject: 'body'
            })
        ]
    },
    parts.lintCSS({ include: paths.app }),
    parts.transpile(),
    parts.loadFonts({
        options: {
            name: '[name].[ext]'
        }
    })
]);

const production = merge([
    parts.extractCSS({
        use: ['css-loader', parts.autoprefix()]
    }),
    parts.purifyCSS({
        paths: glob.sync(`${paths.app}/**/*.js`, { nodir: true }),
    }),
    parts.lintJavaScript({
        include: paths.app
    }),
    parts.loadImages({
        options: {
            limit: 15000,
            name: '[name].[ext]'
        }
    })
]);

const development = merge([
    parts.devServer({
        host: '127.0.0.1', //process.env.HOST, // Defaults to `localhost`
        port: '8080' // process.env.PORT // Defaults to 8080
    }),
    parts.loadCSS(),
    parts.loadImages()
]);

module.exports = (env) => {
    if (env === 'production' || env === 'prod') {
        return merge(common, production);
    }

    return merge(common, development);
};
