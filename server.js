const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');

// env equal dev not usage HMR
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.get('/a/:id', async ctx => {
    const id = ctx.params.id;
    const actualPage = '/a';
    const queryParams = { id };

    await app.render(ctx.req, ctx.res, actualPage, queryParams);

    ctx.respond = false;

    // ctx.body = { success: true, id: ctx.params.id };
    // ctx.set('Content-Type', 'application/json');
  });

  server.use(router.routes());

  server.use(async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.listen(3000, () => {
    console.log('koa server listen on 3000');
  });
});
