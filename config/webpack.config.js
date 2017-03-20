const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { paths, getGlobals, getEnvironmentFlags } = require('./configUtils');

module.exports = (env = {}) => {
  const { isProd, isDev } = getEnvironmentFlags(env);
  const globals = getGlobals(isProd);

  return {
    bail: isProd,
    devtool: isDev ? 'eval' : 'source-map',
    entry: [
      (isDev && require.resolve('react-dev-utils/webpackHotDevClient')),
      paths.appIndexJs
    ].filter(Boolean),
    output: {
      path: paths.appBuild,
      pathinfo: isDev,
      filename: 'static/js/[name].[hash:8].js',
      chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
      publicPath: paths.publicUrl
    },
    resolve: {
      extensions: ['.js', '.json']
    },
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          enforce: 'pre',
          loader: 'eslint-loader',
          include: paths.appSrc,
        },
        {
          exclude: [
            /\.html$/,
            /\.(js|jsx)$/,
            /\.css$/,
            /\.json$/,
            /\.svg$/
          ],
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'static/media/[name].[hash:8].[ext]'
          }
        },
        {
          test: /\.(js|jsx)$/,
          include: paths.appSrc,
          loader: 'babel-loader',
          options: {
            cacheDirectory: isDev
          }
        },
        {
          test: /\.svg$/,
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash:8].[ext]'
          }
        }
      ]
    },
    plugins: [
      new InterpolateHtmlPlugin(globals.raw),
      new HtmlWebpackPlugin({
        inject: true,
        template: paths.appHtml,
        minify: isProd && {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      }),
      new webpack.DefinePlugin(globals.stringified),
      (isDev && new webpack.HotModuleReplacementPlugin()),
      (isDev && new CaseSensitivePathsPlugin()),
      (isDev && new WatchMissingNodeModulesPlugin(paths.appNodeModules)),
      (isProd && new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          screw_ie8: true,
          warnings: false
        },
        mangle: {
          screw_ie8: true
        },
        output: {
          comments: false,
          screw_ie8: true
        }
      })),
      (isProd && new ManifestPlugin({
        fileName: 'asset-manifest.json'
      })),
    ].filter(Boolean),
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
  };
};
