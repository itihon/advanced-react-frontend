import type { Configuration as DevServerConfig } from "webpack-dev-server";
import { BuildOptions } from "./types";
import path from "path";

export default function(options: BuildOptions): DevServerConfig {
  return {
    port: options.port,  
    open: true,
    static: {
      directory: path.join(process.cwd(), 'public'),
      publicPath: '/',
    },
    historyApiFallback: true,
    hot: true,
  };
}