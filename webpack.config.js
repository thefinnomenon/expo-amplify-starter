// eslint-disable-next-line @typescript-eslint/no-var-requires
const createExpoWebpackConfigAsync = require('@expo/webpack-config');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = async (env, argv) => {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.resolve.alias = {
    ...config.resolve.alias,

    '@api': path.resolve(__dirname, 'src/api/'),
    '@assets': path.resolve(__dirname, 'src/assets/'),
    '@components': path.resolve(__dirname, 'src/components/'),
    '@i18n': path.resolve(__dirname, 'src/i18n/'),
    '@navigation': path.resolve(__dirname, 'src/navigation/'),
    '@screens': path.resolve(__dirname, 'src/screens/'),
    '@services': path.resolve(__dirname, 'src/services/'),
    '@styles': path.resolve(__dirname, 'src/styles/'),
    '@utilities': path.resolve(__dirname, 'src/utilities/'),
  };

  return config;
};
