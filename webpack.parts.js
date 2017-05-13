const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports.extractCSS = ({ include, exclude, use }) => {
  // Output extracted CSS to a file
  const plugin = new ExtractTextPlugin({
    filename: '[name].css',
  });

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: plugin.extract({
            use,
            fallback: 'style-loader',
          })
        }
      ]
    },
    plugins: [ plugin ],
  };
};

module.exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    overlay: {
      errors: true,
      warnings: true
    }
  }
});

module.exports.lintJavaScript = ({ include, exclude, options }) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        enforce: 'pre',
        loader: 'eslint-loader',
        options
      }
    ]
  }
});

module.exports.loadCSS = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                include,
                exclude,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => ([
                                require('autoprefixer'),
                                require('precss')
                            ])
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    }
});

module.exports.autoprefix = () => ({
    loader: 'postcss-loader',
    options: {
        plugins: () => ([
            require('autoprefixer')
        ])
    }
});

module.exports.purifyCSS = ({ paths }) => ({
    plugins: [
        new PurifyCSSPlugin({ paths })
    ]
});

module.exports.lintCSS = ({ include, exclude }) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,
        enforce: 'pre',
        loader: 'postcss-loader',
        options: {
          plugins: () => ([
            require('stylelint')({
              // Ignore node_modules CSS
              ignoreFiles: 'node_modules/**/*.css'
            })
          ])
        }
      }
    ]
  }
});

module.exports.transpile = () => ({
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
});

module.exports.loadImages = ({ include, exclude, options } = {}) => ({
    module: {
        rules: [
            {
                test: /\.(png|jpg|svg)$/,
                include,
                exclude,
                use: {
                    loader: 'url-loader',
                    options
                }
            }
        ]
    }
});

module.exports.loadFonts = ({ include, exclude, options } = {}) => ({
    module: {
        rules: [
            {
                // Capture eot, ttf, woff, and woff2
                test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                include,
                exclude,
                use: {
                    loader: 'file-loader',
                    options
                }
            }
        ]
    }
});
