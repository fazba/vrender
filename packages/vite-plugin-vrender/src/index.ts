import type { Plugin, ViteDevServer } from 'vite'



export default function vrenderPlugin(): Plugin {


  return {
    name: 'vite:vrender',
    enforce: 'pre',
    transform(code, id, opt) {
      const vrenderFileRE = /\.vd$/
      const scriptRE = /\<script\>(\n(.*\n)*)\<\/script\>/
      const langRE = /\<script\s*(\slang\s*\=\"(\w*?)\")?\s*\>/
      if (!vrenderFileRE.test(id)) return code

      const script = code.match(scriptRE)


    }
  }
}
