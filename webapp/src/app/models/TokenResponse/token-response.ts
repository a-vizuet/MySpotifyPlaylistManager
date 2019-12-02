/**
 * Estructura de la respuesta del token en caso de error.
 * 
 * @interface TokenResponseError
 */
export interface TokenResponseError {
  status: number;
  message: string;
}

/**
 * Estructura de la respuesta del token en caso de ser válido;
 *
 * @interface TokenResponseOK
 */
export interface TokenResponseOK {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}
