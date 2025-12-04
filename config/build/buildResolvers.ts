import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types";

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

    modules: [options.paths.src, 'node_modules'],
  };
}