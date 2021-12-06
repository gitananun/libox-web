import { MouseEventHandler } from 'react';

export interface ButtonPropsInterface {
  title?: string;
  children?: any;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface InputPropsInterface {
  label?: string;
  search?: boolean;
  className?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
}
