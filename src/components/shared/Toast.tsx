import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const config: ToastOptions<{}> = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export const infoToast = (msg: string) => toast.info(msg, config);
export const errorToast = (msg: string) => toast.error(msg, config);
export const successToast = (msg: string) => toast.success(msg, config);
export const warningToast = (msg: string) => toast.warning(msg, config);
