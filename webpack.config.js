// eslint-disable-next-line @typescript-eslint/no-var-requires
const createExpoWebpackConfigAsync = require('@expo/webpack-config');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = async (env, argv) => {
  // Set by expo-cli during `expo build:web`
  const isEnvProduction = env.mode === 'production';

  // Create the default config
  const config = await createExpoWebpackConfigAsync(env, argv);

  if (isEnvProduction) {
    config.plugins.push(
      // Generate a service worker script that will precache, and keep up to date,
      // the HTML & assets that are part of the webpack build.
      new WorkboxWebpackPlugin.InjectManifest({
        swSrc: path.resolve(__dirname, 'src/service-worker.js'),
        dontCacheBustURLsMatching: /\.[0-9a-f]{8}\./,
        exclude: [
          /\.map$/,
          /asset-manifest\.json$/,
          /LICENSE/,
          /\.js\.gz$/,
          // Exclude all apple touch and chrome images because they're cached locally after the PWA is added.
          /(apple-touch-startup-image|chrome-icon|apple-touch-icon).*\.png$/,
        ],
        // Bump up the default maximum size (2mb) that's precached,
        // to make lazy-loading failure scenarios less likely.
        // See https://github.com/cra-template/pwa/issues/13#issuecomment-722667270
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      }),
    );
  }

  // Configure path aliases
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
