const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    nodeModulesPaths: [path.resolve(__dirname, './node_modules')],
  },
  projectRoot: __dirname,
  watchFolders: [
    __dirname,
    path.resolve(__dirname, 'app'), // Если у вас есть исходный код в папке `app`
    path.resolve(__dirname, 'src'), // Если у вас есть исходный код в папке `src`
  ],
};

module.exports = mergeConfig(getDefaultConfig(), config); 