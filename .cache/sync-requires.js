const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/nimmi/Documents/exerciseFiles/reactDocsGatsby/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/nimmi/Documents/exerciseFiles/reactDocsGatsby/src/pages/404.js"))),
  "component---src-pages-aboutus-js": hot(preferDefault(require("/home/nimmi/Documents/exerciseFiles/reactDocsGatsby/src/pages/aboutus.js"))),
  "component---src-pages-doc-js": hot(preferDefault(require("/home/nimmi/Documents/exerciseFiles/reactDocsGatsby/src/pages/doc.js"))),
  "component---src-pages-helloworld-js": hot(preferDefault(require("/home/nimmi/Documents/exerciseFiles/reactDocsGatsby/src/pages/helloworld.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/nimmi/Documents/exerciseFiles/reactDocsGatsby/src/pages/index.js"))),
  "component---src-pages-introducing-jsx-js": hot(preferDefault(require("/home/nimmi/Documents/exerciseFiles/reactDocsGatsby/src/pages/introducing-jsx.js")))
}

