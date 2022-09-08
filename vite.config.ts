import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
export default defineConfig({
  plugins: [
    visualizer(),
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
// rewrite: path => path.replace(/^\/api/, ""),
