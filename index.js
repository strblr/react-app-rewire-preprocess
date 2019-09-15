const { getBabelLoader } = require('customize-cra')

module.exports = (options = {}, ruleConfig = {}) => config => {
  const { test, include } = getBabelLoader(config)
  config.module.rules.push({
    test,
    include,
    ...ruleConfig,
    options,
    loader: 'preprocess-loader'
  })
  return config
}
