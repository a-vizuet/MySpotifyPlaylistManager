import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import * as bodyParser from 'body-parser';
import SpotifyRoutes from '../routes/spotify.routes';

class Server {
  app: express.Application;

  constructor() {
    this.app = express();

    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  
    this.app.use(helmet());
    this.app.use(helmet.noSniff());

    this.app.use(cors());
  
    this.app.use(SpotifyRoutes.router);
  }

}

export default new Server().app;