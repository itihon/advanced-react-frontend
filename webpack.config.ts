import path from 'path';
import 'webpack-dev-server';
import buildWebpackConfig from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode } from './config/build/types';

export default (env: BuildEnv) => {
  const mode: BuildMode = env.mode || 'development';
  const port = env.port || 3030;
  const isDev = mode === 'development';

  return buildWebpackConfig({
    port,
    mode,
    paths: {
      entry: './src/index.tsx',
      build: path.resolve(__dirname, 'dist'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src'),
    },
    isDev,
  });
};