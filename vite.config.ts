/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";
import * as path from "path";
import postCssTsClassnames from "postcss-ts-classnames";
import { visualizer } from "rollup-plugin-visualizer";
import tailwind from "tailwindcss";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import sassDts from "vite-plugin-sass-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  // Certain processes shouldn't generate CSS types
  const enableCssTypeGen = !(process.env.DISABLE_CSS_TYPE_GEN === "true");
  return {
    // Port must equal port in ./netlify.toml
    server: {
      port: 3000,
      watch: {
        ignored: [
          "**/cssClasses.d.ts",
          "**/*module.scss.d.ts",
          "playwright-report",
        ],
      },
    },
    // Define paths relative to the ./public directory here.
    // Otherwise, use ./tsconfig.paths.json
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "/assets"),
        "@images": path.resolve(__dirname, "/assets/images"),
      },
    },
    css: {
      postcss: {
        plugins: [
          tailwind,
          autoprefixer,
          ...(enableCssTypeGen
            ? [
                postCssTsClassnames({
                  dest: "src/styles/cssClasses.d.ts",
                  // Set isModule if you want to import ClassNames from another file
                  isModule: true,
                  exportAsDefault: true, // to use in combination with isModule
                }),
              ]
            : []),
        ],
      },
      preprocessorOptions: {
        scss: {
          // Global SCSS modules
          additionalData:
            `@use "src/styles/colors.scss" as colors;` +
            `@use "src/styles/mixins.scss" as mixins;`,
        },
      },
    },
    plugins: [
      react(),
      process.env.NODE_ENV !== "test" && eslintPlugin(),
      AutoImport({
        /// Targets to transform
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.md$/, // .md
        ],

        // Global imports to register
        imports: [
          // presets
          "react",
        ],

        // Generate corresponding .eslintrc-auto-import.json file.
        // ESLint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
        eslintrc: {
          enabled: true,
          filepath: "./.eslintrc-auto-import.json",
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },

        // Filepath to generate corresponding .d.ts file.
        // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
        // Set `false` to disable.
        dts: "./types/auto-imports.d.ts",
      }),
      tsconfigPaths(),
      ...(enableCssTypeGen ? [sassDts()] : []),
      visualizer(),
    ],
    build: {
      sourcemap: true,
    },
    // https://github.com/vitest-dev/vitest
    test: {
      include: ["src/**/*.test.{ts,tsx}"],
      environment: "happy-dom",
      globals: true,
      setupFiles: ["src/setupTests.ts"],
      reporters: ["verbose"],
      coverage: {
        reporter: ["text", "json", "html"],
        enabled: true,
        exclude: ["**/styles", "**/*.stories.tsx"],
      },
      passWithNoTests: true,
    },
  };
});
