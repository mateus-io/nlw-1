import { Router } from 'express';

import ProductsController from '../controllers/ProductsController';

const productsController = new ProductsController();

const routes = Router();

routes.get('', productsController.index);

export default routes;