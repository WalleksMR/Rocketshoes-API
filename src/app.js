import express from 'express';
import cors from 'cors';
import routes from './router';
import './database';

class App {
  constructor() {
    this.server = express();

    this.middleawares();
    this.routes();
  }

  middleawares() {
    this.server.use(express.json());
    this.server.use(cors({ origin: 'http://localhost:3000' }));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
