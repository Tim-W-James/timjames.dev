/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import * as path from "path";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";
import sassDts from "vite-plugin-sass-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // Port must equal port in ./netlify.toml
  server: {
    port: 3000,
    watch: {
      ignored: ["**/cssClasses.d.ts", "**/*module.scss.d.ts"],
    },
  },
  // Define paths relative to the ./public directory here.
  // Otherwise, use ./tsconfig.paths.json
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "/assets"),
    },
  },
  css: {
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
    eslintPlugin(),
    AutoImport({
      /// Targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.md$/, // .md
      ],

      // Global imports to register
      imports: [
        // presets
        "vitest",
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
    sassDts(),
  ],
  build: {
    sourcemap: true,
  },
  // https://github.com/vitest-dev/vitest
  test: {
    include: ["src/**/*.test.{ts,tsx}"],
    environment: "happy-dom",
    globals: true,
    coverage: {
      reporter: ["text", "json", "html"],
    },
    passWithNoTests: true,
  },
});
