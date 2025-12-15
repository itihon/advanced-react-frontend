import type { StorybookConfig } from '@storybook/react-webpack5';
import buildLoaders from '../build/buildLoaders';
import path from 'path';

const config: StorybookConfig = {
  webpackFinal: async (config) => {

    config.entry = [
      ...(Array.isArray(config.entry) ? config.entry : []),
      './src/app/styles/index.scss',
    ];

    config.resolve = {
      ...(config.resolve || {}),
    };

    config.resolve.modules = [
      path.resolve('./src'),
      path.resolve('./'),
      ...(config.resolve.modules || []),
    ];

    const fileLoaderRule = config.module.rules.find(
      r => ((r as RuleSetRule).test as RegExp).test('.svg')
    ) as RuleSetRule;

    fileLoaderRule.exclude = /\.module\.svg$/;

    config.module.rules.splice(0, 0, buildLoaders({ isDev })[2]);

    return config;
  },
  "stories": [
    "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [buildLoaders({ isDev: true })[1]/* sassLoader */],
      },
    },
  ],
  "framework": "@storybook/react-webpack5"
};
export default config;