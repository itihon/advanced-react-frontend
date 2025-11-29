import buildPlugins from './buildPlugins';
import buildLoaders from './buildLoaders';
import buildResolvers from './buildResolvers';
import { WebpackConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types";
import buildDevServer from './buildDevServer';

export default function buildWebpackConfig(options: BuildOptions): WebpackConfiguration {
  const { paths, mode, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    resolve: buildResolvers(),
    module: {
      rules: buildLoaders(options), 
    },
/*     optimization: {
      runtimeChunk: false,
      splitChunks: {
        chunks: 'all',
      },
    }, */
  };
}