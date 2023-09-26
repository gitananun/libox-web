import { SuccessResponse } from 'data/shared/Response';
import { instance } from 'utils/axios';

export interface SubscribeNewsletterParams {
  email: string;
}

export const subscribeNewsletter = async (params: SubscribeNewsletterParams) =>
  await instance()
    .post('newsletters/subscribe', params)
    .then((res): SuccessResponse<string> => {
      return res.data;
    });
