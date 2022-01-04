import { successToast } from './../components/shared/Toast';
export const setAccessToken = (token: string): void => localStorage.setItem('accessToken', token);
export const getAccessToken = (): string | null => localStorage.getItem('accessToken');
export const removeAccessToken = (): void => localStorage.removeItem('accessToken');

export const isAuthenticated = (): boolean => localStorage.getItem('accessToken') !== null;

export const copyToClipboard = (text: string): void => {
  navigator.clipboard.writeText(text).then(() => successToast('Copied to clipboard'));
};
