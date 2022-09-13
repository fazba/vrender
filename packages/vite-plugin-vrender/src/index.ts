import type { Plugin, ViteDevServer } from 'vite'



export default function vrenderPlugin(): Plugin {


  return {
    name: 'vite:vrender',
    enforce: 'pre',
    transform(code, id, opt) {

    }
  }
}
