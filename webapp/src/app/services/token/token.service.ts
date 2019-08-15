import { Injectable } from '@angular/core';
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, SCOPES } from '@constants/index';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private http: HttpClient
  ) { }

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

  async getToken(code: string): Promise<void> {
    const url = `http://localhost:8080/token`;

    try {
      const res = await this.http.post(url, { code }).toPromise();

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

}
