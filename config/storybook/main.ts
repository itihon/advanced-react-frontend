import type { StorybookConfig } from '@storybook/react-webpack5';
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
      ...(config.resolve.modules || []),
      path.resolve('./src'),
      path.resolve('./'),
    ];

    return config;
  },
  "stories": [
    "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-webpack5-compiler-swc",
    // "@storybook/addon-styling-webpack",
    {
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          // Replaces existing SCSS rules with given rule
          {
            test: /\.s[ac]ss$/i,
            use: [
              // "style-loader" creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              // "css-loader",
              {
                loader: 'css-loader',
                options: {
                  esModule: false,
                  modules: {
                    exportLocalsConvention: 'asIs',
                    auto: (resourcePath: string) => resourcePath.endsWith('.module.scss'),
                    localIdentName: process.env.NODE_ENV === 'development' ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:5]', // Generates unique class names
                  },
                },
              },
              // Compiles Sass to CSS
              "sass-loader",
            ],
          }
        ]
      }
    }
  ],
  "framework": "@storybook/react-webpack5"
};
export default config;