module.exports = api => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@api': './src/api',
            '@assets': './src/assets',
            '@components': './src/components',
            '@i18n': './src/i18n',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@services': './src/services',
            '@styles': './src/styles',
            '@utilities': './src/utilities',
          },
        },
      ],
    ],
  };
};
