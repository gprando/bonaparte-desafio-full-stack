import { Router } from 'express';

// =========== Controllers ==========
import MoviesController from './app/controllers/MoviesController';
import DownloadFilesAndInsertDatasController from './app/controllers/DownloadFilesAndInsertDatasController';

const routes = new Router();

routes.post('/movies', MoviesController.store);
routes.post('/import', DownloadFilesAndInsertDatasController.store);

export default routes;
