const path = require('path')
const Koa = require('koa')
const app = new Koa()
 
const index = require('./src/index/router.js')
const users = require('./src/users/router.js')

global.home = __dirname;
 
app.use(require('koa-static')(__dirname + '/public'))

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

const render = require('koa-art-template');

render(app, {
  root: path.join(__dirname, '.'),
  extname: '.art',
  debug: process.env.NODE_ENV !== 'production'
});

// routes 
const mount = require('.')
mount(app)


app.listen(3001)
