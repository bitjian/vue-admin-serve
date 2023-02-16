import express from 'express';

export default function api() {
  const router = express.Router();
  router.get('/hello', (req, res) => {
    res.send('hello world');
  });
  return router;
}
