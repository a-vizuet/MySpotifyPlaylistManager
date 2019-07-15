import { Router } from 'express';
import SpotifyController from '../controllers/spotify.controller';

class SpotifyRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.post('/token', SpotifyController.token);
  }

}

export default new SpotifyRoutes();