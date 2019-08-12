import axios, { AxiosResponse } from 'axios';
import { stringify } from "querystring";
import { BodyTokenToSend } from "../models/bodyTokenToSend";
import { BodyToFormUrlEncoded } from '../models/bodyToFormUrlEncoded';
import { ENV } from '../constants/index';

/**
 * Servicio para uso de API de Spotify
 *
 * @export
 * @class SpotifyService
 */
export default class SpotifyService {

  /**
   * Envía la petición del token a la API de Spotify
   *
   * @static
   * @param {bodyTokenReq} bodyTokenReq
   * @returns {Promise<AxiosResponse<any>>}
   * @memberof SpotifyService
   */
  static async getToken(code: string): Promise<AxiosResponse<any>> {
    const bodyToParse: BodyToFormUrlEncoded = {
      code,
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:4200/callback'
    };    
    const basicAuth: string = `Basic ${Buffer.from(`${ENV.CLIENT_ID}:${ENV.CLIENT_SECRET}`).toString('base64')}`;

    const bodyToken: BodyTokenToSend = {
      body: this.toFormUrlEncoded(bodyToParse),
      headers: {
        Authorization: basicAuth,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    return await axios.post('https://accounts.spotify.com/api/token', bodyToken.body, { headers: bodyToken.headers });
  }

  private static toFormUrlEncoded(body: any): string {
    return stringify(body);
  }

}