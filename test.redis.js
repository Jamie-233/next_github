async function test() {
  const Redis = require('ioredis');

  const redis = new Redis({
    port: 6379
  });

  await redis.set('c', 10);
  await redis.setex('cc', 10, 233);

  const keys = await redis.keys('*');
  // redis.get('cc');

  console.log(keys);
}

test();
