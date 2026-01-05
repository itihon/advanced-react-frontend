import type { StorybookConfig } from '@storybook/react-webpack5';
import buildLoaders from '../build/buildLoaders';
import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const isDev = process.env.NODE_ENV === 'development';

const config: StorybookConfig = {
  webpackFinal: async (config) => {

    config.plugins = [
      ...(config.plugins || []),
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
      new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(isDev),
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'public/locales',
            to: 'locales',
          },
          {
            from: 'public/assets/avatars',
            to: 'assets/avatars',
          },
        ],
      }),
    ];

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

    const fileLoaderRule = config?.module?.rules?.find(
      r => ((r as RuleSetRule).test as RegExp).test('.svg')
    ) as RuleSetRule;

    fileLoaderRule.exclude = /\.module\.svg$/;

    config?.module?.rules?.splice(0, 0, buildLoaders({ isDev })[2]);

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
        rules: [buildLoaders({ isDev })[1]/* sassLoader */],
      },
    },
  ],
  "framework": "@storybook/react-webpack5"
};
export default config;