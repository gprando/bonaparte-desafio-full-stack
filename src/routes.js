import { Router } from 'express';

// =========== Controllers ==========

const routes = new Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'hellow' });
});

export default routes;
