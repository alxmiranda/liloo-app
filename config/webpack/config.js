const path = require('path');

const configDir = path.resolve(__dirname, '.');

module.exports = function(env) {
  const webpackConfigPath = path.resolve(
    configDir,
    `${env}.js`
  );

  const webpackConfig = require(webpackConfigPath);
  return webpackConfig;
};
