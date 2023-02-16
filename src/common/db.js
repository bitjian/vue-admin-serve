import { DB_CONFIG } from '../common/db';

const knex = require('knex')({
  client: 'mysql',
  connection: DB_CONFIG,
});

async function query(...arg) {
  let ret;
  try {
    ret = await knex.raw(...arg);
  } catch (err) {
    console.log(`执行sql脚本失败：${err}`);
    throw new Error(`执行sql脚本失败：${err}`);
  }
  return ret[0];
}

const select = query;
export { knex, select };
