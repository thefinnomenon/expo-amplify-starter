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
            '@/api': './src/api',
            '@/assets': './src/assets',
            '@/components': './src/components',
            '@/locales': './locales/',
            '@/navigation': './src/navigation',
            '@/screens': './src/screens',
            '@/styles': './src/styles',
            '@/utilities': './src/utilities',
          },
        },
      ],
    ],
  };
};
