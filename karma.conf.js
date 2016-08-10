var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/**/*.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      'src/**/*.js': ['webpack', 'sourcemap', 'coverage'],
      'test/**/*.js': ['webpack', 'sourcemap']
    },

    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      resolve: {
        extensions: ['', '.js', '.json']
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: path.resolve(__dirname, 'node_modules'),
            query: require('./config/babel.dev')
          },
          {
            test: /\.json$/,
            loader: 'json',
          },
          {
            test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)(\?.*)?$/,
            //include: [paths.appSrc, paths.appNodeModules],
            loader: 'file',
            query: {
              name: 'static/media/[name].[ext]'
            }
          },
          {
            test: /\.css$/,
            //include: [paths.appSrc, paths.appNodeModules],
            loader: 'style!css!postcss'
          }
        ]
      },
      postcss: function() {
        return [require('autoprefixer')];
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-coverage',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher'
    ],


    babelPreprocessor: {
      options: {
        presets: ['airbnb']
      }
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/',
      file: 'coverage.txt'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
  })
};
