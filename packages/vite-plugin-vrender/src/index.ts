import type { Plugin, ViteDevServer } from 'vite'



export default function vrenderPlugin(): Plugin {
  console.log('pppppppp')

  return {
    name: 'vite:vrender',
    enforce: 'pre',
    transform(code, id) {
      const vrenderFileRE = /\.vd$/
      const groupRE = /\<group\>(\n*.*\n*)*\<\/group\>/
      const scriptRE = /\<script\>(\n(.*\n)*)\<\/script\>/
      const langRE = /\<script\s*(\slang\s*\=\"(\w*?)\")?\s*\>/
      //
      console.log({ id }); console.log('※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※')
      if (!vrenderFileRE.test(id)) return code
      console.log({ code, id })

      const group = code.match(groupRE)
      const script = code.match(scriptRE)
      console.log({ group })
      console.log({ script })


    }
  }
}
