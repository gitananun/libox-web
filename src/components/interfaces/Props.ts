import { MouseEventHandler } from 'react';

export interface ClassNameInterface {
  className?: string;
}
export interface ButtonPropsInterface {
  title?: string;
  children?: any;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface InputPropsInterface {
  label?: string;
  value?: string;
  search?: boolean;
  className?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
}
