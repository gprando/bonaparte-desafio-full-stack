import { Router } from 'express';

import MoviesController from './app/controllers/MoviesController';
import DownloadFilesAndInsertDatasController from './app/controllers/DownloadFilesAndInsertDatasController';

const routes = new Router();

routes.post('/movies', MoviesController.store);
routes.get('/movies', MoviesController.index);
routes.get('/movies/:_id', MoviesController.show);

routes.post('/import', DownloadFilesAndInsertDatasController.store);

export default routes;
