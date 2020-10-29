const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

require.extensions['.css'] = () => {
  return;
};

module.exports = {
  entry: "./src/index.js",
  output:
  {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  devServer: {
    inline: false,
    historyApiFallback: true,
    hot: true,
    contentBase: __dirname + "\dist",
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options:
            {
              publicPath: './static',
              options: { injectType: 'lazySingletonStyleTag' },
            }
          },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};