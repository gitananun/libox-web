import { MouseEventHandler } from 'react';

export interface ButtonPropsInterface {
  title: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface InputPropsInterface {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}
