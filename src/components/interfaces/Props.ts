import { MouseEventHandler } from 'react';

export interface ClassNameInterface {
  className?: string;
}
export interface ButtonPropsInterface {
  title?: string;
  children?: any;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'reset' | 'submit' | undefined;
}
export interface InputPropsInterface {
  error?: string;
  label?: string;
  value?: string;
  search?: boolean;
  required?: boolean;
  readOnly?: boolean;
  className?: string;
  placeholder?: string;
  defaultValue?: string;
  withoutObscure?: boolean;
  type?: React.HTMLInputTypeAttribute;
  innerRef?: React.LegacyRef<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface SelectPropsInterface {
  options?: { title: any; value: any }[];
  innerRef?: React.LegacyRef<HTMLSelectElement>;
  defaultValue?: string | number | readonly string[] | undefined;
}
