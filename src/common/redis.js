import config from '../config/index';
import Redis from 'ioredis';
const { REDIS_CONFIG } = config;

const getRedis = (cnf) => {
  if (cnf.connection.cluster) {
    return new Redis.Cluster(cnf.options.nodes, cnf.options.clusterOptions);
  }
  return new Redis(cnf.connection.options);
};

const redis = getRedis(REDIS_CONFIG);

export default redis;
