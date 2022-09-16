import { defineConfig } from "vite";
import Inspect from 'vite-plugin-inspect'
import vrenderPlugin from 'vite-plugin-vrender'




export default defineConfig({
  plugins: [
    vrenderPlugin(),
    Inspect({
      build: true,
      outputDir: '.vite-inspect'
    })
  ],
  resolve: {
    alias: {
      "@": __dirname,
    },
  }
});
