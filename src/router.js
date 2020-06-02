import { Router } from 'express';

import Stock from './app/controllers/StockController';
import Product from './app/controllers/ProductController';

const routes = new Router();

routes.get('/stock', Stock.index);
routes.get('/stock/:id', Stock.indexId);
routes.get('/products', Product.index);
routes.get('/products/:id', Product.indexId);
routes.post('/products', Product.store);

export default routes;
