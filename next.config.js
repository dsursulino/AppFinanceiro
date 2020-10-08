
const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  api: {
    externalResolver: true,
  },
  devIndicators: {
    autoPrerender: false,
  },
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/': { api: '/' }


    };
  }
})