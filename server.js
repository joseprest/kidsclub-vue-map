require('newrelic')
var sslRedirect = require('heroku-ssl-redirect')
var express = require('express')
var path = require('path')
const history = require('connect-history-api-fallback')
// ^ middleware to redirect all URLs to index.html
// var serveStatic = require('serve-static')
var compression = require('compression')

const app = express()

// enable ssl redirect
app.use(sslRedirect())
app.use(compression())
const staticFileMiddleware = express.static(path.join(__dirname, '/dist'))
// app.use(serveStatic(__dirname + "/dist"));

app.use(staticFileMiddleware)
app.use(history())
app.use(staticFileMiddleware)
// ^ `app.use(staticFileMiddleware)` is included twice as per https://github.com/bripkens/connect-history-api-fallback/blob/master/examples/static-files-and-index-rewrite/README.md#configuring-the-middleware

app.get('/', function (req, res) {
  res.render(path.join(__dirname, '/dist/index.html'))
})

var port = process.env.PORT || 5000
app.listen(port)

console.log('server started ' + port)
