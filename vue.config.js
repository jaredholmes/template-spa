const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
      return {
        plugins: [
          // Prerender
          new PrerenderSPAPlugin({
            // Required - The path to the webpack-outputted app to prerender.
            staticDir: path.join(__dirname, './dist'),
            // Required - Routes to render.
            routes: ['/']
          })
        ]
      }
    }
  }
}
