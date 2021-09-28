module.exports = {
  stories: [
    '../lib/**/*-stories.mdx',
    '../lib/**/*-stories.@(ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  webpackFinal: async (config) => {
    const rule = {
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: { javascriptEnabled: true },
          },
        },
      ],
    }
    config.module.rules.push(rule)
    return config
  }
}
