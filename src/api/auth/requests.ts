import { ILoginBody } from './types';

import { httpClient } from '../client';

export const login = ({ userId, userName, password }: ILoginBody) => 
  httpClient.post<{ access_token: string }>('/auth/login', { userId: +userId, userName, password}).then((res) => {
    return res.data.access_token;
})