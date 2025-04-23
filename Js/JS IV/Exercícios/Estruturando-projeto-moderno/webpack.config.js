const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    compress: true,
    port: 8000,
  },
  entry: {
    index: './src/index.js',
  },

  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            targets: 'defaults',
            presets: [['@babel/preset-env']],
          },
        },
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
