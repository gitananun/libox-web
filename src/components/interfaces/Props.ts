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
  accept?: string;
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
  onFocus?: React.ChangeEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

export interface TextAreaPropsInterface {
  rows?: number;
  cols?: number;
  error?: string;
  label?: string;
  value?: string;
  required?: boolean;
  readOnly?: boolean;
  className?: string;
  placeholder?: string;

  innerRef?: React.LegacyRef<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export interface SelectPropsInterface {
  error?: string;
  label?: string;
  value?: string;
  className?: string;
  options?: { title: any; value: any }[];
  innerRef?: React.LegacyRef<HTMLSelectElement>;
  onFocus?: React.ChangeEventHandler<HTMLSelectElement>;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  defaultValue?: string | number | readonly string[] | undefined;
}

export interface ChipPropsInterface {
  label: string;
  checked?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
