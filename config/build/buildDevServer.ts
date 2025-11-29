import type { Configuration as DevServerConfig } from "webpack-dev-server";
import { BuildOptions } from "./types";

export default function(options: BuildOptions): DevServerConfig {
  return {
    port: options.port,  
    open: true,
    static: './dist',
    historyApiFallback: true,
  };
}