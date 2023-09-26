import { SuccessResponse } from 'data/shared/Response';
import { subscribeNewsletter, SubscribeNewsletterParams } from 'services/newsletters';

export const subscribeNewsletterAction = async (params: SubscribeNewsletterParams): Promise<SuccessResponse<string>> =>
  subscribeNewsletter(params);
