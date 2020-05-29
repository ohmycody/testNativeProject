import {AccessTokenType} from '../store/auth/types';

export enum API_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const apiClient = async (
  url: string,
  accessToken: AccessTokenType,
  method: API_METHODS = API_METHODS.GET,
): Promise<any> => {
  const response: any = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const responseData = await response.json();

  return responseData;
};

export default apiClient;
