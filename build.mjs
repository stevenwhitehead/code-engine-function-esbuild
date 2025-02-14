import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/main.ts'],
  platform: "node",
  bundle: true,
  outfile: 'dist/index.js',
})
