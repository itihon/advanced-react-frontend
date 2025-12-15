import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types';

export default function buildLoaders(options: Partial<BuildOptions>): RuleSetRule[] {
  
  // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
  const tsLoader: RuleSetRule = { 
    test: /\.([cm]?ts|tsx)$/, 
    loader: "ts-loader",
    exclude: /node_modules/,
  };

  const sassLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      // "style-loader" creates `style` nodes from JS strings
      // MiniCssExtractPlugin.loader extracts css into a separate file
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      // "css-loader",
      {
        loader: 'css-loader',
        options: {
          esModule: false,
          modules: {
            exportLocalsConvention: 'asIs',
            auto: (resourcePath: string) => resourcePath.endsWith('.module.scss'),
            localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:5]', // Generates unique class names
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  const svgLoader: RuleSetRule = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  return [
    tsLoader,
    sassLoader,
    svgLoader,
  ];
}