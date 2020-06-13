import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const routes = Router();

const usersController = new UsersController();

routes.get('', usersController.index);

routes.get('/:id', usersController.show);

routes.post('', usersController.create);

export default routes;