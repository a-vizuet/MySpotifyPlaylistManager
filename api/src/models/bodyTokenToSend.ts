export type BodyTokenToSend = {
  body: string,
  headers: {
    Authorization: string,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};