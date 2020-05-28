import { Router } from 'express';

import Stock from './app/controllers/StockController';
import Product from './app/controllers/ProductController';

const routes = new Router();

routes.get('/stock', Stock.index);
routes.get('/product', Product.index);
routes.post('/product', Product.store);

export default routes;
