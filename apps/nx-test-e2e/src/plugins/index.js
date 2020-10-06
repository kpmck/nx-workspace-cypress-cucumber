const { getWebpackConfig } = require("@nrwl/cypress/plugins/preprocessor")
const webpack = require("@cypress/webpack-preprocessor")

const featureConfig = {
  test: /\.feature$/,
  use: [
    {
      loader: "cypress-cucumber-preprocessor/loader",
    },
  ],
}

const featuresConfig = {
  test: /\.features$/,
  use: [
    {
      loader: "cypress-cucumber-preprocessor/lib/featuresLoader",
    },
  ],
}

module.exports = (on, config) => {
  const webpackConfig = getWebpackConfig(config)
  webpackConfig.node = {
    fs: "empty",
    child_process: "empty",
    readline: "empty",
  }
  webpackConfig.module.rules.push(featureConfig)
  webpackConfig.module.rules.push(featuresConfig)

  const options = {
    webpackOptions: webpackConfig,
  }
  on("file:preprocessor", webpack(options))
}