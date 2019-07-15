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
    const bodyTokenReq: BodyTokenReceived = req.body;

    try {
      const spotiRes = await SpotifyService.getToken(bodyTokenReq);
      
      console.log(spotiRes);
    } catch (error) {
      console.log(error);
    }
  }

}