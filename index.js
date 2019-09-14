const { getBabelLoader } = require('customize-cra')

module.exports = (options = {}) => config => {
  const { test, include } = getBabelLoader(config)
  config.module.rules.push({
    test,
    include,
    loader: 'preprocess-loader',
    options
  })
  return config
}
