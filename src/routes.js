import { Router } from 'express';

// =========== Controllers ==========
import MoviesController from './app/controllers/MoviesController';

const routes = new Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'hellow' });
});

routes.post('/movies', MoviesController.store);

export default routes;
