import { Response, Request } from "express";
import { BodyTokenReceived } from "../models/bodyTokenReceived";
import SpotifyService from '../services/spotify.service';

/**
 * Controlador de las rutas para información de la API de Spotify
 *
 * @export
 * @class SpotifyController
 */
export default class SpotifyController {
  /**
   * 
   *
   * @static
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   * @memberof SpotifyController
   */
  static async token(req: Request, res: Response): Promise<void> {
    const code: string = req.body.code;

    try {
      const spotiRes = await SpotifyService.getToken(code);
      
      console.log(spotiRes.data);
    } catch (error) {
      console.log(error);
    }
  }

}