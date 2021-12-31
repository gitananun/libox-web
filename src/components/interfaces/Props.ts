import { CourseModel } from 'data/models/CourseModel';
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
  className?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  innerRef?: React.LegacyRef<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface CourseModelPropsInterface {
  course: CourseModel;
}
