'use strict';

const Koa = require('koa');
const Router = require('@koa/router');
const path = require('path');
const { koaBody } = require('koa-body');

const app = new Koa();
const router = new Router();

app.use(koaBody());

router.get('/', (ctx) => {
  ctx.body = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
  </head>
  <body>
    Hejo
  </body>
  </html>`;
});

router.del('/del/:param', (ctx) => {
  ctx.status = 200;
  ctx.body = { message: `Delete działa na parametrze: ${ctx.params.param}` };
});

router.put('/put', (ctx) => {
  ctx.body = 'Put działa';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080);