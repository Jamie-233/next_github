const next = require('next');
const Koa = require('koa');
const Router = require('koa-router');

// env equal dev not usage HMR
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  router.get('/test/:id', async ctx => {
    const id = ctx.params.id;

    await handle(ctx.req, ctx.res, {
      pathname: '/test',
      query: { id }
    });

    ctx.respond = false;

    // ctx.body = { success: true, id: ctx.params.id };
    // ctx.set('Content-Type', 'application/json');
  });

  server.use(router.routes());

  server.listen(3000, () => {
    console.log('koa server listen on 3000');
  });
});
