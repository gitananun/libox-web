export interface AuthTokenModel {
  accessToken: string;
  tokenType: string;
}

export const authTokenFromMap = (map: any): AuthTokenModel => {
  return {
    accessToken: map['access_token'],
    tokenType: map['token_type'],
  };
};
