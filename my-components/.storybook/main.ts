import type {StorybookConfig} from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: cfg => {
    const imageRule = cfg.module?.rules?.find(rule => {
      const test = (rule as { test: RegExp }).test

      if (!test) {
        return false
      }

      return test.test('.svg')
    }) as { [key: string]: any }

    imageRule.exclude = /\.svg$/

    cfg.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return cfg
  }
};

export default config;
