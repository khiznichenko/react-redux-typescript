var webpack = require('webpack');
var path = require('path');
var packageJson = require('./package.json');

var isProduction = process.argv.indexOf('-p') >= 0;
var sourcePath = path.join(__dirname, './src');

var StyleLintPlugin = require('stylelint-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: './src/main.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isProduction ? '[hash:base64:5]' : '[local]__[hash:base64:5]',
              },
              sourceMap: !isProduction,
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('postcss-import')({addDependencyTo: webpack}),
                require('postcss-url')(),
                require('postcss-preset-env')({
                  /* use stage 2 features (defaults) */
                  stage: 2
                }),
                require('postcss-reporter')(),
                require('postcss-browser-reporter')({
                  disabled: isProduction
                })
              ]
            }
          }
        ]
      },
      // static assets
      {test: /\.html$/, use: 'html-loader'},
      {test: /\.svg$/, use: 'svg-inline-loader?classPrefix&removeSVGTagAttrs=false'},
      {
        test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false
    }),
    new MiniCssExtractPlugin({
      filename: '[hash].css',
      disable: !isProduction
    }),
    new StyleLintPlugin({ files: 'src/**/*.?(s)css' }),
    new HtmlWebpackPlugin({
      template: 'src/assets/index.html',
      minify: {
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true
      },
      meta: {
        title: packageJson.name,
        description: packageJson.description,
        keywords: Array.isArray(packageJson.keywords) ? packageJson.keywords.join(',') : undefined
      }
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
      tslint: path.resolve(__dirname, 'tslint.json'),
    }),
  ],
  devServer: {
    contentBase: sourcePath,
    hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true
    },
    stats: 'minimal',
    clientLogLevel: 'warning'
  },
};
