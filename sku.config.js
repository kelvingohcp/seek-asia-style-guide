const path = require('path');
const merge = require('webpack-merge');

module.exports = {
  port: 3000,
  renderEntry: 'docs/src/server-render.js',
  clientEntry: 'docs/src/client-render.js',
  srcPaths: ['./docs', './react', './jobsDB', './jobStreet', './theme'],
  target: 'docs/dist',
  dangerouslySetWebpackConfig: webpackConfig => {
    const webpackOverride = {
      resolve: {
        alias: {
          'seek-asia-style-guide': __dirname
        },
        modules: ['node_modules', 'wip_modules', 'components']
      }
    };

    webpackConfig.module.rules.unshift({
      enforce: 'pre',
      test: /(?!\.css)\.js$/,
      use: 'webpack-import-glob-loader'
    });
    webpackConfig.module.rules.push({
      test: /\.css$/,
      include: /node_modules/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        }
      ]
    });

    const config = merge(webpackConfig, webpackOverride);
    return config;
  },
}