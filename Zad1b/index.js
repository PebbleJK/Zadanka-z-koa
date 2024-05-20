'use strict';

const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('koa-example', '/hello', (ctx) => {
  ctx.body = '<a href="http://localhost:8080/goodbye">Hello World</a>';
});

router.get('koa-example', '/goodbye', (ctx) => {
  ctx.body = '<a href="http://localhost:8080/hello">Goodbye, world</a>';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080);