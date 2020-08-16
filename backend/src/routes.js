import { Router } from 'express';

import MoviesController from './app/controllers/MoviesController';

const routes = new Router();

routes.post('/movies', MoviesController.store);
routes.get('/movies', MoviesController.index);
routes.get('/movies/:_id', MoviesController.show);


export default routes;
