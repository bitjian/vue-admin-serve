import express from 'express';
import { knex, redis } from '../common';

export default function api() {
  const router = express.Router();
  router.get('/hello', (req, res) => {
    res.send('hello world');
  });
  router.get('/testRedis', async (req, res) => {
    // res.send('hello world');
    await redis.set('mykey', 'value');
    const result = await redis.get('mykey');
    console.log(result);
    res.send(result);
  });
  router.get('/testDb', async (req, res) => {
    const result = await knex.raw('select * from mg_tags');
    console.log(result);
    res.send(result);
  });
  return router;
}
