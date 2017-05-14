const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');
const BabiliPlugin = require('babili-webpack-plugin');

module.exports.html = () => ({
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader!posthtml'
            }
        ]
    }
});

module.exports.javascript = () => ({
    plugins: [
        new BabiliPlugin()
    ]
});

module.exports.css = ({ options }) => ({
    plugins: [
        new OptimizeCSSAssetsPlugin({
            cssProcessor: cssnano,
            cssProcessorOptions: options,
            canPrint: false
        })
    ]
});