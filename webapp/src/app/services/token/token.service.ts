import { Injectable } from '@angular/core';
import { CLIENT_ID, REDIRECT_URI, SCOPES } from '@constants/index';
import { HttpClient } from '@angular/common/http';
import { TokenResponseOK } from '@app/models';
import { BehaviorSubject } from 'rxjs';

/**
 * Servicio que maneja cuestiones relacioandas con el token
 *
 * @export
 * @class TokenService
 */
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  /**
   * Valor reactivo del token
   *
   * @private
   * @memberof TokenService
   */
  private token = new BehaviorSubject<string>(undefined);

  /**
   * Creates an instance of TokenService.
   * @param {HttpClient} http
   * @memberof TokenService
   */
  constructor(
    private http: HttpClient
  ) {}

  /**
   * Reedirige a Spotify para Iniciar Sesión
   *
   * @memberof TokenService
   */
  login(): void {
    const authorize = {
      response_type: '?response_type=code',
      client_id: `&client_id=${CLIENT_ID}`,
      scope: `&scope=${encodeURIComponent(SCOPES)}`,
      redirect_uri: `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`
    };

    const url =
      `https://accounts.spotify.com/authorize${authorize.response_type}${authorize.client_id}${authorize.scope}${authorize.redirect_uri}`;

    window.location.href = url;
  }

  /**
   * Consigue el token desde la API
   *
   * @param {string} code
   * @returns {Promise<void>}
   * @memberof TokenService
   */
  async getToken(code: string): Promise<void> {
    const url = `http://localhost:8080/token`;

    console.log(code);
    try {
      const res = await this.http.post(url, { code }).toPromise() as TokenResponseOK;

      this.token.next(res.access_token);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Retorna el valor del token
   *
   * @readonly
   * @type {(string | undefined)}
   * @memberof TokenService
   */
  get gToken(): string | undefined {
    return this.token.value;
  }

}
