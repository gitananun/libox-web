export const onValidationRejected = (res: any) => {};

export const setAccessToken = (token: string) => localStorage.setItem('access_token', token);
export const getAccessToken = (): string | null => localStorage.getItem('access_token');
