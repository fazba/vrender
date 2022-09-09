import { defineConfig } from "vite";
import Inspect from 'vite-plugin-inspect'
// import { visualizer } from "rollup-plugin-visualizer";
export default defineConfig({
  plugins: [
    Inspect({
      build: true,
      outputDir: '.vite-inspect'
    })
    // visualizer(),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    proxy: {
      "^/generatePNG": {
        target: "http://172.10.21.103:81/",
      },
    },
  },
});
