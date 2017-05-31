const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge             = require('webpack-merge');
const glob              = require('glob');
const webpack           = require('webpack');

const minify            = require('./webpack-config/minify');
const lint              = require('./webpack-config/lint');
const load              = require('./webpack-config/load');
const devServer         = require('./webpack-config/dev-server');
const extractCSS        = require('./webpack-config/extract-css');
const transpile         = require('./webpack-config/transpile');
const autoprefix        = require('./webpack-config/autoprefix');
const purifyCSS         = require('./webpack-config/purify-css');

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
            filename: '[name].[hash].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'app/index.html',
                filename: 'index.html',
                inject: 'body',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })
        ]
    },
    lint.css({ include: paths.app }),
    transpile(),
    load.fonts({
        options: {
            name: '[name].[ext]'
        }
    })
]);

const production = merge([
    {
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            })
        ]
    },
    minify.css({
        options: {
            discardComments: {
                removeAll: true
            },
            // Run cssnano in safe mode to avoid
            // potentially unsafe transformations.
            safe: true
        }
    }),
    extractCSS({
        use: ['css-loader', 'sass-loader', autoprefix()]
    }),
    purifyCSS({
        paths: glob.sync(`${paths.app}/**/*.js`, { nodir: true }),
    }),
    minify.javascript(),
    lint.javascript({
        include: paths.app
    }),
    load.images({
        options: {
            limit: 15000,
            name: '[name].[ext]'
        }
    })
]);

const development = merge([
    {
        devtool: 'source-map',
    },
    devServer({
        host: '127.0.0.1', //process.env.HOST, // Defaults to `localhost`
        port: '8080' // process.env.PORT // Defaults to 8080
    }),
    load.css(),
    load.images()
]);

module.exports = (env) => {
    if (env === 'production' || env === 'prod') {
        return merge(common, production);
    }
    return merge(common, development);
};
