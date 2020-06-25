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
  method: API_METHODS,
  data?: {[key: string]: string},
): Promise<any> => {
  const body =
    method === API_METHODS.POST || method === API_METHODS.PUT
      ? {body: JSON.stringify(data)}
      : {};
  const response: any = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    ...body,
  });
  const responseData = await response.json();

  return responseData;
};

export default apiClient;
