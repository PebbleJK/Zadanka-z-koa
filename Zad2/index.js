'use strict';

const Koa = require('koa');
const Router = require('@koa/router');
const render = require('koa-ejs');
const path = require('path');
const { koaBody } = require('koa-body');

const app = new Koa();
const router = new Router();

app.use(koaBody());

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'login',
  viewExt: 'html',
  cache: false,
  debug: true
});


router.get('/login', (ctx) => {
  return ctx.render('login');
});

router.post('/login', (ctx) => {
  //console.log(ctx.request.body);
  const params = ctx.request.body;
  if(params.passwd.length < 8){
    ctx.body = 'to hasło jest zbyt krótkie'; 
  } else {
    if(params.login === 'admin' && params.passwd === 'adminadmin'){
      ctx.body = 'zalogowany!';
    } else {
      ctx.body = 'Nieprawidłowa nazwa użytkownika lub hasło';
    }
  }
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080);