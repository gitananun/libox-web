import { successToast } from './../components/shared/Toast';
import languages from './languages';
export const setAccessToken = (token: string): void => localStorage.setItem('accessToken', token);
export const getAccessToken = (): string | null => localStorage.getItem('accessToken');
export const removeAccessToken = (): void => localStorage.removeItem('accessToken');

export const isAuthenticated = (): boolean => localStorage.getItem('accessToken') !== null;

export const copyToClipboard = (text: string): void => {
  navigator.clipboard.writeText(text).then(() => successToast('Copied to clipboard'));
};

export const getLanguagesEntries = Object.entries(languages).map((e) => ({ value: e[0], title: e[1].name }));
