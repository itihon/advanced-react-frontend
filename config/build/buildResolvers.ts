import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types";
import path from "path";

export default function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
    // Add support for TypeScripts fully qualified ESM imports.
    extensionAlias: {
     ".js": [".js", ".ts"],
     ".cjs": [".cjs", ".cts"],
     ".mjs": [".mjs", ".mts"],
    },

    preferAbsolute: true,

    mainFiles: ['index'],

    modules: ['node_modules'],
    
    alias: {
      "@": options.paths.src, 
        'app': path.resolve(options.paths.src, 'app'),
        'entities': path.resolve(options.paths.src, 'entities'),
        'features': path.resolve(options.paths.src, 'features'),
        'shared': path.resolve(options.paths.src, 'shared'),
        'widgets': path.resolve(options.paths.src, 'widgets'),
        'pages': path.resolve(options.paths.src, 'pages'),
    },
  };
}