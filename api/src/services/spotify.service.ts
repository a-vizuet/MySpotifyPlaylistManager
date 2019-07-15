import axios, { AxiosResponse } from 'axios';
import { stringify } from "querystring";
import { BodyTokenToSend } from "../models/bodyTokenToSend";
import { BodyTokenReceived } from '../models/bodyTokenReceived';
import { BodyToFormUrlEncoded } from '../models/bodyToFormUrlEncoded';

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
  static async getToken(bodyTokenReq: BodyTokenReceived): Promise<AxiosResponse<any>> {
    const bodyToParse: BodyToFormUrlEncoded = {
      code: bodyTokenReq.code,
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:4200/callback'
    };
    const bodyToken: BodyTokenToSend = {
      body: this.toFormUrlEncoded(bodyToParse),
      headers: {
        Authorization: bodyTokenReq.auth,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    return await axios.post('https://accounts.spotify.com/api/token', bodyToken.body, { headers: bodyToken.headers });
  }

  private static toFormUrlEncoded(body: any): string {
    return stringify(body);
  }

}