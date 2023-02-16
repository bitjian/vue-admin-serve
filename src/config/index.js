export default {
  cors: true,
  DB_CONFIG: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'test_zizi',
  },
  REDIS_CONFIG: {
    client: 'redis',
    connection: {
      cluster: false,
      options: {
        host: '127.0.0.1',
        port: '6379',
        password: '',
      },
    },
  },
};
