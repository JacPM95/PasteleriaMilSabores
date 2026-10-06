module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'src/tests/**/*.spec.jsx',
      { pattern: 'public/img/**/*', watched: false, included: false, served: true }
    ],
    proxies: { '/img/': '/base/public/img/' },
    preprocessors: {
      'src/tests/**/*.spec.jsx': ['webpack']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
          }
        ]
      },
      resolve: { extensions: ['.js', '.jsx'] }
    },
    customLaunchers: {
      ChromeHeadlessSinSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
      }
    },
    browsers: ['ChromeHeadlessSinSandbox'],
    browserNoActivityTimeout: 30000,
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'text-summary' },
        { type: 'html', subdir: 'html' },
        { type: 'json-summary', subdir: '.', file: 'coverage-summary.json' }
      ],
      check: {
        global: { statements: 40, branches: 30, functions: 40, lines: 40 }
      }
    },
    singleRun: true,
    client: { clearContext: false }
  });
};
